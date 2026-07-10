import Image from "next/image"


export default function SocialsNav1 () {
    return (

        <div className="flex flex-col w-50 items-center mb-5">
        <div className="flex flex-row justify-evenly gap-10">

            <Image src="/instagram.svg" alt="vatick instagram" height={45} width={45}/>

            <Image src="/linkedin.svg" alt="vatick instagram" height={47} width={47}/>

            <Image src="/pph.svg" alt="vatick instagram" height={41} width={41}/>
        </div>
        </div>
    )
}