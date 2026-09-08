"use client"

import { useContext } from "react"
import { searchContext } from "@/lib/searchContext"
import { wordmarks } from "@/lib/wordmarks"
import Image from "next/image"

export default function WorkmarkSearchResults() {
    const { wordmarkTags } = useContext(searchContext)
    
    const results = wordmarks.filter(wordmark => wordmarkTags.every(tag => wordmark.tags.includes(tag)))

    return (
        <>
            <div className="grid grid-cols-2 gap-20 mt-30">
                {results.map((wordmark) => (
                    <div key={wordmark.name} className="grid items-center">
                        <Image
                        height={100}
                        width={100}
                        src={wordmark.src}
                        alt={wordmark.name}/>
                    </div>
                ))}
            </div>
        </>
    )
}