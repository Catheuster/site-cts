<script setup lang="ts">
import { getPost } from '@/api/posts';
import Markdown from '@/components/Markdown.vue';
import AddComment from '@/components/AddComment.vue'
import Comments from '@/components/Comments.vue';

const { title } = defineProps<{ title: string }>()

const post = await getPost(title)

</script>

<template>
    <div class="h-full w-full p-1 relative overflow-clip">
        <section
            class="h-full w-full bg-grey border-[#555555] border-t-2 border-l-2 drop-shadow-reverse px-4 overflow-y-scroll">
            <Markdown v-if="post && post.data" :text="post.data.content" />
            <Markdown v-else :text="'# Erro 404\n Parece que o texto que você procura não existe :('" />
            <Suspense>
                <Comments v-if="post.data" :post-id="post.data.id" />
            </Suspense>
        </section>
        <AddComment v-if="post.data" :post-id="post.data?.id" />
    </div>
</template>