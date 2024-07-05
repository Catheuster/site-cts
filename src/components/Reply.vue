<script setup lang="ts">

const { content, author } = defineProps<{ content: string, author: string }>()

</script>

<template>
    <h1 class="font-bold font-serif text-[16px]">{{ author }}</h1>
    <p>{{ content }}</p>
</template>