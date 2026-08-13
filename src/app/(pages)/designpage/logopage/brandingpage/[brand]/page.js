import { brands } from "../brands";
import BrandingCard from "@/components/BrandingCard";
import BrandNav from "@/components/BrandNav";

export default async function Page({ params }) {
    const { brand: brandId } = await params;
    const brand = brands.find((b) => b.id === brandId);

    return (
        <>
        <BrandNav/>

        <BrandingCard
            title={brand.title}
            description={brand.description}
            hero={brand.hero}
            gallery={brand.gallery}
        />
        </>
    );
}