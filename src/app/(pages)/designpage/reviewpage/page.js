import { supabase } from "@/lib/supabase"
import { alegreyaSans } from "@/fonts"
import StarRating from "@/components/StarRating"
import Link from "next/link";
import Image from "next/image";

const PAGE_SIZE = 5;


export default async function ReviewsPage({ searchParams }) {

        const params = await searchParams;
        const page = Number(params.page) || 1;
        const sort = params.sort || "date";

        const sortColumn = {
            rating: "rating",
            date: "created_at",
            project: "work_type",
        }[sort] || "created_at";


        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        const { data: reviews, count } = await supabase
        .from("reviews")
        .select("*", { count: "exact" })
        .order(sortColumn, { ascending: false })
        .range(from, to);

        const totalPages = Math.ceil((count || 0) / PAGE_SIZE);

    return (
        <div className="flex flex-col px-10">
            <div className="flex flex-col gap-10">
                <h1 className={`${alegreyaSans.className} text-black! text-[20px]! text-center`}>Reviews</h1>

                <div>
                    <Link href={`?sort=date&page=1`}>Newest</Link>
                    <Link href={`?sort=rating&page=1`}>Top Rated</Link>
                    <Link href={`?sort=project&page=1`}>Project Type</Link>
                </div>
            


            <div className="flex flex-col gap-4 items-center justify-center mb-10">
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
<div className="flex flex-row gap-6 justify-evenly mb-10 text-[12px]">
    <span> {page} / {totalPages}</span>

    {page > 1 && (
        <Link href={`?sort=${sort}&page=${page -1}`}>
            <Image src="/arrow.svg" alt="" width={10} height={10}/>
        </Link>
    )}
    {page < totalPages && (
        <Link href={`?sort=${sort}&page=${page + 1}`}>
            <Image src="/arrow.svg" alt="" width={10} height={10} style={{ transform: 'scaleX(-1)'}}/>
        </Link>
    )}
        </div>
        </div>
        </div>
    )
}