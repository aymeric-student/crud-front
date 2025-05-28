<script lang="ts" setup>
import { computed } from 'vue'
import { useBoardStore } from '@/modules/stores/useBoard.store'
import TbButton from '@/modules/core/components/tbButton.component.vue'

const boardStore = useBoardStore()

const selectedBoard = computed(() => boardStore.selectedBoard?.name ?? '')

const isDisabled = computed(() => !boardStore.selectedBoard)

const handleAddTask = () => {
    boardStore.openAddTaskModal()
}
</script>

<template>
    <header
        class="flex items-center justify-between bg-[#2B2C37] h-[97px] text-white shadow px-6 py-4"
    >
        <div class="w-full flex items-center justify-between">
            <h1 class="text-white font-bold text-2xl">{{ selectedBoard }}</h1>

            <div class="flex items-center test">
                <tb-button
                    :disabled="isDisabled"
                    icon="mdi-plus"
                    variant="primary"
                    @click="handleAddTask"
                >
                    Add New Task
                </tb-button>

                <i class="mdi mdi-dots-vertical pl-2"></i>
            </div>
        </div>
    </header>
</template>

<style scoped>
.test {
    margin-right: 32px;
}

.title-app {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    margin-left: 32px;
}
</style>
