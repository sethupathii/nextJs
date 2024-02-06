
"use client"

import { useRouter } from "next/navigation";
import { TbGitBranchDeleted } from "react-icons/tb";

export default function Delete({ id }) {

    const router = useRouter();

    const removeTopic = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics/?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            } else {
                console.error("Failed to delete topic");
            }
        } catch (error) {
            console.error("Error deleting topic:", error);
        }
    };



    return (
        <div onClick={removeTopic} className="text-red-600 hover:cursor-pointer">
            <TbGitBranchDeleted size={24} />
        </div>
    )
}