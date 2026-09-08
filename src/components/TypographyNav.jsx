'use client'

import VtckGrfx from "./VtckGrfx";
import { fugazOne } from "@/fonts";
import Link from "next/link";
import TypographyStylesNav from "./TypographyStylesNav";
import { useState } from "react";
import TypographySearch from "./TypographySearch";
import SelectedTags from "@/components/SelectedTags"

export default function TypographyNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (


<div className="flex flex-col border-b-3 h-83 w-full z-50 sticky top-0 bg-black">

<div className="items-center justify-center w-full flex mt-15">

    <VtckGrfx className="w-17 items-center justify-center [&_path]:fill-current text-white"/>
</div>

<div className="flex flex-row w-full justify-center text-white gap-6 mt-12">
<Link href="/designpage/typographypage">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[12px]! z-20`}>
        HOME
            </p>
        </div>
</Link>

{/* <button onClick={() => setIsOpen(!isOpen)}>
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[10px]!`}>
        STYLES
            </p>
    </div>
</button> */}


<Link href="/designpage/typographypage/fonts">
    <div>
            <p className={`${fugazOne.className} tracking-widest! text-[12px]! z-20`}>
        FONTS
            </p>
        </div>
</Link>

</div>

{/* <div className="top-full w-full">
{isOpen && <TypographyStylesNav/>}
</div> */}

<div className="flex flex-col items-center">
<TypographySearch/>
</div>

<div className="absolute top-full">
<SelectedTags/>
</div>

    </div>

        
    )
}