import "./globals.css";
import Logo from "../../public/vatick-logo-graff.svg";
import ExploreButton from "@/components/ExploreButton"
import SocialsNav from "@/components/SocialsNav";

export default function WelcomePage() {
return (

    <div className="min-w-screen min-h-screen flex flex-col align-center text-center gap-20 mt-35">

    <div className="flex justify-center items-center mt-5">
        <Logo width={380} height={380}/>
    </div>

{/* <div className="gap-3 flex flex-col">
      <h1>Welcome</h1>

      <p className="px-15 text-[#ddb4d6]">Within this site you will find a body of work relating to a variety of creative practices from full-stack website development, music production, design and more</p>
</div> */}

      <ExploreButton/>

    </div>
  )
}
