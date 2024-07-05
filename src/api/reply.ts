import { supabase } from "./client";

export async function getReplies(commentId: number) {
	return await supabase.from("replies").select().eq("comment_id", commentId);
}
