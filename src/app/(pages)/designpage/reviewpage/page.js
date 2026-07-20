import { supabase } from "@/lib/supabase"
import { alegreyaSans } from "@/fonts"
import StarRating from "@/components/StarRating"
import Link from "next/link";
import Image from "next/image";
import ReviewsFilter from "@/components/ReviewsFilter";

const PAGE_SIZE = 5;


export default async function ReviewsPage({ searchParams }) {

        const params = await searchParams;
        const page = Number(params.page) || 1;
        const sort = params.sort || "date";
        const filter = params.filter ? params.filter.split(",") : [];

        const sortColumn = {
            rating: "rating",
            date: "created_at",
            project: "work_type",
        }[sort] || "created_at";


        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        let query = supabase
            .from("reviews")
            .select("*", { count: "exact"})
            .order(sortColumn, {ascending: sort === "oldest"})
            .range(from, to);

            if (filter.length > 0) {
                query = query.overlaps("work_type", filter);
            }
        const { data: reviews, count } = await query;
        const totalPages = Math.ceil((count || 0) / PAGE_SIZE);

    return (
        
        <div className="flex flex-col px-10 min-w-0">
            <div className="flex flex-row justify-evenly mb-3 text-[12px] w-80">

            {page > 1 && (
                <Link href={`?sort=${sort}&page=${page -1}`}>
                    <Image src="/arrow.svg" alt="" width={5} height={5}/>
                </Link>
            )}

            <span> {page} / {totalPages}</span>


            {page < totalPages && (
                <Link href={`?sort=${sort}&page=${page + 1}`}>
                    <Image src="/arrow.svg" alt="" width={5} height={5} style={{ transform: 'scaleX(-1)'}}/>
                </Link>
            )}

</div>

            <div className="flex flex-col gap-2 -mt-10">
                <h1 className={`${alegreyaSans.className} text-black! text-[20px]! text-center`}>Reviews</h1>

                <ReviewsFilter/>


            <div className="flex flex-col gap-4 items-center justify-center mb-10 mt-10">
                {reviews.map((review) => (
                    <div key={review.id}>
                        <div className="w-80 flex flex-col mb-2">
                            <h1 className={`${alegreyaSans.className} text-black! text-[15px]!`}>{review.name}</h1>
                            <p className="italic text-[10px]!">{review.work_type[0]}</p>

                        <StarRating rating={review.rating} size={12}/>

                        <div className="flex flex-row justify-end relative bottom-13">
                            <p className="text-[8px]!">{review.created_at}</p>
                        </div>


                        <p className="italic">&quot;{review.review}&quot;</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}