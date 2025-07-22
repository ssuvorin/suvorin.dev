interface LeadData {
  name: string;
  email: string;
  project: string;
}

export async function createLead(data: LeadData) {
  const notionKey = process.env.NOTION_KEY;
  const databaseId = process.env.NOTION_LEADS_DB;

  if (!notionKey || !databaseId) {
    throw new Error('Notion configuration missing');
  }

  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${notionKey}`,
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
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Project: {
          rich_text: [
            {
              text: {
                content: data.project,
              },
            },
          ],
        },
        Date: {
          date: {
            start: new Date().toISOString(),
          },
        },
        Status: {
          select: {
            name: 'New',
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create Notion page: ${error}`);
  }

  return response.json();
}
