
import MongoDb from "@/libs/Mongodb"
import Topic from "@/Models/topic"
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await MongoDb();
    const datsa = await Topic.create({ title, description });
    return NextResponse.json({ message: datsa }, { status: 201 });
}

export async function GET() {
    await MongoDb();
    const dummy = await Topic.find();
    return NextResponse.json({ data: dummy }, { status: 201 })
}

export async function DELETE(request) {
    const data = request.nextUrl.searchParams.get("id");
    await MongoDb();
    await Topic.findByIdAndDelete(data);
    return NextResponse.json({message:"Topic deleted"},{status:200});
}




