import Link from "next/link";
import Image from "next/image";
import LogoGrid from "@/components/Logos";
import { alegreyaSans } from "@/fonts";
import { fugazOne } from "@/fonts";



export default function LogoPage() {
    return (
        <div className="flex flex-col gap-5 items-center">

        <LogoGrid/>

        <div className="flex flex-col items-center relative w-50 mt-50">
        <h1 className={`${fugazOne.className} text-black! uppercase text-center text-[40px]! leading-8.75`}>Premium logo design </h1>
        </div>


<div className="flex flex-col items-center gap-10">
    <div className="mt-40">
        
            <Image src='/sketchtovector.svg' alt='' width={270} height={100}/>
    </div>


    <div className="p-14 text-center bg-blue-400 h-130 gap-40 flex flex-col items-center">
        <p className="font-bold">Straight from the sketch book and a creative mind to full blown vector graphics production ready for both print and web</p>

<div className="border-white border-2 w-50 p-4">
        <button><h1 className="text-white! text-sm!">SEE PACKAGES</h1></button>
</div>
    </div>
    </div>
    </div>
    )
}


