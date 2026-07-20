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
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(logos.length / PER_PAGE);

    const visibleLogos = logos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    const goBack = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const goForward = () => setPage((p) => (p + 1) % totalPages);


    return (

        <>
        <div className="grid grid-cols-[repeat(2,150px)] gap-3 w-fit items-start h-50 mt-5">
            {visibleLogos.map((logo) => (
                <button 
                    key={logo.src}
                    onClick={() => setSelectedLogo(logo)}>
                <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}/>
                </button>
            ))}
        </div>
        <div></div>
            {selectedLogo && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedLogo(null)}>
                
                <div onClick={(e) => e.stopPropagation()}>
                    <Image 
                        src={selectedLogo.src}
                        alt={selectedLogo.alt}
                        width={600}
                        height={600}
                        className="max-w-[90vw] max-h-[90vh] object-contain"/>
                </div>
            </div>
        )}

            <div className="flex z-10 gap-85 absolute bottom-104">

                <button onClick={goBack} className="relative top-14">
                    <Arrow width={20} height={10} style={{ fill: 'black'}}/>
                </button>
                <button onClick={goForward} className="relative top-14">
                    <Arrow width={20} height={10} style={{fill: 'black', transform: 'scaleX(-1)'}}/>
                </button>

            </div>
        </>
    )
}
