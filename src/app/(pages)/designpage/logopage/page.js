import Link from "next/link";
import Image from "next/image";
import LogoGrid from "@/components/Logos";



export default function LogoPage() {
    return (
        <div className="flex flex-col gap-5 items-center">

        <LogoGrid/>

<div className="flex flex-col items-center gap-10 mt-40">

            {/* <h2>Premium custom logo design</h2> */}

<div className="mt-22">
            <Image src='/sketch2vector.svg' alt='' width={270} height={100}/>
</div>

    <div className="p-14 text-center bg-blue-400 h-130 gap-40 flex flex-col items-center">
        <p className="font-bold">Straight from the sketch book and a creative mind to full blown vector graphics production ready for both print and web</p>

<div className="border-white border-2 w-50 p-4">
        <button><h1 className="text-white! text-sm!">WORK WITH ME</h1></button>
</div>
    </div>
    </div>
    </div>
    )
}


