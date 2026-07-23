'use client'

import { useState } from "react";
// import Image from "next/image";
import { fugazOne } from "@/fonts";

import AmolithType from "@public/Amolith-Type.svg"
import MovingSpooky from "@public/MovingSpooky.svg"
import Tahili from "@public/Tahili.svg"
import VatickGraff from "@public/VatickGraff.svg"
import VatickBlocky from "@public/VATICKBLOCKY.svg"
import Arrow from "@public/arrow.svg"



const typography = [
    { svg: AmolithType, alt: "amolith", description:"Amolith prvides wrist straps for photographers and was looking for a clean handwritten wordmark that would stand out on their packaging as well as web", scale: 1.2},

    { svg: MovingSpooky, alt: "moving spooky", description:"Moving Spooky is an independent hip-hop music producer and rapper; he required a logo for their artist brand and in the style of... well. Spooky!", scale: 1.1},

    { svg: Tahili, alt: "tahali", description:"Tahili is an outdoor sportswear brand specialising in surfing and water activities, looking for a rustic and natural feeling word mark", scale: 1.3},

    { svg: VatickBlocky, alt: "vatick", description:"Vatick variation, bold, blocky and unique can be used as a stencil and would translate well into ebroidery and ", scale: 1.3},
]

export default function Typography() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % typography.length);
    const prev = () => setIndex((i) => (i - 1 + typography.length) % typography.length);

    const current = typography[index];
    const CurrentSvg = current.svg;

    return (
        <div className="flex flex-col items-center w-full gap-2">

            <div className="h-80 flex items-center justify-center border-2 border-[#78445C] w-92 text-[#97a590]! ">
                
                <CurrentSvg
                    key={index}
                    width={170}
                    height={170}
                    className="[&_path]:fill-current object-contain max-h-full max-w-full animate-fade-in"
                    style={{ transform: `scale(${current.scale})` }}
                />
            </div>

            <div className="flex flex-row justify-between gap-71 bottom-12 relative [&_path:fill-current] text-[#97a590] ">

                <button onClick={prev} className="flex justify-center items-center border-t-2 border-r-2 border-[#72455a] h-10 w-10 rounded-tr-[5px]">
                    <Arrow src="/Arrow.svg" alt="arrow" width={8} height={8}/>
                </button>
                <button onClick={next} className="flex justify-center items-center border-t-2 border-l-2 border-[#78445C] h-10 w-10 rounded-tl-[5px]">
                    <Arrow src="/Arrow.svg" alt="arrow" width={8} height={8} className="scale-x-[-1]"/>
                </button>
            </div>

            <div className="border-2 border-[#78445C] rounded-b-[7px] h-25 w-92 flex relative -mt-9">

                <h1 className={`${fugazOne.className} text-[8px]! uppercase w-90 p-3 leading-4 text-[#97a590]! opacity-30`}>
            {current.description}
                </h1>

            </div>

        </div>

        
    )
}