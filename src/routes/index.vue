<script setup lang="ts">
import logoUFABC from "@/assets/Logo_UFABC.svg"
import { ref, watch, computed, type VNodeRef } from "vue"
import { useActiveElement } from '@vueuse/core'
import { RouterView } from "vue-router";


const activeElement = useActiveElement()
const elementId = computed(() => activeElement.value?.dataset?.id || 'null')
const activeBar = ref<boolean>(false)
const crtEffect = ref<HTMLDivElement>()
watch(activeBar, (state) => {
    crtEffect.value?.classList.toggle("crt")
})


</script>

<template>
    <main class="w-full flex justify-center">
        <div class="h-[920px] w-[920px] bg-[#E8DCCA] p-7">
            <div class="h-full w-full bg-black p-1 border-[#BAAE9D] border-4 relative">
                <div class="h-full w-full rounded-md bg-[#018281] flex flex-col" ref="crtEffect">
                    <section
                        class="h-full w-full max-h-[calc(100%-50px)] gap-2 flex-1 flex flex-wrap flex-col content-start">
                        <RouterView />
                    </section>
                    <nav class="h-[50px] w-full bg-grey border-t-2 border-t-grey-flare p-1 flex">
                        <button type="button" data-id="start" :data-active="elementId == 'start'"
                            @click="activeBar = !activeBar"
                            class="h-full w-24 bg-grey border-t-2 border-l-2 border-grey-flare drop-shadow-windows flex items-center justify-center gap-2 data-[active=true]:bg-grey-flare data-[active=true]:border-[#555555] data-[active=true]:drop-shadow-none">
                            <img :src="logoUFABC" class="h-4/6 select-none" />
                            <span class="select-none">START</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </main>
</template>