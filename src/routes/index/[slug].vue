<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import logoUFABC from "@/assets/Logo_UFABC.svg"
import Program from '@/components/Program.vue';

const router = useRouter()
const { params } = useRoute('//[slug]')



</script>

<template>
    <div class="h-full w-full bg-grey flex flex-col">
        <header class="w-full h-5 bg-win-blue flex justify-between px-2">
            <div class="flex gap-2">
                <img :src="logoUFABC" class="p-1" />
                <h1 class="text-white text-sm">{{ params.slug }}</h1>
            </div>
            <nav
                class="flex gap-1 items-center *:h-4 *:w-4 *:bg-grey *:text-sm *:flex *:justify-center *:items-center *:border-t-2 *:border-l-2 *:border-grey-flare *:drop-shadow-windows">
                <button disabled class="pb-1">_</button>
                <button disabled></button>
                <button class="text-sm flex justify-center items-center" @click="router.back">x</button>
            </nav>
        </header>
        <Suspense>
            <Program :title="params.slug" />
        </Suspense>
    </div>
</template>