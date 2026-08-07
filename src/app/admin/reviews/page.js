import { supabaseAdmin } from "@/lib/supabase-admin";
import StarRating from "@/components/StarRating";
import { approveReview, rejectReview } from "@/actions/admin";
import AdminNav from "@/components/AdminNav";


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
        
        <div className="flex relative bg-white h-screen">

<div className="absolute">
<AdminNav/>
</div>

<div className="w-screen absolute flex flex-col items-center">
            <div className="items-center text-center mt-15 gap-4 flex relative flex-col w-screen">
                <h1 className="text-xl font-bold text-black!">
                    Pending Reviews ({ pending.length })
                </h1>

                {pending.length === 0 && (
                    <p>No reviews pending</p>
                )}
            </div>
</div>



            {pending.map((review) => (
                <div key={review.id} className="border rounded-[3px] h-fit p-6 items-center gap-10 w-screen relative top-30 flex flex-col">

                    <div className="flex justify-between items-center flex-row gap-30">

                        <div className="flex flex-col gap-3">
                            <p className="font-bold">{review.name}</p>
                            <StarRating rating={review.rating} size={16}/>
                            <p>{review.work_type.join(",")}</p>
                            <p>{review.project}</p>
                        </div>

                    <div className="flex flex-col gap-2">                    
                        <p className={`text-xs ${review.worked_with_me ? "text-sm" : "text-sm"}`}>

                            {review.worked_with_me ? "Has worked with me" : "did not work with me"}
                        </p>

                        <p className="text-sm">&quot;{review.review}&quot;</p>
                        <p className="text-[10px] text-gray-400">{review.created_at}</p>
                    </div>
                </div>


            <div className="flex flex-row relative p-3 gap-10">
                <form action={approveReview.bind(null, review.id)}>
                    <button type="submit" className="bg-green-500 text-white text-xs p-3 w-30">
                        Approve
                    </button>
                </form>

                <form action={rejectReview.bind(null, review.id)}>
                    <button type="submit" className="bg-red-500 text-white text-xs p-3 w-30">
                        Reject
                    </button>
                </form>
            </div>

                </div>
            ))}
        </div>
    )
};