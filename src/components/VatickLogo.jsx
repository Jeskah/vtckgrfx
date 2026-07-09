import Image from "next/image"

export default function VatickLogo() {
    return (
<div>
    <Image
    src="/vatick-logo-graff.svg"
    alt="Vatick Logo Graffiti Design Lettering Wordmark"
    fill
    className="object-contain absolute"
    />
</div>
    )
}