import { NextRequest } from 'next/server';
import { generateThemeZip } from '@/lib/generateThemeZip';

export async function POST(req: NextRequest) {
  const { layout, themeName } = await req.json();

  if (!layout || !Array.isArray(layout) || !themeName) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  const zipData = await generateThemeZip(layout, themeName);
  const zipUint8Array = new Uint8Array(zipData);

  return new Response(zipUint8Array, {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${themeName.replace(/\s+/g, '-').toLowerCase()}.zip"`,
    },
  });
}
