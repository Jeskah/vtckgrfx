"use client"

import TypographyNav from "@/components/TypographyNav"
import { searchContext } from "@/lib/searchContext"
import { useState } from "react"

export default function TypeLayout({children}) {

    const [wordmarkTags, setWordmarkTags] = useState([])
    const [fontTags, setFontTags] = useState([])

    return (
        <>
            <searchContext.Provider 
                value={{ wordmarkTags, setWordmarkTags, fontTags, setFontTags}}>
                    <TypographyNav/>
                        {children}
            </searchContext.Provider>
        </>
    )
}   