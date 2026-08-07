import VatickGraffThin from "@public/VatickGraffThin.svg"
import Ick from "@public/Ick.svg"
import VatickBlocky from "@public/VATICKBLOCKY.svg"

const graffs = [
    { svg: VatickGraffThin, scale: 1 },
    { svg: Ick, scale: 1 },
    { svg: VatickBlocky, scale: 1.2 },
];


export default function Graffiti() {

    return (
        <div className="grid grid-rows-2 gap-10 bg-blue-400 mt-10">
        {graffs.map((graff, index) => {
            const GraffSvg = graff.svg

            return (
                <div key={index}
                    className="flex justify-center items-center w-40 h-40">

        <div className="text-[#dcdcdc]">
            <GraffSvg
            width={100}
            height={100}
            className="w-40 h-40 [&_path]:fill-current"
            style={{ transform: `scale(${graff.scale})`}}
            />
        </div>
        

                </div>
            )})}
        </div>
    )
}