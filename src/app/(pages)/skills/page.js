"use client"

import DesignButton from "@/components/DesignButton";
import SoundButton from "@/components/SoundButton";


export default function Skills() {
    return (
        <div className="flex flex-col gap-20 items-center relative">
            
            <div className="flex flex-col gap-15 pt-50">

                <div>
                    <SoundButton/>
                </div>

                <div>
                    <DesignButton/>
                </div>

            </div>

            {/* <h2 className="uppercase">Exlore by category</h2> */}
        </div>
    )
}