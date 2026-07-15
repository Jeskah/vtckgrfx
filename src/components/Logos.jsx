"use client"

import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/arrow.svg"

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
        <div className="flex -mt-45 flex-row gap-85 relative top-50 h-50">

        <button onClick={goBack} className="relative top-14">
            <Arrow width={20} height={10} style={{ fill: 'black'}}/>
        </button>
        <button onClick={goForward} className="relative top-14">
            <Arrow width={20} height={10} style={{fill: 'black', transform: 'scaleX(-1)'}}/>
        </button>
        </div>

        <div className="grid grid-cols-[repeat(2,150px)] gap-3 w-fit items-start h-50 -mt-5">
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
