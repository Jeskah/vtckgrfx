"use client"

import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/arrow.svg"
import { fugazOne } from "@/fonts";
import { alegreyaSans } from "@/fonts";

const logos = [
    { src: "/Logos/fistedPunk.jpg", alt:"vatcik, logos, design, vtckgrfx", name:"Fisted Punk", description:"Fisted Punk record label supporting underground dance music events and supporting artist releases"},
    { src: "/Logos/itwct.jpg", alt:"vatcik, logos, design, vtckgrfx", name:"If These Walls Could Talk", description:"Youtube podcast channel inviting people in their field of expertise to talk about their profession"},
    { src: "/Logos/RougeTimber.jpg", alt:"vatcik, logos, design, vtckgrfx", name:"Rogue Timber", description:"Rogue Timber upcycles old furniture with high grade timber, neededing a brand mark that would translate well for a branding iron"},
    { src: "/Logos/chipli.jpg", alt:"vatcik, logos, design, vtckgrfx", name: "Chipli", description:"Logo icon for a transport app, similar to uber designed to use on a map to locate available rides"},
    { src: "/Logos/Hilltops.jpg", alt:"vatcik, logos, design, vtckgrfx", name:"Hilltops Wine Tours", description:"Logo design submission for an online contest, this was the winning design"},
    { src: "/Logos/Mestiza.jpg", alt:"vatcik, logos, design, vtckgrfx", name:"Mestiza", description:"Mestiza tea company needed a logo design for packaging, social media and website"},
    
];


const PER_PAGE = 1;

export default function LogoGrid() {
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(logos.length / PER_PAGE);

    const visibleLogos = logos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    const goBack = () => setPage((p) => (p - 1 + totalPages) % totalPages);
    const goForward = () => setPage((p) => (p + 1) % totalPages);


    return (

        <div className="w-screen h-screen overflow-hidden relative gap-10 flex flex-col">

            <div className="grid grid-cols-1/2 justify-center items-center relative">
                {visibleLogos.map((logo) => (
                    <div key={logo.src} className="flex flex-col items-center gap-10 text-center">
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
                    className="w-80 h-80 mt-5 object-cover rounded-[10px]"/>
                    </button>

                    <div className="relative flex gap-3 flex-col items-center">
                        {logo.name && (
                            <h1 className={`${alegreyaSans.className} font-black! tracking-[1px] uppercase text-black! w-50 h-15 text-[16px]!`}>{logo.name}</h1>
                        )}

                        {logo.description && (
                            <p className={`${alegreyaSans.className} w-64`}>{logo.description}</p>
                        )}
                    </div>
                    </div>
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

                <div className="absolute bottom-107.5 left-1/2 -translate-x-1/2 flex flex-row items-center gap-60">

                <div className="bg-black/0 rounded-[5px] p-4 flex">

                    <button type="button" onClick={goBack}>
                        <Arrow 
                        width={17} 
                        height={17} 
                        style={{fill: 'black', transform: 'scaleX(1)'}}/>
                    </button>
                </div>

                <div className="bg-black/0 rounded-[5px] p-4 flex">
                    <button type="button" onClick={goForward}>
                        
                        <Arrow 
                        width={17} 
                        height={17} 
                        style={{fill: 'black', transform: 'scaleX(-1)'}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
