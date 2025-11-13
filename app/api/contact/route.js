export async function POST(request) {
  const data = await request.formData();
  console.log('Contact form submission:', Object.fromEntries(data));
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}