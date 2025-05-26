// stores/useBoardStore.ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Board } from '@/modules/kaban/models/board.model'
import boardsData from '@/modules/kaban/datas/boards.data.ts'

export const useBoardStore = defineStore('board', () => {
    const boards = ref<Board[]>(boardsData)
    const selectedBoardId = ref<string>('0')
    const showModal = ref(false)
    const showAddTaskModal = ref(false)

    const setSelectedBoard = (id: string) => {
        selectedBoardId.value = id
    }

    const selectedBoard = computed(() =>
        boards.value.find(board => board.id === selectedBoardId.value)
    )

    const openModal = () => {
        showModal.value = true
    }

    const closeModal = () => {
        showModal.value = false
    }

    const openAddTaskModal = () => {
        showAddTaskModal.value = true
    }

    const closeAddTaskModal = () => {
        showAddTaskModal.value = false
    }

    return {
        boards,
        selectedBoardId,
        selectedBoard,
        showModal,
        showAddTaskModal,
        setSelectedBoard,
        openModal,
        closeModal,
        openAddTaskModal,
        closeAddTaskModal
    }
})
