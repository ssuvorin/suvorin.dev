import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, project } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !project) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      );
    }

    const notionKey = process.env.NOTION_KEY;
    const databaseId = process.env.NOTION_LEADS_DB;

    if (!notionKey || !databaseId) {
      console.error('Notion configuration missing');
      return NextResponse.json(
        { error: 'Notion configuration missing' },
        { status: 500 },
      );
    }

    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          Phone: {
            phone_number: phone,
          },
          Project: {
            rich_text: [
              {
                text: {
                  content: project,
                },
              },
            ],
          },
          Date: {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      }),
    });

    if (!response.ok) {
      let errorMsg = 'Failed to create Notion page';
      try {
        const data = await response.json();
        errorMsg = data.message || JSON.stringify(data);
      } catch {}
      console.error('Notion API error:', errorMsg);
      return NextResponse.json(
        { error: errorMsg },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Lead submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
