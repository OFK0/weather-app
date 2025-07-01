import { getLocale } from 'next-intl/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.length < 4) {
    return Response.json(
      { error: 'Query must be at least 4 characters long.' },
      {
        status: 400,
      }
    );
  }

  try {
    const locale = await getLocale();
    const response = await fetch(
      `${process.env.WEATHERAPI_BASEURL}/search.json?key=${process.env.WEATHERAPI_APIKEY}&lang=${locale}&q=${encodeURIComponent(query || '')}`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch data from the weather API.' },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch {
    return Response.json(
      { error: 'Failed to fetch data from the weather API.' },
      {
        status: 500,
      }
    );
  }
}
