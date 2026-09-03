"use client"

import { alegreyaSans } from "@/fonts"

export default function TypographySearch() {
    return (
        <>
        <div className="border-2 border-white rounded-[50px] w-fit h-fit top-0">
            <input type="search" placeholder="search" className={`${alegreyaSans.className} p-4 text-white tracking-widest rounded-[50px] w-40 h-6 text-[12px] align-middle`}/>
        </div>
        </>
    )
}