'use server'

import { supabaseAdmin } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

export async function approveReview(id) {
    await supabaseAdmin.from("reviews").update({ approved: true}).eq("id", id);

    revalidatePath("/admin/reviews");
    revalidatePath("/designpage/reviewpage");
}

export async function rejectReview(id) {
    await supabaseAdmin.from("reviews").delete().eq("id", id);
    revalidatePath("/admin/reviews")
}