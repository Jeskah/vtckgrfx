'use client'

import { useActionState, useEffect, useState } from "react";
import { submitReview } from "@/actions/reviews";
import Image from "next/image";
import StarRating from "./StarRating";
import { fugazOne } from "@/fonts"

const WORK_TYPES = ["Packaging", "Logo Design", "Branding", "Illustration", "Typography"];

export default function WriteReviewsModal() {
    const [rating, setRating] = useState(5);
    const [open, setOpen] = useState(false);
    const [alreadyReviewed, setAlreadyReviewed] = useState(false);
    const [deviceId, setDeviceId] = useState("");
    const [state, formAction, pending] = useActionState(submitReview, {});

            const handleOnClick = () => {
            if (alreadyReviewed) {
                alert("You've already submitted a review");
                return;
            }
            setOpen(prev => !prev);
        }

    useEffect(() => {
        let id = localStorage.getItem("review_device_id");
        if (!id) {
            id = crypto.randomUUID();
            localStorage.setItem("review_device_id", id);
        }
        
        
        setDeviceId(id);
        setAlreadyReviewed(localStorage.getItem("has_reviewed") === "true");
        }, []);

        useEffect(() => {
            if (state?.success) {
                localStorage.setItem("has_reviewed", "true");
                setAlreadyReviewed(true);
                setOpen(false);
            }
        }, [state]);

        // if(alreadyReviewed) return null;

        return (
            
            <div className="flex flex-col relative">

            <div className="w-10 h-15 rounded-r-[3px] align-center flex flex-wrap bg-black z-20 items-center justify-center left-0 top-60 fixed ">
                <Image 
                    src="/write-review.svg" 
                    alt="" 
                    width={15} 
                    height={15} 
                    onClick={handleOnClick}
                    className="text-sm underline uppercase text-center"/>
            </div>

            {open && (
                <div className="flex z-10 items-center justify-center bg-[#ffffff] opacity-99 w-screen fixed inset-0">
                    <form action={formAction}>
                        <input type="hidden" name="device_id" value={deviceId} />
                        

            <div className="flex flex-col gap-5 items-center">

                <h1 className={`${fugazOne.className} text-[10px]! uppercase -mb-3 text-center text-black!`}>Choose Your Star Rating</h1>

            <div className="mb-3 text-center">

                <StarRating rating={rating} onRate={setRating} size={25}/>
                <input type="hidden" name="rating" value={rating}/>
            </div>

                        <input name="name" placeholder="Your Name" required className="border rounded-[3px] p-2 text-sm"/>

                        <input 
                            name="project"
                            placeholder="Your brand"
                            required
                            className="border rounded-[3px] p-2 text-sm h-10"/>


                            <textarea
                                name="review"
                                placeholder="Your Review"
                                required
                                className="border rounded-[3px] p-2 text-sm"
                                rows={4}
                            />

                <p className={`${fugazOne.className} uppercase font-black mt-2 -mb-2 text-[10px]!`}>Work Type</p>

                <div className="border rounded-[3px] border-black p-6">
                        <fieldset className="flex flex-col justify-evenly gap-3 w-30 h-30 overflow-scroll relative">
                            {WORK_TYPES.map((t) => (
                                <label key={t} className="text-sm flex items-center gap-2">
                                    <input type="checkbox" name="work_type" value={t}/> {t}
                                </label>
                            ))}
                        </fieldset>
                </div>

                            <label className="flex items-center gap-2 text-xs">
                                <input type="checkbox" name="worked_with_me" required/>
                                I confirm I worked with Vatick
                            </label>

                            {state?.error && <p className="text-red-600 text-xs">{state.error}</p>}

                            <button type="submit" disabled={pending} className={`${fugazOne.className} bg-black text-white p-2 text-xs w-30 h-10 rounded-[3px] uppercase`}>
                                {pending ? "submitting" : "Submit"}
                            </button>

                            <button type="button" onClick={() => setOpen(false)} className={`${fugazOne.className} text-xs underline uppercase`}>
                                Cancel
                            </button>
                            </div>
                    </form>
                </div>

                
            )}
            </div>
        );
}