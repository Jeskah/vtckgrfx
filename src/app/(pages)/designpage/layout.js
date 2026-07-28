'use client'

import { usePathname } from "next/navigation";
import VtckGrfx from "@/components/VtckGrfx";


export default function DesignLayout({ children }) {

    const pathname = usePathname();
    const isTypography = pathname.includes("/typographypage");

    return (
        
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
                {!isTypography && <VtckGrfx/>}
                {children} 
            </div>
    )
}
