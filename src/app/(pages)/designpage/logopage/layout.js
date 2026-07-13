import LogoPageNav from "@/components/LogoPageNav";

export default function LogoPageLayout({ children }) {
    return (
        <div className="flex flex-col gap-5 items-center">
            <LogoPageNav />
            {children}
        </div>
    );
}