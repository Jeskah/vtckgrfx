'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/app/(pages)/designpage/logopage/brandingpage/brands";
import { fugazOne } from "@/fonts"

export default function BrandNav () {
    const pathname = usePathname();

    return (
            <nav className={`${fugazOne.className} flex flex-row gap-4 -mt-4 uppercase text-[12px]! text-black! w-75 overflow-scroll whitespace-nowrap`}>

        {brands.map((brand) => {
            const href = `/designpage/logopage/brandingpage/${brand.id}`;
            const isActive = pathname === href || (pathname === "/designpage/logopage/brandingpage" && brand.id === brands[0].id );

            return (
                <Link 
                    key={brand.id}
                    href={href}
                    className={isActive ? "font-black" : "text-black/40"}
                >
                    {brand.title}
                </Link>
                );
            })}
        </nav>

        );
}