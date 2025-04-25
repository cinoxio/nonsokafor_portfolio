import Link from "next/link"

export default function NotFound (){
    return (
        <div className="bg-red-400 h-screen w-screen mx-auto flex items-center justify-center">
            The document you are looking for is not here
            <Link href="/">Go back to Home</Link>
        </div>
    )
}
