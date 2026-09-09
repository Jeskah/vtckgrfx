
import { wordmarks } from "@/lib/wordmarks"
import Image from "next/image"

export default function HandwrittenPage() {

    const handwrittenTag = wordmarks.filter((wordmark) => {
        return (
            wordmark.tags.includes("handwritten")
        )
    })

    return (
        <div className="flex flex-row gap-15 mt-25">
            {handwrittenTag.map((wordmark, index) => {
                return (
                    <div key={index}>
                        <div className="flex gap-10 justify-center">
                            <Image
                            src={wordmark.src}
                            alt={wordmark.name}
                            height={100}
                            width={100}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}