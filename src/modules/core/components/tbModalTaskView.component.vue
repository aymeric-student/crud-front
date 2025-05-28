<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
    show: boolean
    width?: string
    height?: string
}

interface Subtasks {
    completed: boolean
    description: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    height: 'auto'
})

const emit = defineEmits<{
    close: []
}>()

const showDropdown = ref(false)
const selectedStatus = ref('Doing')

const closeModal = () => {
    emit('close')
}

const selectStatus = (status: string) => {
    selectedStatus.value = status
    showDropdown.value = false
}

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const subTasks = ref<Subtasks[]>([
    {
        completed: true,
        description: 'Research competitor pricing and business models'
    },
    {
        completed: true,
        description: ' Outline a business model that works for our solution'
    },
    {
        completed: false,
        description:
            ' Talk to potential customers about our proposed solution and ask for fair\n' +
            '                            price expectancy'
    }
])

const toggleSubtask = (index: number) => {
    subTasks.value[index].completed = !subTasks.value[index].completed
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
            <h2 class="font-bold text-lg leading-[23px] mb-6">
                Research pricing points of various competitors and trial different business models
            </h2>

            <p class="font-medium leading-[23px] text-[13px] text-[#828fa3] mb-6">
                We know what we're planning to build for version one. Now we need to finalise the
                first pricing model we'll use. Keep iterating the subtasks until we have a coherent
                proposition.
            </p>

            <div class="mb-6">
                <h3 class="font-bold text-xs leading-[15px] text-white mb-4">Subtasks (2 of 3)</h3>

                <div class="container">
                    <div class="container">
                        <div
                            v-for="(subtask, index) in subTasks"
                            :key="index"
                            class="test flex items-center bg-[#20212c] rounded p-3"
                        >
                            <input
                                :checked="subtask.completed"
                                class="flex-shrink-0 mr-2"
                                type="checkbox"
                                @change="toggleSubtask(index)"
                            />
                            <p
                                :class="{
                                    'line-through text-[#828fa3]': subtask.completed,
                                    'text-white': !subtask.completed
                                }"
                            >
                                {{ subtask.description }}
                            </p>
                        </div>
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
                    <p class="cursor-pointer hover:text-white" @click="selectStatus('Todo')">
                        Todo
                    </p>
                    <p class="cursor-pointer hover:text-white" @click="selectStatus('Doing')">
                        Doing
                    </p>
                    <p class="cursor-pointer hover:text-white" @click="selectStatus('Done')">
                        Done
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
