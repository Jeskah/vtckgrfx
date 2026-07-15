import Image from "next/image";
import Link from "next/link";
import SocialsNav1 from "@/components/SocialsNav1";

export default function DesignLayout({ children }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">

<Link href="/designpage" className="self-start inline-block relative right-9">
        <Image
        src="/VTCK-GRFX.svg"
        width={260}
        height={260}
        alt="Vatick Graphics VTCK GRFX design"
        className="self-start"/>
</Link>
        {children}
    </div>

    );
}
