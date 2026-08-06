import "./globals.css";
import Logo from "../../public/vatick-logo-graff.svg";
import NavButton from "@/components/NavButton";
import { fugazOne } from "@/fonts";

export default function WelcomePage() {
return (

    <div className="min-w-screen h-screen flex items-center flex-col align-center text-center gap-15 relative overflow-hidden">

      <h2 className={`${fugazOne.className} uppercase bottom-3 justify-center items-center flex fixed text-[12px]! `}>www.vatick.com</h2>


    <div className="flex flex-col absolute inset-0 gap-15 justify-center items-center z-10">
      <NavButton href="/designpage" label="DESIGN"/>
      <NavButton href="/soundpage" label="SOUND"/>
    </div>

    <div className="relative bottom-70 left-7 rotate-3 opacity-10">
        <Logo width={1400} height={1400}/>
    </div>
    </div>
  )
}
