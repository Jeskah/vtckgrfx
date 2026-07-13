"use client"

import Image from "next/image";

import Instagram from "../../public/instagram.svg";
import Email from "../../public/email.svg";
import Linkedin from "../../public/linkedin.svg";
import Whatsapp from "../../public/whatsapp.svg";


export default function SocialsNav({ variant = "dark"}) {
    const iconColor = variant === "light" ? "text-[#ddb4d6]" : "text-black"
    return (
    <div className="flex flex-col absolute top-10 right-2/25 -translate-x-1/2">

        <div className={`flex flex-col justify-evenly gap-7 text-center items-center mt-5 ${iconColor}`}>

        <Whatsapp width={40} height={40}/>
        <Email width={30} height={30}/>


        </div>
    </div>
)
}