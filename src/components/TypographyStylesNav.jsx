' use client '

import { fugazOne } from "@/fonts"

export default function TypographyStylesNav() {
    return (
        <>
        <div className="w-screen flex absolute top-8 -right-59 gap-3">

            <div className="flex flex-row items-center">

            <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
        Spooky
            </h1>
            </div>

            <div>
                <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
        Graff
            </h1>

            </div>

            <div>
                <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
        Clean
            </h1>
            </div>

            <div>
            <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
        Monogram
            </h1>
        </div>
        </div>
        </>
    )
}