<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage, type SubmissionHandler } from 'vee-validate';
import { type CommentInsert, createComment } from '@/api/comments';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const { postId } = defineProps<{ postId: number }>()
const dialog = ref<HTMLDialogElement>()
const schema = z.object({ username: z.string().min(1, "Coloque um nome de usuario"), content: z.string().min(1, "Mensagem muito curta").max(5000, "Mensagem muito longa") })
const veeValidateSchema = toTypedSchema(schema)
// async function submit({ username, content }: Omit<CommentInsert, "postId">) {
//     await createComment({ username, content, postId })
// }

const onSubmit: SubmissionHandler<z.infer<typeof schema>> = async ({ content, username }) => {
    const { status, error } = await createComment({ username, content, postId })
    if (status === 201) {
        dialog.value?.close()
    } else {
        console.log(error)
    }
}

</script>

<template>
    <button type="button" @click="dialog?.showModal"
        class="w-24 absolute right-8 bottom-4 bg-grey border-t-2 border-l-2 border-grey-flare drop-shadow-windows flex items-center justify-center gap-2">
        Comentar
    </button>

    <dialog ref="dialog" class="pb-[2px] pr-[2px] min-w-[33%] h-1/2 open:flex flex-col">
        <div
            class="w-full h-full flex flex-col bg-grey border-t-2 border-l-2 border-grey-flare drop-shadow-windows pt-0">

            <header class="w-full h-5 bg-win-blue flex justify-between px-2">
                <div class="flex gap-2">
                    <h1 class="text-white text-sm font-sans">Adicionar comentário</h1>
                </div>
                <nav
                    class="flex gap-1 items-center *:h-4 *:w-4 *:bg-grey *:text-sm *:flex *:justify-center *:items-center *:border-t-2 *:border-l-2 *:border-grey-flare *:drop-shadow-windows">
                    <button disabled class="pb-1">_</button>
                    <button class="text-sm flex justify-center items-center" @click="dialog?.close">x</button>
                </nav>
            </header>

            <Form class="w-full h-full flex flex-col gap-2 p-6" :validation-schema="veeValidateSchema"
                v-slot="{ isSubmitting }" @submit="onSubmit">
                <Field name="username" v-slot="{ field }">
                    <input placeholder="NOME" v-bind="field" type="text"
                        class="w-full bg-grey outline-none border-t-2 border-l-2 border-[#555555] drop-shadow-reverse placeholder:text-zinc-600" />
                </Field>
                <ErrorMessage name="username" />
                <Field name="content" v-slot="{ field }">
                    <textarea placeholder="COMENTARIO" v-bind="field" type="text"
                        class="h-full w-full bg-grey outline-none border-t-2 border-l-2 border-[#555555] drop-shadow-reverse resize-none placeholder:text-zinc-600" />
                </Field>
                <ErrorMessage name="content" />
                <button type="submit" :disabled="isSubmitting"
                    class="ml-auto mt-2 w-24 bg-grey border-t-2 border-l-2 border-grey-flare drop-shadow-windows flex items-center justify-center gap-2">
                    Enviar
                </button>
            </Form>

        </div>
    </dialog>
</template>