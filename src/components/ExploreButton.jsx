"use client"

import Link from "next/link";

export default function ExploreButton () {
    return (

    <div className="flex justify-around">
        <div className="p-3 border-3 w-40 border-[#ddb4d6] mt-10">
            <Link className="text-center" href="/skills">
            <h2>EXPLORE</h2>
            </Link>
        </div>
    </div>
    );
}