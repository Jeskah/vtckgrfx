"use client"

import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import Image from 'next/image';
import Link from 'next/link';

export default function ReviewsCarousel({ reviews }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev +1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const r = reviews[index];

    return (
        <div className='flex flex-col w-60 gap-1 items-center justify-start text-center h-80 mt-4'>

            {r.name && <h1 className='text-black! text-[13px]!'>{r.name}</h1>}
            {r.project && <p className='italic text-[10px]!'>{r.project}</p>}

            <p className='text-[8px]!'>
                {new Date (r.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                })}
            </p>


            <StarRating rating={r.rating}/>

            <p className='line-clamp-3 px-8 normal-case mt-4 w-69'>{r.review}</p>
            

            <div className='flex flex-row relative px-20 opacity-15 items-center'>
                <Image src='/quote.svg' alt='vtck quote reviews' height={25} width={25} className='absolute -top-16 -left-16'></Image>

                <Image src='/quote.svg' alt='vtck quote reviews' height={25} width={25} style={{transform: 'scaleX(-1)'}} className='absolute -top-5 -right-16'></Image>
            </div>


            <Link href="../designpage/reviewpage">
                <div className="flex flex-wrap p-2 rounded-sm w-25 justify-center bg-black/80 mt-13">
            
                    <p className="p-1 uppercase font-black text-white! text-center text-[8px]!">see more</p>
            
                </div>
            </Link>


        </div>
    )
}