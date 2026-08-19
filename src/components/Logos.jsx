"use client"

import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/arrow.svg"

const logos = [
    { src: "/Logos/fistedPunk.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/itwct.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/chipli.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/Hilltops.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/Mestiza.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    { src: "/Logos/RougeTimber.jpg", alt:"vatcik, logos, design, vtckgrfx"},
    
];


const PER_PAGE = 3;

export default function LogoGrid() {
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(logos.length / PER_PAGE);

    const visibleLogos = logos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    const goBack = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const goForward = () => setPage((p) => (p + 1) % totalPages);


    return (

        <div className="w-screen relative">
            <div className="flex flex-row justify-between items-center w-full fixed z-50 bottom-10">
                <div className="bg-black/80 rounded-r-[80px] p-5 flex items-center justify-end left-0 w-15">

                    <button type="button" onClick={goBack}>
                        <Arrow 
                        width={20} 
                        height={20} 
                        style={{fill: 'white', transform: 'scaleX(1)'}}/>
                    </button>
                </div>

                <div className="bg-black/80 rounded-l-[80px] p-5 flex absolute items-center justify-start right-0 w-15">
                    <button type="button" onClick={goForward}>
                        
                        <Arrow 
                        width={20} 
                        height={20} 
                        style={{fill: 'white', transform: 'scaleX(-1)'}}/>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 justify-center items-center relative">
                {visibleLogos.map((logo) => (
                    <button 
                        key={logo.src}
                        onClick={() => setSelectedLogo(logo)}>
                    <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-screen h-80 object-cover"/>
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
        </div>
    )
}
