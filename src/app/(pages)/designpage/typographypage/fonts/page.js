import FontCard from "@/components/FontCard"
import { alegreyaSans } from "@/fonts"

export default function Fonts() {
    return (
        <div className="flex flex-col items-center gap-5 bg-black w-screen h-screen">
        {/* <h1 className={`${alegreyaSans.className} text-[16px]! tracking-[2px] text-black! font-extrabold!`}>FONTS</h1> */}

        <div className="mt-20">
            <FontCard/>
        </div>


        </div>
    )
}