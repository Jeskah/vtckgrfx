'use server'

import { supabase } from "@/lib/supabase";

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