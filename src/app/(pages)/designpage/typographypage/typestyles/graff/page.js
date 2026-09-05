

import { wordmarks } from "@/lib/wordmarks"
import Image from "next/image"


export default function GraffitiPage() {

        const graffitiTag = wordmarks.filter((wordmark) => {
            return (
                wordmark.tags.includes("graffiti")
            )}
        )

    return (
        <div className="flex flex-row gap-15 mt-25">
            {graffitiTag.map((wordmark, index) => {
                return (
                    <div key={index}>
                        <div className="flex gap-10 justify-center">
                            <Image
                            height={100}
                            width={100}
                            src={wordmark.src}
                            alt={wordmark.name}/>
                            </div>
                        </div>
                        )
                })}
        </div>
    )
}