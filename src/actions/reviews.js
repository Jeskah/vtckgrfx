'use server'

import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

export async function deleteOwnReview(reviewId, deviceId) {
    const { data: review, error: fetchError} = await supabaseAdmin
    .from("reviews")
    .select("device_id")
    .eq("id", reviewId)
    .single();

    if (fetchError || !review) {
        return { error: "Review not found"};
    }

    if (review.device_id !== deviceId) {
        return { error: "You can only delete your own review"}
    }

    const { error: deleteError } = await supabaseAdmin
        .from("reviews")
        .delete()
        .eq("id", reviewId);

        if (deleteError) {
            return { error: "Error deleteing review"}
        }
        revalidatePath("/designpage/reviewspage");
        return { success: true };
}

export async function submitReview(prevState, formData) {
    const payload = {
        name: formData.get("name"),
        work_type: formData.getAll("work_type"),
        project: formData.get("project"),
        worked_with_me: formData.get("worked_with_me") === "on",
        rating: Number(formData.get("rating")),
        review: formData.get("review"),
        device_id: formData.get("device_id"),
        approved: false,
    };

    const { error } = await supabase.from("reviews").insert(payload);

    if (error) {
        if (error.code === "23505") {
            return { error: "You've already submitted a review"}
        }

        return { error: "Something went wrong please try again"};
    }

    return { success: true };
}