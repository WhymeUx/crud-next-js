import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async () => {
    const res = await prisma.category.findMany();
    return NextResponse.json(res)
}