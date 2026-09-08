"use client"

import { useContext } from "react"
import { searchContext } from "@/lib/searchContext"
import { alegreyaSans } from "@/fonts"
import X from "@public/x.svg"

export default function SelectedTags() {
    const { wordmarkTags, setWordmarkTags, fontTags, setFontTags} = useContext(searchContext)

    return (
        <>
        <div className="flex flex-row w-full overflow-scroll z-40">
        <div className={`${alegreyaSans.className} text-[9px]! tracking-widest font-bold text-white uppercase p-1 gap-1 flex mt-0.75`}>
            {wordmarkTags.map((tag) => (
                <div key={tag} className="flex flex-row bg-black px-3 py-2 text-center items-center w-fit rounded-[5px] gap-1 relative">
                    {tag}
                    <X 
                    className="w-2 h-1.5 [&_path]:fill-current text-white"
                    onClick={() => setWordmarkTags(wordmarkTags.filter(t => t !== tag))}/>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}