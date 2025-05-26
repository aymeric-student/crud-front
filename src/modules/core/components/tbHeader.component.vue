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
        <h1 class="title-app">{{ selectedBoard }}</h1>

        <div class="flex items-center">
            <tb-button
                :disabled="isDisabled"
                icon="mdi-plus"
                variant="primary"
                @click="handleAddTask"
            >
                Add New Task
            </tb-button>

            <i class="mdi mdi-dots-vertical icon-ellipsis"></i>
        </div>
    </header>
</template>
