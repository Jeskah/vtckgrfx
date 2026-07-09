"use client"

import Link from "next/link"


export default function DesignButton() {
    return (
        <div className="border-4 p-10 border-[#ddb4d6] text-[#ddb4d6] text-left w-70">

            <Link href="/designpage">
                <div className="flex flex-col gap-10">
                <h1>DESIGN</h1>
                    <div>
                        <p>Branding, custom typography, websites, apps and more</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}