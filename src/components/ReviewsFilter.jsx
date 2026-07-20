'use client'

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Underline from "../../public/underline.svg"


const PROJECT_TYPES = ["Logo Design", "Branding", "Illustration", "Packaging", "Typography", "Website"]

export default function ReviewsFilter() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const sort = searchParams.get("sort") || "newest";
    const activeFilters = searchParams.get("filter")?.split(",").filter(Boolean) || [];

    useEffect(() => {
        function handleClickOutside(event) {
            if ( containerRef.current && !containerRef.current.contains(event.target)){
                setOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

    function updateParams(updates) {
        const newParams = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
            if (value) newParams.set(key, value);
            else newParams.delete(key);
        });

        newParams.set("page", "1");
        router.push(`${pathname}?${newParams.toString()}`);

}

function toggleType(type) {
    const isActive = activeFilters.includes(type);
    const updated = isActive
        ? activeFilters.filter((t) => t !== type) : [...activeFilters, type];
    updateParams({ filter: updated.join(",")});
}

return (

<div ref={containerRef} className="flex flex-col gap-2 min-w-0 overflow-hidden">

        <div className="flex flex-row gap-6 items-center justify-center text-[12px]">
        <button onClick={() => updateParams({ sort: "newest"})} className={ sort === "newest" ? "font-black" : "text-black/40"}>
            Newest
        </button>
        <button onClick={() => updateParams({ sort: "oldest"})} className={ sort === "oldest" ? "font-black" : "text-black/40"}>
            Oldest
        </button>

                <button onClick={() => setOpen(!open)} className="font-black">
                    Project 
                { activeFilters.length > 0 && `(${activeFilters.length })` }
                </button>
        </div>

            {open && (
                <div className="max-w-screen p-5 flex flex-row bg-white whitespace-nowrap rounded-xs overflow-scroll gap-12 z-10">
                        {PROJECT_TYPES.map((type) => {
                            const isSelected = activeFilters.includes(type);
                            return (
                                <button
                                key={type}
                                type="button"
                                onClick={() => toggleType(type)}
                                className="flex flex-col items-center gap-1"
                                >
                                    {type}
                                    {isSelected && <Underline style={{ fill:"text-white"}} className="w-10.5"/>}
                                </button>
                            )
                        })}
                </div>
            )}
        </div>
    )

}