import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const component = await prisma.component.findUnique({
    where: { id },
  });

  if (!component) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(component);
}


export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  const updated = await prisma.component.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updated);
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await prisma.component.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'Component deleted' });
}