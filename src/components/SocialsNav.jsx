"use client"

import Email from "../../public/email.svg";
import Whatsapp from "../../public/whatsapp.svg";


export default function SocialsNav({ variant = "dark"}) {
    console.log("SocialsNav variant:", variant);
    const iconColor = variant === "light" ? "text-[#ffffff]" : "text-black"
    return (
    <div className="flex flex-col absolute top-10 right-2/25 -translate-x-1/2 z-10">
        

        <div className={`flex flex-col justify-evenly gap-7 text-center items-center mt-5 ${iconColor}`}>

        <Whatsapp width={40} height={40}/>
        <Email width={30} height={30}/>


        </div>
    </div>
)
}