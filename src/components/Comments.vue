<script setup lang="ts">
import { getComments } from '@/api/comments';
import Comment from '@/components/Comment.vue';

const { postId } = defineProps<{ postId: number }>()

const comments = await getComments(postId)
</script>

<style>
.hr-basic {
    all: revert;
}
</style>

<template>
    <section>
        <h1 class="font-bold font-serif text-xl">
            Comentários ({{ comments.data?.length }}):
        </h1>
        <template v-for="comment in comments.data">
            <Comment :author="comment.username" :content="comment.content" :comment-id="comment.id" />
            <hr class="hr-basic">
        </template>
    </section>
</template>