import Link from "next/link"
import LoginForm from "./LoginForm"

const LeftSection = () => {
  return (
    <div className="flex-1 bg-[#f7f7f7] text-black p-12 flex flex-col">
    <Link href="/" className="text-2xl text-black font-semibold">
        Osmo
    </Link>
    <div className="max-w-[480px] w-full my-16 flex flex-col items-center justify-center">
        <LoginForm />
    </div>
    <footer className="text-sm text-gray-500">
        ©2025 Chinonso James Okafor. ALL RIGHTS RESERVED.
    </footer>
</div>
  )
}

export default LeftSection