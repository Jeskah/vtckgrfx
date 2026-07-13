import { supabase } from '@/lib/supabase';
import ReviewsCarousel from './ReviewsCarousel';


export default async function Reviews() {
    const { data: reviews, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('approved', true)
    .order('rating', { ascending: false})
    .order('created_at', {ascending: false});

    if (error) {
        return <p>Can`t load previews</p>;
    }

    if (!reviews || reviews.length === 0) {
        return <p>no reviews yet</p>;
    }

    return <ReviewsCarousel reviews={reviews}/>
}