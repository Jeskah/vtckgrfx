'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/app/(pages)/designpage/logopage/brandingpage/brands";
import { fugazOne } from "@/fonts"

export default function BrandNav () {
    const pathname = usePathname();

    return (
        <nav className="relative uppercase text-[10px]! text-white! overflow-scroll whitespace-nowrap tracking-[-0.2] w-80 rounded-r-[50px] rounded-l-[50px] z-10 bg-black mx-auto">

                <div className="py-2 px-6 gap-7 flex flex-row">

        {brands.map((brand) => {
            const href = `/designpage/logopage/brandingpage/${brand.id}`;
            const isActive = pathname === href || (pathname === "/designpage/logopage/brandingpage" && brand.id === brands[0].id );

            return (
                <Link 
                    key={brand.id}
                    href={href}
                    className={isActive ? "font-black italic" : "text-white/30 font-black italic"}
                >
                    {brand.title}
                </Link>
                );
            })}
            </div>

        </nav>
        );
}