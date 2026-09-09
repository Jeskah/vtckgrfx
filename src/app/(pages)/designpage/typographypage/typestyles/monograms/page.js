import { wordmarks } from "@/lib/wordmarks"
import Image from "next/image"

export default function Monograms() {
    const monogramTag = wordmarks.filter((wordmark) => {
        return (
            wordmark.tags.includes("monogram")
        )
    })

    return (
        <>
        <div className="flex flex-row gap-15 mt-25">
            {monogramTag.map((wordmark, index) => {
                return (
                    <div key={index}>
                        <Image
                        src={wordmark.src}
                        alt={wordmark.name}
                        height={80}
                        width={80}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}