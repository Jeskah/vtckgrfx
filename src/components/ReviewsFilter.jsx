'use client'

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const PROJECT_TYPES = ["Logo Design", "Branding", "Illustration", "Packaging", "Typography", "Website"]

export default function ReviewsFilter() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const sort = searchParams.get("sort") || "newest";
    const activeFilters = searchParams.get("filter")?.split(",").filter(Boolean) || [];

    function updateParams(updates) {
        const newParams = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
    if (value) newParams.set(key, value);
else newParams.delete(key);
});

newParams.set("page", "1");
router.push(`${pathname}?${newParams.toString()}`)

}

function toggleType(type) {
    const isActive = activeFilters.includes(type);
    const updated = isActive
        ? activeFilters.filter((t) => t !== type) : [...activeFilters, type];
    updateParams({ filter: updated.join(",")});
}

return (
    <div className="flex flex-row gap-6 items-center justify-center text-[12px]">
        <button onClick={() => updateParams({ sort: "newest"})} className={ sort === "newest" ? "font-black" : "text-black/40"}>
            Newest
        </button>
                <button onClick={() => updateParams({ sort: "oldest"})} className={ sort === "oldest" ? "font-black" : "text-black/40"}>
            Newest
        </button>

        <div>
            <button onClick={() => setOpen(!open)} className="font-black">
                Type { activeFilters.length > 0 && `(${activeFilters.length})` }
            </button>

            {open && (
                <div className="absolute top-6 left-0 flex flex-col bg-white border rounded-xs shadow p-3 gap-2 z-10 w-48">
                    {PROJECT_TYPES.map((type) => (
                        <label key={type} className="flex flex-row items-center gap-1">
                            <input
                            type="checkbox"
                            checked={activeFilters.includes(type)}
                            onChange={() => toggleType(type)}
                            />

                            {type}
                            
                        </label>
                    ))}
                    <button onClick={() => setOpen(false)} className="mt-2 text-black/50 underline">
                        Close
                    </button>
                </div>
            )}
        </div>
    </div>
)

}