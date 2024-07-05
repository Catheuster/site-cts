<script setup lang="ts">
import { getReplies } from '@/api/reply';
import Reply from '@/components/Reply.vue';

const { commentId } = defineProps<{ commentId: number }>()

const replies = await getReplies(commentId)
</script>

<template>
    <section class="ml-10 mt-4">
        <template v-for="reply in replies.data">
            <Reply :content="reply.content" :author="reply.username"></Reply>
        </template>
    </section>
</template>