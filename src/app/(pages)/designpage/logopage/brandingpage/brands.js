import AmolithLogo from "@public/Amolith-Type.svg"
import FistedPunkLogo from "@public/FistedPunk.svg"

export const brands = [
    {
        id: "amolith",
        title: "Amolith",
        description: "Wrist straps designed for photographers",
        hero: { 
            src: "/AmolithBranding/Amolith4.jpg",
            alt: "Amolith Vatick", 
            logo: AmolithLogo, 
            position: "50% 60%"},
        gallery: [

            //logo colour examples
            { src: "/AmolithBranding/AmolithWhiteBG.jpg", alt: "" },
            { src: "/AmolithBranding/AmolithBlackBG.jpg", alt: "" },

            //second hero
            { src: "/Amolith.png", alt: "" },

            //brand colours
            { src: "/AmolithBranding/colors.jpg", alt: "" },

            //third hero
            { src: "/AmolithBranding/Amolith5.jpg", alt: "" },

            //last hero
            { src: "/AmolithBranding/Amolith8.jpg", alt: "", scale: 1.2, position: "45% 70%" },

            //last row
            { src: "/AmolithBranding/Amolith6.jpg", alt: ""},
            { src: "/AmolithBranding/Amolith1.jpg", alt: ""},

        ],
    },

        {
        id: "fistedpunk",
        title: "Fisted Punk",
        description: "Underground dance events and label",
        hero: { 
            src: "/FistedPunkBranding/FistedPunkVideo.MOV", 
            alt: "Fisted Punk, Vatick", 
            logo: FistedPunkLogo, 
            type: "video", 
            logoScale: 0.8,
            position: "60% 35%",
            logoPosition: "16%",
            scale: 1.5,
            overlayOpacity: 0.3,
            overlayColor: "#37353f"},
        gallery: [
            //colour logo examples 1 & 2 as row
            { src: "/FistedPunkBranding/FistedPunk1.jpg", alt: "" },
            { src: "/FistedPunkBranding/FistedPunk2.jpg", alt: "" },

            //hero 1
            { src: "/FistedPunkBranding/tshirt1.jpg", alt: "" },

            //brand colours
            { src: "/FistedPunkBranding/ColorPallet.jpg", alt: "" },

            //hero 2
            { src: "/FistedPunkBranding/FistedPunkRecordRed.jpg", 
                alt: "", 
                scale: 1.2, 
                position: "130%",
                overlayOpacity: 0.5,
                overlayColor: "#000000" },


            //last hero
            { src: "/FistedPunkBranding/tshirt3.jpg", 
                    alt: "", 
                    scale: 1.5, 
                    position: "130%",
                    overlayOpacity: 0,
                    overlayColor: "#37353f" },

            //last row
            { src: "/FistedPunkBranding/tshirt1.jpg", alt: "" },
            { src: "/FistedPunkBranding/tshirt2.jpg", alt: "" },
        ],
    },



    ];