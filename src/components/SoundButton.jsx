"use client"

import Link from "next/link"

export default function SoundButton() {
    return (
        <div className="border-4 p-10 border-[#dcd4da] text-[#ddb4d6] text-left w-70">

            <Link href="../soundpage">
                <div className="flex flex-col gap-10">
                    <h1>SOUND</h1>
                    <div>
                        <p className="text-[#dcd4da]">Music production, sound design, mixes, events and more</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}