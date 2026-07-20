import Typography from "@/components/Typography"
import TypographyNav from "@/components/TypographyNav"
import { fugazOne } from "@/fonts";


export default function TypographyPage () {

    return (
        <>
        <TypographyNav/>
        <div className="fixed flex flex-col inset-0 bg-[#36071D] "/>
        
            <div className="flex flex-col w-screen items-center min-h-screen absolute gap-5">

                <div className="relative border-2 border-[#78445C] rounded-[10px] w-92 h-20 mt-30">

                <h1 className={`${fugazOne.className}, flex uppercase, text-[8px]! w-70 align-middle p-3 opacity-60`}>Full type sets: clean creative bold lettering. Graffiti, fonts, vector wordmarks for your creative brand, event or project. Take a look at some of these punchy designs</h1>
                </div>

                <div className="border-2 border-[#78445C] py-10 rounded-[10px] w-92 h-60 flex-wrap overflow-scroll">

            <div className="flex flex-col items-center">
                <Typography/>
            </div>
        </div>

                    <div className="border-2 border-[#78445C] rounded-[7px] h-15 w-92 "></div>
        </div>
        </>
    )
}