
import { TbMoodEdit } from "react-icons/tb";
import Link from "next/link";

import Delete from "./delete"


const GetTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch your data");
        } else {
            return res.json();  // Return the parsed JSON data
        }

    } catch (error) {
        console.log("Error loading topics:", error);
    }
}



export default async function TopicList() {

    const { data } = await GetTopics()
    console.log("The Data value is ", data);
    return (
        <>
            {data.map((I) => (
                <div className="border p-4 border-slate-300 my-3">
                    <div className="flex justify-between p-3">
                        <div>
                            <h1 key={I._id} className="font-bold text-2xl">{I.title}</h1>
                            <p key={I._id}>{I.description}</p>
                        </div>
                        <div className="flex gap-4">
                            <Delete key={I._id} id={I._id} />
                            <Link key={I._id} href={`/editTopic/${I._id}`}>
                                <TbMoodEdit size={24} className="text-blue-500" />
                            </Link>

                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}