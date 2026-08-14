'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/app/(pages)/designpage/logopage/brandingpage/brands";
import { fugazOne } from "@/fonts"

export default function BrandNav () {
    const pathname = usePathname();

    return (
            <nav className="flex flex-row gap-3 py-2 uppercase text-[12px]! text-black! overflow-scroll whitespace-nowrap tracking-[-0.2] border-b-2 w-80 relative z-10">

        {brands.map((brand) => {
            const href = `/designpage/logopage/brandingpage/${brand.id}`;
            const isActive = pathname === href || (pathname === "/designpage/logopage/brandingpage" && brand.id === brands[0].id );

            return (
                <Link 
                    key={brand.id}
                    href={href}
                    className={isActive ? "font-black italic" : "text-black/20 font-black italic"}
                >
                    {brand.title}
                </Link>
                );
            })}
        </nav>
        );
}