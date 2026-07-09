import Link from "next/link";
import Image from "next/image";
import LogoGrid from "@/components/Logos";


export default function LogoPage() {
    return (
        <div className="flex flex-col gap-10 items-center">

        <LogoGrid/>

    <div className="p-14 text-center">
        <p className="font-medium">From sketches to fully scalable vector graphics. providing multiple concepts and revisions with a collaborative approach. I take your inspiration and incorporate my creativity for the perfect artwork to represent your brand</p>
    </div>
    </div>
    )
}


