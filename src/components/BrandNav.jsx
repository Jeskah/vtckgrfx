'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brands } from "@/app/(pages)/designpage/logopage/brandingpage/brands";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const pillText = "uppercase text-[10px]! tracking-[-0.2] font-black"

export default function BrandNav () {
    const pathname = usePathname();
    const [ isCollapsed, setIsCollapsed ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const activeBrand = brands.find((brand) => {
        const href = `/designpage/logopage/brandingpage/${brand.id}`;
        return pathname === href || (pathname === "/designpage/logopage/brandingpage" && brand.id === brands[0].id);
    }) || brands[0];

    useEffect(() => {
        const target = document.getElementById("branding-card-top");
        const header = document.getElementById("nav-header-core");
        if (!target) return;

        const headerHeight = header.offsetHeight;

        const observer = new IntersectionObserver(
            ([entry]) => setIsCollapsed(!entry.isIntersecting),
            { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0}
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <div className="w-75 mx-auto">
        <motion.nav
            layout
            transition={{ type: "spirng", stiffness: 100, damping: 100 }}
            className={`relative text-white! rounded-r-[50px] rounded-l-[50px] z-10 bg-black overflow-hidden ${isCollapsed ? "w-fit" : "w-full"}`}
            >
                {isCollapsed ? (
                    <button 
                        onClick={() => setIsOpen((open) => !open)}
                        className={`flex flex-row items-center gap-2 py-3 px-6 whitespace-nowrap ${pillText}`}>

                            <span className="text-[10px]!">{activeBrand.title}</span>
                            <span className={`transition-transform ${isOpen ? "rotate-180!" : ""}`}>
                        ⏷
                            </span>
                        </button>
                ) : (
                    <div className="py-3 px-6 gap-5 flex flex-row overflow-scroll whitespace-nowrap">
                        {brands.map((brand) => {
                            const href = `/designpage/logopage/brandingpage/${brand.id}`;
                            const isActive = pathname === href || (pathname === "/designpage/logopage/brandingpage" && brand.id === brands[0].id);

                            return (
                                <Link
                                    key={brand.id}
                                    href={href}
                                    className={`${pillText} ${isActive ? "text-white!" : "text-white/30!"}`}>

                                        {brand.title}
                                    </Link>
                            )
                        })}
                    </div>
                )}

                {isOpen && isCollapsed && (
                    <div className="absolute top-full left-0 w-full flex flex-col items-center bg-black rounded-[20px] mt-2 py-3 gap-2">
                        {brands.map((brand) => (
                            <Link
                                key={brand.id}
                                href={`/designpage/logopage/brandingpage/${brand.id}`}
                                >
                                    {brand.title}
                                </Link>
                        ))}
                    </div>
                )}
                
                </motion.nav>
                </div>
        );
}