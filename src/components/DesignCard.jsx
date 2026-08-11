"use client"


import Image from "next/image";
import Link from "next/link";
import { alegreyaSans } from "@/fonts";

export default function DesignCard({ image, alt, title, href, objectPosition, transform }) {
    return (
    <Link href={href}>
        <div className="flex flex-row w-80 relative h-38 overflow-hidden rounded-[5px]">
        <div className="absolute inset-0">
            <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition: objectPosition, transform: transform }}
            />
        </div>

        <div className="absolute inset-0 z-10"/>
        
        <div className="flex flex-col justify-end p-5 absolute z-20 w-38 bg-white top-0 left-0 h-full">
            <h2 className={`${alegreyaSans.className} text-black! leading-4 text-wrap`}>{title}</h2>
        </div>

        </div>

    </Link>
    )
}