import TypographyNav from "@/components/TypographyNav"

export default function TypeLayout({children}) {
    return (
        <>
        <TypographyNav/>
        {children}
        </>
    )
}