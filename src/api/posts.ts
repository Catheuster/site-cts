import { supabase } from "./client";
import type { Tables } from "./database.types";

export async function getPosts() {
	return await supabase.from("posts").select();
}

export async function getPost(title: string) {
	return await supabase.from("posts").select().eq("title", title).single();
}
