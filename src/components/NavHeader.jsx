"use client"

import { usePathname } from "next/navigation";
import LogoPageNav from "./LogoPageNav";
import BrandNav from "./BrandNav";
import VtchGrfx from "./VtckGrfx";
import SocialsNav from "./SocialsNav";


export default function NavHeader() {
    const pathname = usePathname();
    const isLogoSection = pathname.startsWith("/designpage/logopage");
    const isBranding = pathname.startsWith("/designpage/logopage/brandingpage")


    return (
        <div className="flex flex-col w-screen sticky top-0 z-50 gap-5">
            <div id="nav-header-core" className="flex flex-col bg-white/98">
            <VtchGrfx/>
            <SocialsNav/>
            {isLogoSection && <LogoPageNav/>}
            </div>

            {isBranding && <BrandNav/>}
            </div>
    )
}