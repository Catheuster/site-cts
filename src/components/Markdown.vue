<script setup lang="ts">
import { Fragment, defineProps } from "vue"
import markdownIt from 'markdown-it';
import markdownItVideo from "@vrcd-community/markdown-it-video";

const { text } = defineProps<{ text: string }>()
const md = markdownIt().use(markdownItVideo, {
    containerClassName: "video-embed"
})
</script>

<style>
.revert-tw {
    all: initial;

    h1 {
        margin: 10px 0;
        font-size: 36px;
    }

    >* {
        all: revert;

        h1 {
            margin: 10px;
            font-size: 36px;
        }
    }
}
</style>

<template>
    <div v-html="md.render(text)" class="revert-tw" />
</template>