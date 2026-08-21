import Typography from "@/components/Typography"
import { fugazOne } from "@/fonts";


export default function TypographyPage () {

    return (
        <>        
            <div className="flex flex-col w-screen items-center min-h-screen absolute gap-5">

                <div className="relative border-2 border-[#78445C] rounded-t-[10px] w-85 h-18 mt-30">

                <h1 className={`${fugazOne.className} flex uppercase text-[8px]! w-85 align-middle p-3 opacity-30 justify-center relative leading-3.5 text-[#97a590]!`}>Full type sets: clean creative bold lettering. Graffiti, fonts, vector wordmarks for your creative brand, event or project. Take a look at some of these punchy designs</h1>
                </div>

    <Typography/>
        </div>
        </>
    )
}