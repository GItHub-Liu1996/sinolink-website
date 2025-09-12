import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, companyName, contactName, email, phone, message } = body;

    // Validate required fields
    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Analyze quiz answers and generate personalized recommendations
    const analysis = analyzeQuizAnswers(answers);
    
    // Prepare Notion data
    const notionData = {
      parent: {
        database_id: process.env.NOTION_CONSULTATION_DATABASE_ID || process.env.NOTION_DATABASE_ID
      },
      properties: {
        'Company Name': {
          title: [
            {
              text: {
                content: companyName
              }
            }
          ]
        },
        'Contact Name': {
          rich_text: [
            {
              text: {
                content: contactName
              }
            }
          ]
        },
        'Email': {
          email: email
        },
        'Phone': {
          rich_text: [
            {
              text: {
                content: phone || 'Not provided'
              }
            }
          ]
        },
        'Message': {
          rich_text: [
            {
              text: {
                content: message || 'No additional message'
              }
            }
          ]
        },
        'Industry': {
          select: {
            name: answers.find(a => a.questionId === 'industry')?.label || 'Not specified'
          }
        },
        'Company Size': {
          select: {
            name: answers.find(a => a.questionId === 'company_size')?.label || 'Not specified'
          }
        },
        'Entity Type': {
          select: {
            name: answers.find(a => a.questionId === 'entity_type')?.label || 'Not specified'
          }
        },
        'Timeline': {
          select: {
            name: answers.find(a => a.questionId === 'timeline')?.label || 'Not specified'
          }
        },
        'Priority': {
          select: {
            name: analysis.priority
          }
        },
        'Recommended Services': {
          rich_text: [
            {
              text: {
                content: analysis.recommendedServices.join(', ') || 'General consultation'
              }
            }
          ]
        },
        'Analysis Summary': {
          rich_text: [
            {
              text: {
                content: analysis.summary
              }
            }
          ]
        },
        'Next Steps': {
          rich_text: [
            {
              text: {
                content: analysis.nextSteps.join('; ')
              }
            }
          ]
        },
        'Source': {
          select: {
            name: 'Consultation Quiz'
          }
        },
        'Status': {
          select: {
            name: 'New Lead'
          }
        },
        'Date': {
          date: {
            start: new Date().toISOString().split('T')[0]
          }
        },
        'Full Answers': {
          rich_text: [
            {
              text: {
                content: JSON.stringify(answers, null, 2)
              }
            }
          ]
        }
      }
    };

    // Check if Notion is configured
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.log('Notion API not configured. Saving to console log:');
      console.log('Consultation Quiz Submission:', {
        companyName,
        contactName,
        email,
        phone: phone || '',
        message: message || '',
        answers,
        analysis,
        timestamp: new Date().toISOString(),
        source: 'consultation-quiz',
        priority: analysis.priority,
        recommendedServices: analysis.recommendedServices
      });
      
      return NextResponse.json({
        success: true,
        message: 'Consultation request submitted successfully (saved to logs)',
        analysis: analysis.summary,
        nextSteps: analysis.nextSteps,
        data: {
          companyName,
          email,
          priority: analysis.priority,
          recommendedServices: analysis.recommendedServices
        }
      });
    }

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
    console.log('Consultation Quiz saved to Notion:', notionResult.id);

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully',
      analysis: analysis.summary,
      nextSteps: analysis.nextSteps,
      data: {
        id: notionResult.id,
        companyName,
        email,
        priority: analysis.priority,
        recommendedServices: analysis.recommendedServices
      }
    });

  } catch (error) {
    console.error('Consultation quiz submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function analyzeQuizAnswers(answers: any[]) {
  const analysis = {
    priority: 'medium',
    recommendedServices: [] as string[],
    summary: '',
    nextSteps: [] as string[]
  };

  // Analyze industry type
  const industryAnswer = answers.find(a => a.questionId === 'industry');
  if (industryAnswer?.value === 'finance') {
    analysis.priority = 'high';
    analysis.recommendedServices.push('Financial License Application', 'Compliance Consulting');
  }

  // Analyze entity type
  const entityAnswer = answers.find(a => a.questionId === 'entity_type');
  if (entityAnswer?.value === 'wfoe') {
    analysis.recommendedServices.push('WFOE Registration', 'Bank Account Opening');
  } else if (entityAnswer?.value === 'joint_venture') {
    analysis.recommendedServices.push('JV Setup', 'Partnership Agreement');
  }

  // Analyze timeline urgency
  const timelineAnswer = answers.find(a => a.questionId === 'timeline');
  if (timelineAnswer?.value === 'urgent') {
    analysis.priority = 'high';
    analysis.nextSteps.push('Schedule urgent consultation call');
  }

  // Analyze compliance concerns
  const complianceAnswer = answers.find(a => a.questionId === 'compliance_concern');
  if (complianceAnswer?.answer) {
    const concerns = complianceAnswer.answer.split(',');
    if (concerns.includes('Tax Compliance')) {
      analysis.recommendedServices.push('Tax Compliance', 'Accounting Services');
    }
    if (concerns.includes('Legal Compliance')) {
      analysis.recommendedServices.push('Legal Compliance', 'Contract Review');
    }
    if (concerns.includes('HR Services')) {
      analysis.recommendedServices.push('HR Services', 'Work Permit Application');
    }
  }

  // Generate summary
  analysis.summary = generateSummary(industryAnswer, entityAnswer, timelineAnswer);
  
  // Generate next steps recommendations
  analysis.nextSteps = generateNextSteps(analysis.priority, analysis.recommendedServices);

  return analysis;
}

function generateSummary(industry: any, entity: any, timeline: any) {
  let summary = 'Based on your responses, ';
  
  if (industry?.value) {
    summary += `your ${industry.label} business `;
  }
  
  if (entity?.value) {
    summary += `planning to establish a ${entity.label} `;
  }
  
  if (timeline?.value === 'urgent') {
    summary += 'requires immediate attention. ';
  } else {
    summary += 'has good planning time. ';
  }
  
  summary += 'We recommend a comprehensive consultation to address your specific needs.';
  
  return summary;
}

function generateNextSteps(priority: string, services: string[]) {
  const steps = [];
  
  if (priority === 'high') {
    steps.push('Schedule urgent consultation within 24 hours');
  } else {
    steps.push('Schedule consultation within 48 hours');
  }
  
  if (services.includes('WFOE Registration')) {
    steps.push('Prepare company registration documents');
  }
  
  if (services.includes('Tax Compliance')) {
    steps.push('Review tax structure and compliance requirements');
  }
  
  steps.push('Receive personalized service proposal');
  steps.push('Begin implementation process');
  
  return steps;
}
