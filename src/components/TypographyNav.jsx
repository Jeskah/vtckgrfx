'use client'

import VtckGrfx from "./VtckGrfx";
import { fugazOne } from "@/fonts";
import Link from "next/link";
import TypographyStylesNav from "./TypographyStylesNav";
import { useState } from "react";
import TypographySearch from "./TypographySearch";

export default function TypographyNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (


<div className="flex flex-col border-b-3 h-fit w-full z-50 sticky top-0 bg-black">
            


<div className="relative left-2/7 z-20 w-fit">
<VtckGrfx className="flex w-15 [&_path]:fill-current text-white"/>
</div>

<div className="flex flex-col items-center mb-10">
<TypographySearch/>
</div>

<div className="flex flex-row w-full justify-center p-5 text-white gap-10 top-10">

<button onClick={() => setIsOpen(!isOpen)}>
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[10px]!`}>
            STYLES
            </p>
    </div>
</button>


<Link href="">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[10px]! z-20`}>
        FONTS
            </p>
        </div>
</Link>

<Link href="/designpage/typographypage">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[10px]! z-20`}>
        HOME
            </p>
        </div>
</Link>

</div>

<div className="absolute top-full w-full">
{isOpen && <TypographyStylesNav/>}
</div>

     </div>

        
    )
}