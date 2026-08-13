import Image from "next/image"
import { fugazOne } from "@/fonts"
import { alegreyaSans } from "@/fonts";

export default function BrandingCard({ title, description, hero, gallery }) {
    const Logo = hero?.logo;
    const filledGallery = gallery?.filter((img) => img.src) ?? [];

    const firstRow = filledGallery.slice(0,2);
    const secondHero = filledGallery.slice(2,3);
    const secondRow = filledGallery.slice(3,6)

    return (
        <div className="flex flex-col mb-20">

        {/* <div className="flex flex-col text-center">
            <h1 className={`${fugazOne.className} uppercase text-black! text-[16px]!`}>{title}</h1>
        </div> */}

            {hero?.src && (
                <div className="relative w-85 h-70 overflow-hidden flex items-center justify-center rounded-t-[10px] mt-4">

                    <Image
                    src={hero.src} 
                    alt={hero.alt} 
                    fill 
                    className="object-cover"
                    style={{ objectPosition: hero.position || "center"}}
                    />

                    <div className="absolute inset-0 bg-black/35"/>

                    {Logo && (
                        <Logo
                        width={100}
                        height={100}
                            className="absolute z-10 w-auto h-40 top-13 [&_path]:fill-current text-white"

                        />
                        
                    )}
                    <div className="w-80 text-center z-10 absolute bottom-15">
                        <p className={`${alegreyaSans.className} text-white! text-[12px]! relative tracking-[0.5px]! }`}>{description}</p>
                    </div>
                </div>
            )}

            <div className="w-85">
                <div className="grid grid-cols-2">
                {firstRow.map((img) => (
                    <Image 
                    key={img.src} 
                    src={img.src} 
                    alt={img.alt} 
                    width={200} 
                    height={200}/>
                ))}
                </div>

                <div className="flex flex-col">
                    {secondHero.map((img) => (
                        <Image 
                        key={img.src}
                        src={img.src}
                        alt={img.alt} 
                        width={340} 
                        height={250}
                        className="w-full h-auto object-cover"/>
                    ))}
                </div>

                <div className="grid grid-cols-2 rounded-bl-[10px] rounded-br-[10px] overflow-hidden">
                    {secondRow.map((img) => (
                        <Image 
                        key={img.src} 
                        src={img.src} 
                        alt={img.alt} 
                        width={200} 
                        height={200}
                        className="h-full object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}