'use client'

import { fugazOne } from "@/fonts"
import Link from "next/link"
import { usePathname } from "next/navigation";

const styles = [
    { label: "Graffiti", href: "/designpage/typographypage/typestyles/graff"},
    { label: "Clean", href: "/designpage/typographypage/typestyles/clean"},
    { label: "Monograms", href: "/designpage/typographypage/typestyles/monograms"},
    { label: "Handwritten", href: "/designpage/typographypage/typestyles/handwritten"},
];

export default function TypographyStylesNav() {
    const pathname = usePathname();

    return (
<div className="relative flex w-30 right-20 overflow-scroll">
        <div className="flex flex-col gap-2 h-20">
            {styles.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                    <Link key={href} href={href}>
                        <div>
                            <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[8px]! ${isActive ? "text-[#97a590]!" : "text-[#78445C]!"}`}>
                                {label}
                            </h1>
                        </div>
                    </Link>
                    
                )
            })}
            </div>
</div>
    )
}





















// 'use client'

// import { fugazOne } from "@/fonts"
// import Link from "next/link"
// import { usePathname } from "next/navigation";

// export default function TypographyStylesNav() {
//     const pathname = usePathname();
//             const isActive = pathname === "/designpage/typographypage/typestyles/graff"


//     return (
//         <>
//         <div className="relative top-7 right-60 w-57 flex gap-3 mt-2 overflow-scroll">


//         <Link href="/designpage/typographypage/typestyles/graff">
//                 <div>
//                     <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! 
                    
//                     ${isActive ? "text-[#97a590]!" : "text-[#78445C]!"}`}>
//             Graffiti
//                 </h1>

//                 </div>
//         </Link>

//         <Link href="/../../designpage/typographypage/typestyles/clean">
//             <div>
//                 <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
//         Clean
//             </h1>
//             </div>
//         </Link>

//         <Link href="/../../designpage/typographypage/typestyles/monograms">
//             <div>
//             <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
//         Monogram
//             </h1>
//         </div>
//         </Link>

//                 <Link href="/../../designpage/typographypage/typestyles/monograms">
//             <div>
//             <h1 className={`${fugazOne.className} tracking-widest! uppercase text-[10px]! text-[#78445C]!`}>
//         Monogram
//             </h1>
//         </div>
//         </Link>
//         </div>
//         </>
//     )
// }