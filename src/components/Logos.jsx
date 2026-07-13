"use client"

import { useState } from "react";
import Image from "next/image";

const logos = [

    { src: "/Logos/itwct.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/chipli.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/Mestiza.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/Hilltops.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/RougeTimber.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/FistedPunk.jpg", alt:"vatcik, logos, design, vtckgrfx"},
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

        <div className="flex flex-row gap-60 justify-evenly mt-6">

        <button onClick={goBack}>
            <Image src='/arrow.svg' alt="" width={7} height={10}/>
        </button>
        <button onClick={goForward}>
            <Image src='/arrow.svg' alt="" width={7} height={10} style={{ transform: 'scaleX(-1)'}}/>
        </button>

        </div>

        <div className="grid grid-cols-[repeat(2,130px)] gap-5 w-fit items-start mt-8 h-50">
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
