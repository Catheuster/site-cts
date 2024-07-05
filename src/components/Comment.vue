<script setup lang="ts">
import Replies from '@/components/Replies.vue';


const { commentId, content, author } = defineProps<{ commentId: number, content: string, author: string }>()
</script>

<template>
    <div>
        <h1 class="font-bold font-serif text-[16px]">{{ author }}:</h1>
        <p> {{ content }}</p>
        <Suspense>
            <Replies :comment-id="commentId"></Replies>
        </Suspense>

    </div>

</template>