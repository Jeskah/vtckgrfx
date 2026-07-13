'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LogoPageNav() {
    const pathname = usePathname();

    const isLogos = pathname === '/designpage/logopage';
    const isBranding = pathname === '/designpage/logopage/brandingpage'

    return (
        <nav className="flex flex-col relative right-6">

            <Link href="/designpage/logopage" 
            className={ 
        isLogos
            ? 'w-50 text-black font-black text-[18px] italic'
            : ' font-black text-[15px] text-black/15!'}>
                LOGOS
            </Link>

            <Link href="/designpage/logopage/brandingpage" 
            className={ 
        isBranding
            ? 'w-50 text-black font-black text-[18px] italic'
            : 'font-black text-[15px] text-black/15!' }>
                BRANDING
            </Link>
        </nav>
    )
}