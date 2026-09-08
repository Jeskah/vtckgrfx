"use client"

import Typography from "@/components/Typography"
import WordmarkSearchResults from "@/components/WordmarkSearchResults"
import { useContext } from "react"
import { searchContext } from "@/lib/searchContext"

export default function TypographyPage () {
    const { wordmarkTags } = useContext(searchContext)
    console.log(wordmarkTags)

    return (
        <>
        {wordmarkTags.length > 0 ? <WordmarkSearchResults/> : <Typography/>}
        
        </>
    )
}