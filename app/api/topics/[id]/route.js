
import MongoDB from '@/libs/Mongodb'
import Topic from '@/Models/topic'
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    const { id } = params;
    const { title, description } = await request.json();
    await MongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ data: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await MongoDB();
    const title = await Topic.findOne({ _id: id })
    return NextResponse.json({ data: title })
}