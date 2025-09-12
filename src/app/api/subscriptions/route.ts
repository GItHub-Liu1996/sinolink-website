import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source = 'footer' } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare data for Notion
    const notionData = {
      parent: {
        database_id: process.env.NOTION_DATABASE_ID
      },
      properties: {
        'Email': {
          title: [
            {
              text: {
                content: email
              }
            }
          ]
        },
        'Name': {
          rich_text: [
            {
              text: {
                content: name || 'Anonymous'
              }
            }
          ]
        },
        'Source': {
          select: {
            name: source
          }
        },
        'Status': {
          select: {
            name: 'Active'
          }
        },
        'Date': {
          date: {
            start: new Date().toISOString().split('T')[0]
          }
        }
      }
    };

    // Send to Notion
    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(notionData)
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.json();
      console.error('Notion API error:', errorData);
      throw new Error(`Notion API error: ${notionResponse.status}`);
    }

    const notionResult = await notionResponse.json();

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: {
        id: notionResult.id,
        email: email
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to subscribe. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
