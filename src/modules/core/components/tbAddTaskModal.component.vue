<script lang="ts" setup>
import { ref } from 'vue'
import TbButton from '@/modules/core/components/tbButton.component.vue'

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

const handleCreateTask = () => {
    console.log('je suis là')
    if (!taskTitle.value.trim()) return
    emit('create', taskTitle.value.trim())
    closeModal()
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
            class="bg-[#2B2C37] rounded-lg p-6 text-white relative modal-container"
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
                    v-model="taskTitle"
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                />
            </div>

            <div>
                <h2 class="mb-2">Subtasks</h2>

                <div class="flex items-center mb-6">
                    <input class="mr-2" placeholder="e.g. Web Design" type="text" />
                    <img
                        alt="croix"
                        class="cursor-pointer ml-2 w-4 h-4"
                        src="@/assets/delete.svg"
                    />
                </div>
            </div>

            <tb-button :disabled="false" class="w-full" variant="secondary"
                >+ Add New Subtask
            </tb-button>

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
.modal-container {
    padding: 32px;
}

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
