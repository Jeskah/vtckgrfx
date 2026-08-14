import Link from "next/link";
import Image from "next/image";
import LogoGrid from "@/components/Logos";
import { fugazOne } from "@/fonts";



export default function LogoPage() {
    return (
        <div className="flex flex-col items-center">

        <LogoGrid/>


<div className="flex flex-col p-14 text-center bg-[#131313] h-screen w-screen gap-1 relative">

<div className="flex flex-wrap justify-center gap-15">

    <Image 
    src='/sketchtovector.svg' 
    alt='' 
    width={220} 
    height={100}
    className="flex mt-10"
    />

<div className="relative flex">
        <p className="font-medium text-white w-60">Straight from the sketch book to full blown vector graphics production ready for both print and web</p>
</div>

        <div className="justify-center flex w-60 h-15 z-10 bg-white">
                <button><h1 className={`${fugazOne.className} text-black! text-xs!`}>SEE PACKAGES</h1></button>
        </div>
</div>
</div>

    </div>
    )
}


