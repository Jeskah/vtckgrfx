import BrandNav from "@/components/BrandNav"
import BrandingCard from "@/components/BrandingCard"
import { brands } from "./brands"

export default function Branding() {
    const brand = brands[0]

    return (
        <div>
                
            <BrandingCard
                title={brand.title}
                description={brand.description}
                hero={brand.hero}
                gallery={brand.gallery}
                />
        </div>
    )
}