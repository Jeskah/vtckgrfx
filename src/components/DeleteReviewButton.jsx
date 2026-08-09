'use client'

import { useState, useEffect } from "react";
import { deleteOwnReview } from "@/actions/reviews";
import BinIcon from "@public/bin.svg"

const svg = { BinIcon }

export default function DeleteReviewButton ({ reviewId, reviewDeviceId }) {
    const [ isMine, setIsMine ] = useState(false);
    const [ pending, setPending ] = useState(false);
    const [ confirming, setConfirming ] = useState(false);

    useEffect(() => {
        setIsMine(localStorage.getItem("review_device_id") === reviewDeviceId);
    }, [reviewDeviceId]);

    if (!isMine) return null;

    const confirmDelete = async () => {
        setConfirming(false);
        setPending(true);
        const result = await deleteOwnReview(reviewId, localStorage.getItem("review_device_id"));
        if (result?.success) {
            localStorage.removeItem("has_reviewed");
            window.location.reload();
        } else {
            setPending(false);
        }
    }

    return (
        <div className="absolute top-10 right-5">
        <button onClick={() => setConfirming(true)} disabled={pending} className="text-[10px] underline text-red-600">
            <BinIcon width={14} height={14} className="[&_path]:fill-current"/>
        </button>

        {confirming && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
                <div className="bg-white p-6 rounded-[5px] flex flex-col gap-5 items-center">
                    <p className="text-sm">Permanently delete your review?</p>
                    <div className="flex flex-col gap-3">
                        <button onClick={confirmDelete} className="bg-red-600 text-white text-[10px] p-3 rouded-[3px]">
                            Yes, delete my review
                        </button>
                        <button onClick={() => setConfirming(false)} className="text-[10px] underline">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

        )}
        </div>
    );
}