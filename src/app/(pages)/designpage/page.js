"use client"

import DesignCard from "@/components/DesignCard";
import { rajdhani } from "@/fonts";
import { alegreyaSans } from "@/fonts";
import Image from "next/image";


export default function DesignPage() {
    return (
            <div className="flex flex-col uppercase items-center gap-10">
                
                <DesignCard image='/Amolith.png' alt='Amolith Logo Design Vatick' title='Logo design / branding' href='/designpage/logopage' objectPosition='10% 50%' transform='translateX(95px) translateY(0px) scale(1.2)'/>

                <DesignCard image='/vatick-graff.jpg' alt='typeohraphy custom Logo Design Vatick graffiti' title='Custom fonts / typography' href='/' objectPosition='10% 50%' transform='translateX(80px) translateY(24px) scale(1.9)'/>



<div className="bg-black/10 w-80 rounded-[7px]">
<div className="flex flex-col items-center gap-4 mt-15 mb-20">
    <Image src="/apps.svg" alt="app icon vatick" height={70} width={70}/>

    <h2 className="text-black!"> Websites / Applications</h2>

<div className="flex flex-col w-60 h-15 overflow-hidden bg-black/80 text-center justify-center items-center rounded-[5px]">

    <div className="flex flex-row gap-6 items-center">
        <Image src="/brand-nextjs.svg" alt="next js" width={26} height={26}/>
        <Image src="/vercel-icon-svg.svg" alt="vercel" width={25} height={25}/>
        <Image src="/supabase.svg" alt="sql" width={25} height={25}/>
        <Image src="/tailwind.svg" alt="vatick tailwind" width={30} height={30}/>
    </div>
    </div>
    </div>
    </div>

    <div className="flex flex-col justify-center mb-10 items-center text-center w-90 rounded-[7px] bg-black/85">
<div className="{alegreyaSans.className} mt-10">
<h1 className="text-white! text-[25px]! tracking-[1.5px]">The designer</h1>
<h3 className="text-white/50 text-[12px] tracking-[1px]">Jessica Antoinette</h3>
</div>
<Image src="/underline.svg" alt="" width={50} height={50} className="mt-2"/>

    <div className="items-left flex mt-10 mb-5">
        <Image src="/me.jpeg" alt="VTCKGRFX, graphics, designs" width={120} height={120} className="rounded-[19px] border-4 border-white"/>
    </div>


<div className="flex flex-col w-40 relative mb-10">
    <div className="flex flex-col items-center text-center">

<div className="relative w-57 left-7" style={{ height: '103px' }}>
    <Image src="/text-bubble.svg" alt="bubble" width={230} height={103}/>
    <p className={`${alegreyaSans.className} text-black! font-bold absolute left-2 right-2 top-[54%] text-center text-sm px-4`}>
        Over 10 years of graphic design experience
    </p>
</div>

<div className="relative w-57 right-7" style={{ height: '103px' }}>
    <Image src="/text-bubble.svg" alt="bubble" width={230} height={103} className="scale-x-[-1]"/>
    <p className={`${alegreyaSans.className} text-black! font-bold absolute left-2 right-2 top-[54%] text-center text-sm px-4`}>
        BA Graphic Design & Communications Degree
    </p>
</div>

<div className="relative w-57 left-7" style={{ height: '103px' }}>
    <Image src="/text-bubble.svg" alt="bubble" width={230} height={103}/>
    <p className={`${alegreyaSans.className} text-black! font-bold absolute left-2 right-2 top-[54%] text-center text-sm px-4`}>
        200+ successful projects & over 150 5 star reviews
    </p>
</div>




    <div/>

    </div>
    
</div>
    {/* <div className="w-75 mt-10">
        <p className="text-white lowercase">Hey, I`m Jess, I`ve been a designer for over 10 years specalising in logo design and branding, later venturing into full-stack web devlopment</p>
    </div> */}
</div>

</div>
)
}
