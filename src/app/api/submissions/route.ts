import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

// Initialize clients only when needed
function getNotionClient() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is not configured');
  }
  return new Client({
    auth: process.env.NOTION_API_KEY,
  });
}

// Resend client已移除，使用模拟邮件发送

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
      'Submitted At': {
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

    // Send confirmation email based on type (简化版本，仅控制台输出)
    let emailResponse;
    if (type === 'inquiry') {
      // 模拟邮件发送，输出到控制台
      console.log('📧 咨询确认邮件 (模拟发送):', {
        to: email,
        subject: 'Thank you for your inquiry - ChinaBiz Solutions',
        name: name,
        company: company,
        message: message
      });
      emailResponse = { data: { id: 'mock-email-id-' + Date.now() } };
    } else if (type === 'subscription') {
      // 模拟邮件发送，输出到控制台
      console.log('📧 订阅欢迎邮件 (模拟发送):', {
        to: email,
        subject: 'Welcome to ChinaBiz Solutions Newsletter!'
      });
      emailResponse = { data: { id: 'mock-email-id-' + Date.now() } };
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
