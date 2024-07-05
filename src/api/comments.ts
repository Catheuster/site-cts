import { supabase } from "./client";

export type CommentInsert = {
	username: string;
	content: string;
	postId: number;
};

export async function getComments(postId: number) {
	return await supabase.from("comments").select().eq("post_id", postId);
}

export async function createComment(comment: CommentInsert) {
	return await supabase.from("comments").insert({
		content: comment.content,
		username: comment.username,
		post_id: comment.postId,
	});
}
