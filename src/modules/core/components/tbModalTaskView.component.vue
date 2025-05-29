<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Task } from '@/modules/kaban/models/board.model.ts'

interface Props {
    show: boolean
    width?: string
    height?: string
    task: null | Task
    availableStatuses?: string[]
}

const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    task: null,
    height: 'auto',
    availableStatuses: () => ['Todo', 'Doing', 'Done']
})

const emit = defineEmits<{
    close: []
    updateTask: [task: Task]
}>()

const showDropdown = ref(false)
const selectedStatus = ref(props.task?.status || props.availableStatuses[0])

const completedSubtasksCount = computed(() => {
    if (!props.task?.subTasks) return 0
    return props.task.subTasks.filter(subtask => subtask.isCompleted).length
})

const closeModal = () => {
    emit('close')
}

const selectStatus = (status: string) => {
    selectedStatus.value = status
    showDropdown.value = false

    if (props.task) {
        const updatedTask = {
            ...props.task,
            status: status
        }
        emit('updateTask', updatedTask)
    }
}

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const toggleSubtask = (subtaskId: string) => {
    if (!props.task) return

    const updatedTask = {
        ...props.task,
        subTasks: props.task.subTasks.map(subtask =>
            subtask.id === subtaskId ? { ...subtask, isCompleted: !subtask.isCompleted } : subtask
        )
    }
    emit('updateTask', updatedTask)
}
</script>

<template>
    <div
        v-if="show && task"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="closeModal"
    >
        <div
            :style="{ width: props.width, height: props.height }"
            class="bg-[#2B2C37] rounded-lg text-white relative p-6"
            @click.stop
        >
            <h2 class="font-bold text-lg leading-[23px] mb-6">
                {{ task.title }}
            </h2>

            <p
                v-if="task.description"
                class="font-medium leading-[23px] text-[13px] text-[#828fa3] mb-6"
            >
                {{ task.description }}
            </p>

            <div v-if="task.subTasks && task.subTasks.length > 0" class="mb-6">
                <h3 class="font-bold text-xs leading-[15px] text-white mb-4">
                    Subtasks ({{ completedSubtasksCount }} of {{ task.subTasks.length }})
                </h3>

                <div class="container">
                    <div
                        v-for="subtask in task.subTasks"
                        :key="subtask.id"
                        class="test flex items-center bg-[#20212c] rounded p-3"
                    >
                        <input
                            :checked="subtask.isCompleted"
                            class="flex-shrink-0 mr-2"
                            type="checkbox"
                            @change="toggleSubtask(subtask.id as string)"
                        />
                        <p
                            :class="{
                                'line-through text-[#828fa3]': subtask.isCompleted,
                                'text-white': !subtask.isCompleted
                            }"
                        >
                            {{ subtask.title }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative">
                <h3 class="font-bold text-xs leading-[15px] text-white mb-2">Current Status</h3>
                <div
                    :class="{ 'border-active': showDropdown }"
                    class="flex justify-between select-test"
                    @click="toggleDropdown"
                >
                    <p>{{ selectedStatus }}</p>
                    <img alt="arrow_down" src="@/assets/arrow_down.svg" />
                </div>

                <div
                    v-if="showDropdown"
                    class="absolute top-full left-0 right-0 z-10 flex flex-col p-4 test mt-1"
                >
                    <p
                        v-for="status in availableStatuses"
                        :key="status"
                        class="cursor-pointer hover:text-white mb-2 last:mb-0"
                        @click="selectStatus(status)"
                    >
                        {{ status }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input[type='checkbox'] {
    accent-color: #635fc7;
    border-radius: 2px;
    width: 16px;
    height: 16px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.select-test.border-active {
    border-color: #635fc7;
}

.select-test {
    padding: 8px 16px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    margin-bottom: 5px;
}

.select-test p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #ffffff;
}

.test {
    background: #20212c;
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    border-radius: 8px;
    gap: 8px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
}
</style>
