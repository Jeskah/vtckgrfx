import { supabaseAdmin } from "@/lib/supabase-admin";
import StarRating from "@/components/StarRating";

export const dynamic = "force-dynamic";

export default async function AdminReviewPage() {
    const { data, pending, error } = await supabaseAdmin
    .from("reviews")
    .select("*")
    .eq("approved", false)
    .order("created_at", { ascending: false });

    if (error) {
        return <p className="p-6 text-red-600">Failed to load reviews: {error.message}</p>;
    }

    return (
        <div className="flex flex-col gap-4 p-4 max-w-2xl max-auto">
            <h1 className="text-xl font-bold">
                Pending Reviews ({ pending.reviews })
            </h1>

            {pending.length === 0 && (
                <p>No reviews pending</p>
            )}

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

                <p className="text-sm">&quot;{review.review}&quot;</p>
                <p className="text-[10px] text-gray-400">{review.created_at}</p>

                </div>
            ))}
            
        </div>
    )
};