'use client'

import { usePathname } from "next/navigation";
import VtckGrfx from "@/components/VtckGrfx";
import NavHeader from "@/components/NavHeader";


export default function DesignLayout({ children }) {

    const pathname = usePathname();
    const isTypography = pathname.includes("/typographypage");

    return (
        
        <div className="bg-[#ffffff] min-h-screen flex flex-col items-center">
            <NavHeader/>
                {/* {!isTypography && <VtckGrfx/>} */}
                {children} 
            </div>
    )
}
