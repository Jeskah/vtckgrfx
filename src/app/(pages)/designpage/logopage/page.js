import Link from "next/link";
import Image from "next/image";
import LogoGrid from "@/components/Logos";
import { alegreyaSans } from "@/fonts";
import { fugazOne } from "@/fonts";



export default function LogoPage() {
    return (
        <div className="flex flex-col gap-5 items-center">

        <LogoGrid/>

        <div className="flex flex-col items-center relative mt-50">

        </div>




            <div className="p-14 text-center bg-black h-fit gap-10 flex flex-col items-center w-80 rounded-t-[5px] mb-10">

            <Image src='/sketchtovector.svg' alt='' width={200} height={100}/>

        <p className="font-bold text-white w-60">Straight from the sketch book to full blown vector graphics production ready for both print and web</p>



    </div>

<div className="border-10 px-4 py-3 rounded-b-[5px] justify-center flex w-80 h-20 -mt-18 mb-10">
        <button><h1 className={`${fugazOne.className} text-black! text-xs!`}>SEE PACKAGES</h1></button>
</div>
    </div>
    )
}


