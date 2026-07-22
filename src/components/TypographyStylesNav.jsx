' use client '

import { fugazOne } from "@/fonts"

export default function TypographyStylesNav() {
    return (
        <>
        <div className="w-screen flex absolute top-10 -right-52">

            <div className="flex flex-row gap-5 items-center justify-center">

            <div>
            <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#97a590]!`}>
        Spooky
            </h1>
            </div>

            <div>
                <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#97a590]!`}>
        Graff
            </h1>
            </div>

            <div>
                <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#97a590]!`}>
        Clean
            </h1>
            </div>

            <div>
            <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#97a590]!`}>
        Monogram
            </h1>
            </div>
        </div>
        </div>
        </>
    )
}