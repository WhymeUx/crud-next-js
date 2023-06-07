import {  Post, PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
    const res = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            category: {
                select: {
                    id: true,
                    name: true
                }
            },
            categoryId: true,
        },
        orderBy: {
            id: "asc"
        }
    }) ;
    return NextResponse.json(res);
}

export const POST = async (req: NextRequest) => {
    // const {title, content, categoryId} = await req.json()
    const body = await req.json()
    const res = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            categoryId: body.categoryId,
        }
    });
    
    return NextResponse.json(res);
}
