import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const components = await prisma.component.findMany();
        return Response.json(components);
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch components' }), { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { userId, name, type, description, thumbnail, fields, children } = body;

    const newComponent = await prisma.component.create({
        data: {
            userId,
            name,
            type,
            description,
            thumbnail,
            fields,
            children,
        },
    });

    return NextResponse.json(newComponent, { status: 201 });
}
