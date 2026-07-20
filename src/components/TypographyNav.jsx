// import Image from "next/image"
import VtckGrfx from "./VtckGrfx"

export default function TypographyNav() {

    return (
        <div className="flex flex-col absolute left-20">
            
        <div className="flex fixed w-full top-0 h-24 border-b-2 border-[#78445C] z-10 overflow-hidden">

<div className="absolute">
<VtckGrfx className="left-8 -top-16 relative w-25 h-25 [&_path]:fill-current text-[#78445C] -rotate-7" />
</div>
        {/* <Image src="/VTCK-GRFX.svg" alt="Vatick" width={100} height={100} className="left-3 -top-2 absolute -rotate-20 -z-10]"/> */}

<div className="flex flex-row gap-3 bottom-0 absolute left-22">
    <div className="bg-[#78445C] h-5 w-15 bottom-0 items-center justify-center flex rounded-t-[3px]">
        <p className="text-[8px]!">STYLES</p>
    </div>
    <div className="bg-[#78445C] h-5 w-15 bottom-0 items-center justify-center flex rounded-t-[3px]">
        <p className="text-[8px]!">STYLES</p>
    </div>
    <div className="bg-[#78445C] h-5 w-15 bottom-0 items-center justify-center flex rounded-t-[3px]">
        <p className="text-[8px]!">STYLES</p>
    </div>
</div>
        </div>
        </div>
    )
}