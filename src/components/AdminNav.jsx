'use client'

import Link from "next/link";
import { fugazOne } from "@/fonts";

export default function AdminNav() {
    return (
        <div className={`${fugazOne.className} flex gap-5 uppercase relative p-5 h-10 w-screen bg-black z-10 justify-center`}>
            <div className="flex flex-row gap-5 items-center">

            <Link href="/designpage">
            <h1 className="text-[10px]!">Design page</h1>
            </Link>

            <Link href="/designpage/reviewpage">
            <h1 className="text-[10px]!">Reviews</h1>
            </Link>

            <Link href="/designpage/typographypage">
            <h1 className="text-[10px]!">Typography page</h1>
            </Link>

            <Link href="/designpage/logopage">
            <h1 className="text-[10px]!">Logo page</h1>
            </Link>
            </div>
        </div>
    )
}