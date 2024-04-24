import { NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma"
import bcrypt from "bcrypt"
export async function GET() {
    return NextResponse.json({
        message: "Hello World"
    })
}

export async function POST(req){

    const reqBody = await req.json()

    const { username, password} = reqBody;

    const usernameExists = await prisma.users.findUnique({
        where: {
            username,
        },
        select: {
            id: true,
        },
    });
    if(usernameExists){
        return NextResponse.json({
            message: "Username already exists"
        })
    };
        // const salt = await bcrypt.gensalt(10)
     const hashpassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.users.create({
        data: {
            username,
            password,
            hashpassword,
        }
    });

    return NextResponse.json({
        success: true,
        message: "Account created",
        data: {
            user: newUser,
        },
    });


}
