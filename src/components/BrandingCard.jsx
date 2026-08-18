import Image from "next/image"
import { alegreyaSans } from "@/fonts";

export default function BrandingCard({ title, description, hero, gallery }) {
    const Logo = hero?.logo;
    const filledGallery = gallery?.filter((img) => img.src) ?? [];

    const firstRow = filledGallery.slice(0,2);
    const secondHero = filledGallery.slice(2,3);
    const brandingColors = filledGallery.slice(3,4);
    const thirdHero = filledGallery.slice(4,5);
    const lastHero = filledGallery.slice(5,6);
    const secondRow = filledGallery.slice(6,8);

    return (
        <div className="flex flex-col mb-20 mt-10">
            {hero?.src && (
                <div className="relative w-85 h-70 overflow-hidden flex items-center justify-center rounded-t-[10px]">

                    {hero.type === "video" ? (
                        <video
                        src={hero.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ 
                            objectPosition: hero.position || "center",
                            transform: `scale(${hero.scale || 1})`,
                            transformOrigin: hero.position || "center",
                            }} 
                        />
                    ) : (

                    <Image
                    src={hero.src} 
                    alt={hero.alt} 
                    fill 
                    className="object-cover"
                    style={{ objectPosition: hero.position || "center"}}
                    />
                    )
                }


                    <div className="absolute inset-0"
                        style={{ 
                            backgroundColor: hero.overlayColor ?? "#000000",
                            opacity: hero.overlayOpacity ?? 0.35, 
                        }} 
                    />

                    {Logo && (
                        <Logo
                        width={100}
                        height={100}
                            className="absolute z-10 w-auto h-40 top-13 [&_path]:fill-current text-white"
                            style={{ 
                                transform: `scale(${hero.logoScale || 1})`,
                                top: hero.logoPosition}}
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
                        className="w-full h-auto object-cover"
                        style={{
                            transform: `scale(${img.scale || 1})`,
                            objectPosition: img.position || "center"

                        }}
                        />
                    ))}
                </div>

                <div className="flex flex-col">
                    {brandingColors.map((img) => (
                        <Image
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                            
                            className="w-full h-auto object-cover"
                            />
                    ))}
                </div>

                <div className="flex flex-col overflow-hidden">
                    {thirdHero.map((img) => (
                        <Image 
                        key={img.src} 
                        src={img.src} 
                        alt={img.alt} 
                        width={200} 
                        height={200}
                        className="h-auto w-full object-cover"
                        style={{
                            transform: `scale(${img.scale || 1})`,
                            objectPosition: img.position || "center"

                        }}
                        />
                    ))}
                </div>

                <div className="relative w-full h-80 overflow-hidden">

                    <div className="bg-black/40 relative w-full h-full inset-0 z-1"/>
                    {lastHero.map((img) => (
                        <Image 
                        key={img.src} 
                        src={img.src} 
                        alt={img.alt} 
                        fill
                        className="object-cover"
                        style={{ 
                            objectPosition: img.position || "center", 
                            transform: `scale(${img.scale || 1})`, }}
                        />
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
                    className="w-full h-full object-cover"
                    />
                ))}
                </div>

                
            </div>
        </div>
    )
}