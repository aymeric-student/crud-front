<script lang="ts" setup>
import { ref } from 'vue'
import TbButton from '@/modules/core/components/tbButton.component.vue'
import type { Subtasks } from '@/modules/kaban/models/board.model.ts'

interface Props {
    show: boolean
    width?: string
    height?: string
    columnId?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    height: 'auto'
})

const emit = defineEmits<{
    close: []
    create: [title: string]
}>()

const taskTitle = ref('')
const taskDescription = ref('')

const handleCreateTask = () => {
    if (!taskTitle.value.trim()) return
    emit('create', taskTitle.value?.trim() as string)
    closeModal()
}

const subtasks = ref<Subtasks[]>([])

const addSubTask = () => {
    subtasks.value.push({ title: '', isCompleted: false })
}

const removeSubTask = (index: number) => {
    subtasks.value.splice(index, 1)
}

const closeModal = () => {
    taskTitle.value = ''
    emit('close')
}
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="closeModal"
    >
        <div
            :style="{ width: props.width, height: props.height }"
            class="bg-[#2B2C37] rounded-lg text-white relative p-6"
            @click.stop
        >
            <h2 class="text-xl font-bold title mb-2">Add New Task</h2>

            <div>
                <label class="name">Title</label>
                <input v-model="taskTitle" placeholder="e.g. Fix login bug" type="text" />
            </div>

            <div>
                <label class="name">Description</label>
                <textarea
                    v-model="taskDescription"
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                />
            </div>

            <div>
                <label class="name">Subtasks</label>

                <div
                    v-for="(subtask, index) in subtasks"
                    :key="index"
                    class="flex items-center mb-4 gap-2"
                >
                    <input
                        v-model="subtask.title"
                        class="flex-1"
                        placeholder="e.g. Web Design"
                        type="text"
                    />
                    <img
                        alt="Remove"
                        class="cursor-pointer w-4 h-4"
                        src="@/assets/delete.svg"
                        @click="removeSubTask(index)"
                    />
                </div>

                <tb-button :disabled="false" class="w-full" variant="secondary" @click="addSubTask">
                    + Add New Subtask
                </tb-button>
            </div>

            <tb-button
                :disabled="!taskTitle.trim()"
                class="w-full mt-4"
                variant="primary"
                @click="handleCreateTask"
            >
                Create Task
            </tb-button>
        </div>
    </div>
</template>

<style scoped>
.title {
    padding-bottom: 24px;
}

input {
    background: #2b2c37;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    color: #ffffff;
    width: 100%;
    padding: 8px 0 8px 16px;
}

input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    opacity: 0.25;
    color: #979797;
}

.name {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 8px;
    color: #ffffff;
}

textarea {
    background: #2b2c37;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    color: #ffffff;
    width: 100%;
    padding: 8px 0 8px 16px;
    margin-bottom: 24px;
    min-height: 112px;
    resize: none;
}

textarea::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    opacity: 0.25;
    color: #979797;
}
</style>
