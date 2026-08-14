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

        <div className="h-100 w-full relative mt-20">
        <div className="grid grid-cols-[repeat(2,195px)] w-fit mt-5 items-start justify-center">
            {visibleLogos.map((logo) => (
                <button 
                    key={logo.src}
                    onClick={() => setSelectedLogo(logo)}>
                <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}
                className="w-full"/>
                </button>
            ))}
        </div>
            {selectedLogo && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedLogo(null)}>
                
                <div onClick={(e) => e.stopPropagation()}>
                    <Image 
                        src={selectedLogo.src}
                        alt={selectedLogo.alt}
                        width={600}
                        height={600}
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-[5px]"/>
                </div>
            </div>
        )}

            <div className="flex flex-row z-10">

            <div className="bg-black/80 rounded-r-[80px] p-3 flex absolute items-center justify-end bottom-100 left-0 w-8">
                <button type="button" onClick={goBack} className="relative">
                    <Arrow 
                    width={15} 
                    height={15} 
                    style={{fill: 'white', transform: 'scaleX(1)'}}/>
                </button>
            </div>

            <div className="bg-black/80 rounded-l-[80px] p-3 flex absolute items-center justify-left bottom-100 right-0 w-8">
                <button type="button" onClick={goForward} className="relative">
                    
                    <Arrow 
                    width={15} 
                    height={15} 
                    style={{fill: 'white', transform: 'scaleX(-1)'}}/>
                </button>
            </div>

            </div>
        </div>
    )
}
