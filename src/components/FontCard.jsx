"use client"

import Image from "next/image"
import { fugazOne } from "@/fonts"
import X from "@public/x.svg"
import CustardLetters from "@public/Custard_abcxyz.svg"
import Download from "@public/download.svg"

const fonts = [
    { 
        src: "/CustardReal.PNG", 
        src1: CustardLetters, 
        alt: "Custard Font", 
        name: "Custard Marker", 
        fontDetails:[ "uppercase", "letters only", "marker"],   
        scale: 1, 
        bgColor: "#000000", 
        alphabetColor: "#f2b944",
        infoTextColor: "#ffffff",
        downloadColor: "#000000",
        downloadBoxColor: "#f2b944",
        tags:[""]},
]

export default function FontCard() {
    return (
        <div className="flex flex-col flex-wrap gap-10">
            {fonts.map((font) => (
                <div key={font.src} className="flex flex-col items-center rounded-[5px] overflow-hidden bg- w-80 h-70">
                        <Image 
                        src={font.src} 
                        alt={font.name} 
                        width={300} 
                        height={400}
                        className=""/>

                        
                    <div className="bg-black w-full text-white flex-col text-left flex overflow-hidden justify-center relative h-45 mt-auto px-5 items-start gap-2"
                        style={{
                        backgroundColor: font.bgColor,
                        color: font.infoTextColor,
                        }}>



                            <font.src1 
                            src={font.src1} 
                            alt={font.name} 
                            width={70}
                            className=" mb-3"
                            style={{ 
                                color: font.alphabetColor,
                            }}
                            />

                            <h3 className={`${fugazOne.className} uppercase text-[18px]`}>{font.name}</h3>

                                <div className="flex flex-col flex-wrap items-left">
                                    {font.fontDetails.map((detail) => (

                                    <div key={detail} className="flex flex-row gap-2 h-4 items-center">
                                        <X className="w-2 h-2 [$_path]: fill-current"/>
                                        <p className="text-[11px]!">{detail}</p>
                                        
                                    </div>
                                
                                    
                                    ))}
                                </div>

<button className="right-0 bottom-0 absolute m-3 flex flex-row">
    <div className="bg-white p-2 flex justify-center items-center align-middle rounded-[3px] gap-1"
    style={{
        backgroundColor:font.downloadBoxColor
    }}>
        <p className="text-[8px]! text-black font-black">BUY</p>
            <Download 
                src="/download.svg" 
                alt="download" 
                width={10} 
                height={10} 
                style={{ color:font.downloadColor }}
            />
    </div>
</button>

                            
                        </div>

                    </div>

            ))}

        </div>
    )
}