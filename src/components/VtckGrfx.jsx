"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import VtckGrfx from "../../public/VTCK-GRFX.svg"

export default function VtchGrfx({ className = "w-25 [&_path]:fill-current text-black"}) {

    return (
            <div className="flex relative right-24 p-15 z-10">
            <Link href="/designpage">
                <VtckGrfx className={className}/>
                </Link>
            </div>
    )
}