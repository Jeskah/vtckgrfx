import { supabaseAdmin } from "@/lib/supabase-admin";
import StarRating from "@/components/StarRating";
import { approveReview, rejectReview } from "@/actions/admin";

export const dynamic = "force-dynamic";

export default async function AdminReviewPage() {
    const { data: pending, error } = await supabaseAdmin
    .from("reviews")
    .select("*")
    .eq("approved", false)
    .order("created_at", { ascending: false });

    if (error) {
        return <p className="p-6 text-red-600">Failed to load reviews: {error.message}</p>;
    }

    return (
        <div className="flex flex-col gap-4 max-w-2xl max-auto bg-white h-screen">


            <div className="items-center text-center mt-80 gap-4 flex flex-col">
                <h1 className="text-xl font-bold text-black!">
                    Pending Reviews ({ pending.length })
                </h1>

                {pending.length === 0 && (
                    <p>No reviews pending</p>
                )}
            </div>

            {pending.map((review) => (
                <div key={review.id} className="border rounded-[3px]">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">{review.name}</p>
                        <StarRating rating={review.rating} size={16}/>
                    </div>
                
                <p>{review.project}</p>
                <p>{review.work_type.join(",")}</p>

                <p className={`text-xs ${review.worked_with_me ? "text-sm" : "text-sm"}`}>

                    {review.worked_with_me ? "confirmed" : "did not work with me"}
                </p>

                            <div className="flex">
                <form action={approveReview.bind(null, review.id)}>
                    <button type="submit" className="bg-green-500 text-white">
                        Approve
                    </button>
                </form>

                <form action={rejectReview.bind(null, review.id)}>
                    <button type="submit" className="bg-red-500 text-white">
                        Reject
                    </button>
                </form>
            </div>

                <p className="text-sm">&quot;{review.review}&quot;</p>
                <p className="text-[10px] text-gray-400">{review.created_at}</p>

                </div>
            ))}
        </div>
    )
};