'use client'

import VtckGrfx from "./VtckGrfx";
import { fugazOne } from "@/fonts";
import Link from "next/link";
import TypographyStylesNav from "./TypographyStylesNav";
import { useState } from "react";

export default function TypographyNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex bg-[#232323] w-screen z-10 flex-col relative">
            
        <div className="flex fixed bg-[#232323]/99 w-screen h-20 border-[#97a590] z-20">

<div className="relative left-60 bottom-31 opacity-20 z-40">
<VtckGrfx className="w-15 h-60 [&_path]:fill-current text-[#97a590]"/>
</div>

<div className="flex flex-col left-8 top-7 absolute text-[#97a590] opacity-50 gap-2">

<button onClick={() => setIsOpen(!isOpen)}>
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[12px]!`}>
            STYLES
            </p>
    </div>
</button>


<Link href="">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[12px]! z-20`}>
        FONTS
            </p>
        </div>
</Link>

<Link href="/designpage/typographypage">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[12px]! z-20`}>
        HOME
            </p>
        </div>
</Link>

{isOpen && 
<div className="absolute top-7 left-0 z-30">
    <TypographyStylesNav/>
</div>}


</div>
        </div>
        </div>
    )
}