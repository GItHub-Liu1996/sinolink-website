import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    message: 'API is working',
    timestamp: new Date().toISOString(),
    environment: {
      notionApiKey: process.env.NOTION_API_KEY ? 'configured' : 'missing',
      notionDatabaseId: process.env.NOTION_DATABASE_ID ? 'configured' : 'missing',
      resendApiKey: process.env.RESEND_API_KEY ? 'configured' : 'missing',
    }
  });
}
