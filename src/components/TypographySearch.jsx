"use client"

import { alegreyaSans } from "@/fonts"
import { searchContext } from "@/lib/searchContext"
import { useContext } from "react"
import { useState } from "react"
import { wordmarks } from "@/lib/wordmarks"



export default function TypographySearch() {

    const [ searchInput, setSearchInput ] = useState("")
    const allTags = wordmarks.map( wordmark => wordmark.tags).flat()
    const uniqueTags = Array.from(new Set(allTags))
    const sortedTags = uniqueTags.sort()
    const suggestedTags = searchInput === "" ? [] : sortedTags.filter(tag => tag.startsWith(searchInput.toLocaleLowerCase() ))
    const { wordmarkTags, setWordmarkTags, fontTags, setFontTags} = useContext(searchContext)

    return (
        <>
        <div className="border-2 border-white rounded-[50px] w-fit h-fit mt-9">
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="search" 
                placeholder="search styles" 
                className={`${alegreyaSans.className} p-4 text-white tracking-widest rounded-[50px] w-40 h-6 text-[12px] align-middle focus:outline-none`}
                />
        </div>

{suggestedTags.length > 0 && (
        <div className={`${alegreyaSans.className} overflow-scroll w-fit h-fit items-center text-white! uppercase text-[9px]! flex flex-row gap-5 justify-center py-5`}>
            {suggestedTags.map((tag) => (
                <div key={tag} className={`${alegreyaSans.className} text-white! uppercase tracking-[2px] gap-10`}
                        onClick={() => { setWordmarkTags([...wordmarkTags, tag]); setSearchInput(""); }}> 
                    {tag} 
                </div>
                ))}
        </div>
        )}
        </>
    )
}