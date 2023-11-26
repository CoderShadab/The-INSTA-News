'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    const [input, setInput] = useState("")
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)
    }
    return (
        <form onSubmit={handleSubmit} className="mt-6 md:mt-5 px-3 max-w-6xl mx-auto flex gap-5 justify-between items-center border-b-2 md:border border-dark-secondary dark:border-light md:rounded-md">
            <input type="text"
                placeholder="Search Keywords..."
                className="w-full h-10  flex-1 outline-none bg-transparent placeholder:text-light-primary text-accent"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"
                className="h-10 text-accent disabled:text-light-primary "
                disabled={!input}
            >
                <IoSearchOutline className="w-5 h-5 " />
            </button>
        </form>
    )
}

export default SearchBox