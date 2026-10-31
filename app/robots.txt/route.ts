export function GET() {
  const body = `User-agent: *\nAllow: /\nDisallow: /`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
