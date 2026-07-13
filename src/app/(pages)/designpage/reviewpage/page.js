import { supabase } from "@/lib/supabase"
import { alegreyaSans } from "@/fonts"
import StarRating from "@/components/StarRating"


export default async function ReviewsPage() {
        const { data: reviews } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", {ascending: false})
        .range(0, 8)

    return (
        <div className="flex flex-col px-10">

            <div className="flex flex-col gap-10">
                <h1 className={`${alegreyaSans.className} text-black! text-[20px]! text-center`}>Reviews</h1>
            <div>


            <div className="flex flex-col gap-4 items-center justify-center mb-10">
                {reviews.map((review) => (
                    <div key={review.id}>
                        
                        <div className="w-80 flex flex-col mb-5">

                        <h1 className={`${alegreyaSans.className} text-black! text-[15px]!`}>{review.name}</h1>
                        <p className="italic text-[10px]!">{review.work_type}</p>

                        <div className="flex flex-row justify-end relative bottom-5">
                            <p className="text-[8px]!">{review.created_at}</p>
                        </div>
                        {/* <p>{review.rating}</p> */}
                        <p className="italic">&quot;{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </div>
        </div>
    )
}