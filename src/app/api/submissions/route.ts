import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { Resend } from 'resend';

// Initialize clients only when needed
function getNotionClient() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is not configured');
  }
  return new Client({
    auth: process.env.NOTION_API_KEY,
  });
}

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { type, name, email, company, message } = body;

    // Validate required fields
    if (!type || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate type
    if (!['inquiry', 'subscription'].includes(type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid type' },
        { status: 400 }
      );
    }

    // Prepare Notion properties based on type
    let notionProperties: any = {
      Type: {
        select: {
          name: type === 'inquiry' ? 'Inquiry' : 'Subscription'
        }
      },
      Email: {
        email: email
      },
      'Created Date': {
        date: {
          start: new Date().toISOString()
        }
      }
    };

    // Add additional fields for inquiry type
    if (type === 'inquiry') {
      if (name) {
        notionProperties.Name = {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        };
      }
      if (company) {
        notionProperties.Company = {
          rich_text: [
            {
              text: {
                content: company
              }
            }
          ]
        };
      }
      if (message) {
        notionProperties.Message = {
          rich_text: [
            {
              text: {
                content: message
              }
            }
          ]
        };
      }
    } else if (type === 'subscription') {
      // For subscription, we only need email
      notionProperties.Name = {
        title: [
          {
            text: {
              content: email.split('@')[0] // Use email prefix as name
            }
          }
        ]
      };
    }

    // Create page in Notion database
    const notion = getNotionClient();
    const notionResponse = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: notionProperties,
    });

    // Send confirmation email based on type
    const resend = getResendClient();
    let emailResponse;
    if (type === 'inquiry') {
      emailResponse = await resend.emails.send({
        from: 'noreply@sinolink.monster',
        to: email,
        subject: 'Thank you for your inquiry - ChinaBiz Solutions',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #22d3ee;">Thank you for your inquiry!</h2>
            <p>Dear ${name || 'Valued Client'},</p>
            <p>We have received your inquiry and will get back to you within 24 hours.</p>
            <p><strong>Your inquiry details:</strong></p>
            <ul>
              ${name ? `<li><strong>Name:</strong> ${name}</li>` : ''}
              <li><strong>Email:</strong> ${email}</li>
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
              ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
            </ul>
            <p>Our team of experts will review your requirements and provide you with the best solution for your China market entry needs.</p>
            <p>Best regards,<br>ChinaBiz Solutions Team</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        `,
      });
    } else if (type === 'subscription') {
      emailResponse = await resend.emails.send({
        from: 'noreply@sinolink.monster',
        to: email,
        subject: 'Welcome to ChinaBiz Solutions Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #22d3ee;">Welcome to our newsletter!</h2>
            <p>Thank you for subscribing to ChinaBiz Solutions newsletter.</p>
            <p>You will now receive:</p>
            <ul>
              <li>Latest updates on China business regulations</li>
              <li>Market entry insights and strategies</li>
              <li>Exclusive tips for WFOE registration</li>
              <li>Industry news and analysis</li>
            </ul>
            <p>We're excited to share valuable insights to help you succeed in the Chinese market.</p>
            <p>Best regards,<br>ChinaBiz Solutions Team</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: type === 'inquiry' 
        ? 'Your inquiry has been submitted successfully!' 
        : 'You have been subscribed successfully!',
      notionId: notionResponse.id,
      emailId: emailResponse?.data?.id
    });

  } catch (error) {
    console.error('Submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
