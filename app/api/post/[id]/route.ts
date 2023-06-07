import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (req: NextRequest, {params} : {params: {id: String}}) => {
    const id =Number(params.id) ;
    const post = await prisma.post.delete({
        where: {
            id: id
        }
    })
    return NextResponse.json(post)
}

export const PATCH =async (req: NextRequest, {params} : {params: {id: String}}) => {
    const id = Number(params.id) ;
    const body = await req.json()
    const post = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            title: body.title,
            content: body.content,
            categoryId: body.categoryId
        }
    })

    return NextResponse.json(post)
}