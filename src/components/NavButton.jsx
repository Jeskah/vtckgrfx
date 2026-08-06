'use client'

import { useState } from "react";
import { fugazOne } from "@/fonts";
import { useRouter } from "next/navigation";

export default function NavButton({ href, label}) {
    const router = useRouter();
    const [isFlashing, setIsFlashing] = useState(false);

    function handleClick() {
        if (isFlashing) return;
        setIsFlashing(true);
        setTimeout(() => {
            router.push(href);
        }, 1000);
    }

    return (
        <div 
            onClick={handleClick}
                className={`border-2 border-[#d8d8d8] text-[#d8d8d8] h-20 w-45 rounded-[3px] justify-center flex items-center bg-gray-100/10 ${isFlashing ? "animate-[flash-border_0.5s_ease-in-out_2]" : ""}`}>

            <div>
                <h1 className={`${fugazOne.className} text-sm!`}>{label}</h1>
                <div></div>
            </div>

        </div>
    )
}