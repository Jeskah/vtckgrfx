import Typography from "@/components/Typography"
import TypographyNav from "@/components/TypographyNav"
import { fugazOne } from "@/fonts";


export default function TypographyPage () {

    return (
        <>
        <TypographyNav/>
        <div className="fixed flex flex-col inset-0 bg-[#e1eecc] "/>
        
            <div className="flex flex-col w-screen items-center min-h-screen absolute gap-5">

                <div className="relative border-2 border-[#78445C] rounded-t-[10px] w-92 h-18 mt-40">

                <h1 className={`${fugazOne.className} flex uppercase text-[8px]! w-90 align-middle p-3 opacity-30 justify-center relative leading-3.5 text-[#78445C]!`}>Full type sets: clean creative bold lettering. Graffiti, fonts, vector wordmarks for your creative brand, event or project. Take a look at some of these punchy designs</h1>
                </div>

{/* <div className="border-2 border-[#78445C] py-10 rounded-[10px] w-92 h-60"> */}
    <Typography/>
{/* </div> */}


        </div>
        </>
    )
}