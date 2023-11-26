'use client'

import Link from "next/link"
import { FaMinus } from "react-icons/fa6";
import { useRouter } from "next/navigation"


const BackButton = () => {
    const router = useRouter()

    return (
        <div className="m-3 mb-8 flex items-center w-fit text-light-secondary dark:text-light-secondary font-bold justify-between">
            <Link href="/" className="hover:text-accent underline underline-offset-4 decoration-accent selection:!decoration-light">
                Home
            </Link>
            <FaMinus className="rotate-90 w-8"></FaMinus>
            <button onClick={() => router.back()} className="hover:text-accent underline underline-offset-4 decoration-accent selection:!decoration-light">
                Back
            </button>
        </div>
    )
}

export default BackButton