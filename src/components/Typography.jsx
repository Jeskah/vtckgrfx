'use client'

import { useState } from "react";
import Image from "next/image";


    const typography = [

        { src: "/Amolith-Type.svg", alt: "amolith", description:"Amolith prvides wrist straps for photographers and was looking for a clean handwritten wordmark that would stand out on their packaging as well as web"},
        { src: "/MovingSpooky.svg", alt: "moving spooky", description:"Amolith prvides wrist straps for photographers and was looking for a clean handwritten wordmark that would stand out on their packaging as well as web"},
        { src: "/Tahili.svg", alt: "tahali", description:"Amolith prvides wrist straps for photographers and was looking for a clean handwritten wordmark that would stand out on their packaging as well as web"},
    ]

export default function Typography() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % typography.length);
    const prev = () => setIndex((i) => (i - 1 + typography.length) % typography.length) ;

    const current = typography[index];

    return (
        <div className="flex flex-col items-center">


                    <Image
                    src={current.src}
                    alt={current.alt}
                    width={180}
                    height={180}
                    className="opacity-50 justify-center"
                    />

                {/* <p>{current.description}</p> */}

<div className="flex flex-row items-center justify-inbetween absolute bottom-131">

    <div className="relative flex gap-66 top-32">
    <div className="flex justify-center items-center bg-[#78445C] h-10 w-10 rounded-[5px]">
        <button onClick={prev}>
            <Image src="/Arrow.svg" alt="arrow" width={10} height={10}/>
        </button>
    </div>
    <div className="flex justify-center items-center bg-[#78445C] h-10 w-10 rounded-[5px]">
        <button onClick={next}>
            <Image src="/Arrow.svg" alt="arrow" width={10} height={10} className="scale-x-[-1]"/></button>
    </div>
    </div>
</div>
        </div>
    )
}