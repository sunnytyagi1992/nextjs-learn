"use server"

import { prisma } from "../utils/prisma"

export async function create(formData: FormData){

    const input =  formData.get("input") as string


   const todo =  await prisma.todo.create({
        data: {
            title: input
        }
    })
}