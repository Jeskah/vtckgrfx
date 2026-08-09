"use client"

import { useState } from "react";
import EmailContactForm from "./EmailContactForm";
import Email from "../../public/email.svg";
import Whatsapp from "../../public/whatsapp.svg";


export default function SocialsNav({ variant = "dark"}) {
    const iconColor = variant === "light" ? "text-[#ffffff]" : "text-black"
    const [ showEmailContactFrom, setShowEmailContactForm ] = useState(false);

    return (
<>
    <div className="flex flex-col absolute top-10 right-2/25 -translate-x-1/2 z-10">
        <div className={`flex flex-col justify-evenly gap-7 text-center items-center mt-5 ${iconColor}`}>
        <Whatsapp width={40} height={40}/>
        <Email 
            width={30} 
            height={30}
            onClick={() => setShowEmailContactForm(true)}
            className="cursor-pointer"
            />
        </div>
        </div>

        {showEmailContactFrom && (
            <div className="fixed inset-0 z-50 flex items-center bg-black/94 justify-center">

                
                <div className="p-6 rounded-[5px] w-80 h-180 top-10 relative">
                        <EmailContactForm onClose={() => setShowEmailContactForm(false)}/>
                    </div>
                </div>
            )}
        </>
    )
}