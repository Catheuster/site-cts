<script setup lang="ts">
import ProgramShortcut from '@/components/ProgramShortcut.vue'
import { UseActiveElement } from '@vueuse/components'
import logoUFABC from "@/assets/Logo_UFABC.svg"
import { getPosts } from "@/api/posts";

const posts = await getPosts()

</script>

<template>
    <UseActiveElement v-slot="{ element }">
        <template v-for="program in posts.data">
            <ProgramShortcut :data-id="program.title" :icon="logoUFABC" :name="program.title"
                :active="element.dataset?.id == program.title || false" />
        </template>
    </UseActiveElement>
</template>