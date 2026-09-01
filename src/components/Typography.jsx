'use client'

import { useState } from "react";
import { alegreyaSans } from "@/fonts";
import AmolithType from "@public/Amolith-Type.svg"
import MovingSpooky from "@public/MovingSpooky.svg"
import Tahili from "@public/Tahili.svg"
import Arrow from "@public/arrow.svg"



const typography = [
    { svg: AmolithType, alt: "amolith", description:"Amolith prvides wrist straps for photographers and was looking for a clean handwritten wordmark that would stand out on their packaging as well as web", scale: 1.2},

    { svg: MovingSpooky, alt: "moving spooky", description:"Moving Spooky is an independent hip-hop music producer and rapper; he required a logo for their artist brand and in the style of... well. Spooky!", scale: 1.1},

    { svg: Tahili, alt: "tahali", description:"Tahili is an outdoor sportswear brand specialising in surfing and water activities, looking for a rustic and natural feeling word mark", scale: 1.3},
]

export default function Typography() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % typography.length);
    const prev = () => setIndex((i) => (i - 1 + typography.length) % typography.length);

    const current = typography[index];
    const CurrentSvg = current.svg;

    return (
        <div className="flex flex-col items-center w-full relative mt-40">

            <div className="flex items-center justify-center text-black ">
                
                <CurrentSvg
                    key={index}
                    width={140}
                    height={140}
                    className="[&_path]:fill-current object-contain max-h-full max-w-full animate-fade-in"
                    style={{ transform: `scale(${current.scale})` }}
                />
            </div>

            <div className="flex flex-row justify-between gap-70 absolute [&_path:fill-current] text-black] top-12">

                <button 
                    onClick={prev} 
                    className="flex justify-center items-center border-black h-10 w-10">
                    <Arrow 
                        src="/Arrow.svg" 
                        alt="arrow" 
                        width={20} 
                        height={20}
                        style={{}}
                        />
                </button>
                <button 
                    onClick={next} 
                    className="flex justify-center items-center border-black h-10 w-10 ">
                    <Arrow 
                    src="/Arrow.svg" 
                    alt="arrow" 
                    width={20} 
                    height={20} 
                    className="[&_path]:fill-current scale-x-[-1]"/>
                </button>
            </div>

            <div className="h-20 w-85 flex relative items-center justify-center mt-20">

                <h1 className={`${alegreyaSans.className} text-[12px]! uppercase w-80 p-3 leading-4  text-black! text-center`}>
            {current.description}
                </h1>

            </div>

        </div>

        
    )
}