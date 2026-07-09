"use client"

import { useState } from "react";
import Image from "next/image";

const logos = [

    { src: "/logos/itwct.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/logos/chipli.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/logos/Mestiza.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/logos/Hilltops.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/logos/RougeTimber.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/logos/FistedPunk.jpg", alt:"vatcik, logos, design, vtckgrfx"},
];

const PER_PAGE = 4;

export default function LogoGrid() {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(logos.length / PER_PAGE);

    const visibleLogos = logos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    const goBack = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const goForward = () => setPage((p) => (p + 1) % totalPages);

    return (
        <>
        <div className="flex flex-row justify-evenly gap-20">
            <button onClick={goBack}>←</button>
            <h1 className="text-black!">LOGOS</h1>
            <button onClick={goForward}>→</button>
        </div>

        <div className="grid grid-cols-[repeat(2,150px)] gap-5 w-fit items-start h-75">
            {visibleLogos.map((logo) => (
                <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}/>
            ))}

        </div>
        </>
    )
}
