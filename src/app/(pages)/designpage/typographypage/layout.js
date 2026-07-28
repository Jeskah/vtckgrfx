import TypographyNav from "@/components/TypographyNav"

export default function TypeLayout({children}) {
    return (
        <>
                <TypographyNav/>
                <div className="fixed flex flex-col inset-0 bg-[#232323] "/>
                {children}
        </>
    )
}