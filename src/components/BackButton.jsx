'use client'

import { useRouter } from "next/router";

export default function BackButton () {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="flex bg-amber-500 w-30 h-30">
            <button onclick={handleBack}>
                BACK
            </button>
        </div>
    )
}