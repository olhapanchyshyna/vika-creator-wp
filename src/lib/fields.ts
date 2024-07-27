export async function getFirstScreen() {
  const query = {
    query: `query getFirstScreen {
      posts(where: {categoryName: "first-screen"}) {
        nodes {
          firstScreen {
            prise
            title
          }
        }
      }
    }`
  };

  const url = 'https://vika-creator.000.pe/graphql.';
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  const firstScreen = resJson.data.posts;
  return firstScreen?.nodes;
}
