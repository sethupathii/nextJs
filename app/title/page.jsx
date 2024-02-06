
"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    console.log("Client side works");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and descriptions are required.");
            return;
        }


        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            })


            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                throw new Error("failed to create Data")
            }

        } catch (error) {

        }

    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title"
                className="border flex flex-col px-8 py-3 border-slate-500"
                onChange={(e) => setTitle(e.target.value)} value={title}
            />
            <input type="text" placeholder="Description"
                className="border flex flex-col px-8 py-3 border-slate-500"
                onChange={(e) => setDescription(e.target.value)} value={description}
            />
            <button type="submit" className="border border-blue-500 text-blue-500
             hover:bg-blue-500 hover:text-white px-4 py-2 rounded w-fit mx-auto 
             font-extrabold">Add Topic</button>
        </form>
    )
}