<script setup lang="ts">
import { useRouter } from 'vue-router';

const { icon, name, active } = defineProps<{ icon: string, name: string, active: boolean }>()
const router = useRouter()
</script>

<template>
    <button @dblclick="router.push(`/${name}`)" class="flex flex-col justify-center items-center h-20 w-20 gap-1">
        <img :src="icon" class="select-none h-4/6" />
        <span :data-active="active"
            class="px-1 select-none data-[active=true]:bg-teal-700 data-[active=true]:text-white">{{
                name }}</span>
    </button>
</template>