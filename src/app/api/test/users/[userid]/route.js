import { NextResponse } from "next/server";
import data from "@/../../src/app/datafolder/data.json"

export async function GET(req, context){
    const { params } = context;
    const user = data.filter(x => params.userid === x.id.toString())

    return NextResponse.json ({
        user,
    });
}