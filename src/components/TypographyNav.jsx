' use client '

import VtckGrfx from "./VtckGrfx"
import { fugazOne } from "@/fonts";
import Link from "next/link";
import TypographyStylesNav from "./TypographyStylesNav";

export default function TypographyNav() {

    return (
        <div className="flex flex-col absolute left-10">
            
        <div className="flex fixed w-full top-0 h-24 border-[#97a590] z-10">

<div className="absolute">
<VtckGrfx className="left-12 -top-16 w-22 h-40 relative [&_path]:fill-current text-[#97a590] -rotate-7"/>
</div>


<div className="flex flex-row gap-3 bottom-0 absolute left-62 text-[#97a590]">

<Link href="">
    <div className="h-5 w-15 bottom-0 items-center justify-center flex rounded-t-[3px]">
            <p className={`${fugazOne.className} tracking-widest! text-[12px]!`}>
        STYLES
            </p>
    </div>
</Link>

<Link href="">
    <div className="h-5 w-15 bottom-0 items-center justify-center flex rounded-t-[3px]">
            <p className={`${fugazOne.className} tracking-widest! text-[12px]!`}>
        FONTS
            </p>
        </div>
</Link>

<TypographyStylesNav/>

</div>
        </div>
        </div>
    )
}