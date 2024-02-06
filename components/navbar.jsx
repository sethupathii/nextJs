import Link from "next/link";

export default function () {
    return (
        <div className="bg-blue-600 px-10 py-5 flex justify-between items-center">
            <Link className="text-white font-bold" href='/'>Home</Link>
            <Link className="text-white bg-black p-5 rounded hover:bg-white hover:text-black" href='/title'>Add Title</Link>
        </div>
    )
}