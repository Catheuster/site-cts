<script setup lang="ts">
import { Fragment, defineProps } from "vue"
import markdownIt from 'markdown-it';

const { text } = defineProps<{ text: string }>()
const md = markdownIt()
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