
"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"


export default function EditTopicData({ id, titles, descriptions }) {

    const [title, setTitle] = useState(titles);
    const [description, setDescription] = useState(descriptions);
    const router = useRouter();

    const editForms = async (e) => {
        e.preventDefault();

        try {
            const Data = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),
            })

            if (!Data.ok) {
                throw new Error("Failed to update the title and description")
            }



            router.push("/");
            router.refresh();

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={editForms} className="flex flex-col gap-3">
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Update Title" className="border flex flex-col px-8 py-3 border-slate-500" />
            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Update Description" className="border flex flex-col px-8 py-3 border-slate-500" />
            <button type="submit" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-black px-4 py-2 rounded w-fit mx-auto font-extrabold">Update Topic</button>
        </form>
    )
}

