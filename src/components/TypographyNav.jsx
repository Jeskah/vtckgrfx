'use client'

import VtckGrfx from "./VtckGrfx";
import { fugazOne } from "@/fonts";
import Link from "next/link";
import TypographyStylesNav from "./TypographyStylesNav";
import { useState } from "react";

export default function TypographyNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex bg-[#232323] w-screen h-35 z-10 flex-col relative right-6">
            
        <div className="flex fixed w-screen h-24 border-[#97a590] z-10">


<VtckGrfx className="relative left-32 bottom-14 w-20 h-40 [&_path]:fill-current text-[#97a590] -rotate-7 opacity-10"/>



<div className="flex flex-col top-12 relative right-10 text-[#97a590] gap-2.5">

<button onClick={() => setIsOpen(!isOpen)}>
    <div className="h-5 w-15 bottom-0 flex relative rounded-t-[3px]">
            <p className={`${fugazOne.className} tracking-widest! text-[10px]! opacity-50!`}>
        STYLES
            </p>
    </div>
</button>


<Link href="">
    <div className="h-5 w-15 bottom-0 flex rounded-t-[3px]">
            <p className={`${fugazOne.className} tracking-widest! text-[10px]! opacity-50 z-20`}>
        FONTS
            </p>
        </div>
</Link>

<Link href="/designpage/typographypage">
    <div className="h-5 w-15 bottom-0 flex rounded-t-[3px]">
            <p className={`${fugazOne.className} tracking-widest! text-[10px]! opacity-50 z-20`}>
        HOME
            </p>
        </div>
</Link>

{isOpen && 
<div className="absolute left-36">
    <TypographyStylesNav/>
</div>}


</div>
        </div>
        </div>
    )
}