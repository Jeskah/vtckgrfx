import Image from "next/image"
import Link from "next/link"

export default function SocialsNav1 () {
    return (

        <div className="flex flex-col w-50 items-center mb-5">
        <div className="flex flex-row justify-evenly gap-10">

<Link href="https://www.instagram.com/vatickgrafix?igsh=MWljcjdvbWN5OWczeA%3D%3D&utm_source=qr" className="flex shrink-0">
            <Image src="/instagram.svg" alt="vatick instagram" height={45} width={45}/>
</Link>

<Link href="https://www.linkedin.com/in/vatick/" className="flex shrink-0">
            <Image src="/linkedin.svg" alt="vatick linkedin" height={47} width={47}/>
</Link>

<Link href="https://www.peopleperhour.com/freelancer/design/jessica-antoinette-software-developer-graphic-vxmaqj" className="flex shrink-0">
            <Image src="/pph.svg" alt="vatick pph" height={41} width={41}/>
</Link>
        </div>
        </div>
    )
}