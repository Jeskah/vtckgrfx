import "./globals.css";
import Logo from "../../public/vatick-logo-graff.svg";
import ExploreButton from "@/components/ExploreButton"

export default function WelcomePage() {
return (

    <div className="min-w-screen h-full flex flex-col align-center text-center gap-15 mt-35">

    <div className="flex justify-center items-center mt-10">
        <Logo width={300} height={300}/>
    </div>

<div className="gap-5 flex flex-col">
      <h1>Welcome</h1>

      <p className="px-15 text-[#dcd4da]">Within this site you will find a body of work relating to a variety of creative practices from full-stack website development, music production, design and more</p>
</div>

      <ExploreButton/>

    </div>
  )
}
