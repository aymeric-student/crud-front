// stores/useBoardStore.ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Board, Task } from '@/modules/kaban/models/board.model'
import boardsData from '@/modules/kaban/datas/boards.data.ts'

export const useBoardStore = defineStore('board', () => {
    const boards = ref<Board[]>(boardsData)
    const selectedBoardId = ref<string>('0')
    const showModal = ref(false)
    const showAddTaskModal = ref(false)
    const showTaskViewModal = ref(false)
    const taskSelected = ref<Task | null>(null)
    const showDeleteBoardModal = ref(false)

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

    const openTaskViewModal = (task: Task) => {
        taskSelected.value = task
        showTaskViewModal.value = true
    }

    const closeTaskViewModal = () => {
        showTaskViewModal.value = false
    }

    const openDeleteBoardModal = () => {
        showDeleteBoardModal.value = true
    }

    const closeDeleteBoardModal = () => {
        showDeleteBoardModal.value = false
    }

    const deleteCurrentBoard = () => {
        if (selectedBoardId.value) {
            // Supprimer le board du tableau
            boards.value = boards.value.filter(board => board.id !== selectedBoardId.value)

            // Si c'était le dernier board, sélectionner le premier disponible
            if (boards.value.length > 0) {
                selectedBoardId.value = boards.value[0].id
            } else {
                selectedBoardId.value = ''
            }

            // Fermer la modal
            closeDeleteBoardModal()
        }
    }

    return {
        boards,
        selectedBoardId,
        selectedBoard,
        showModal,
        showAddTaskModal,
        showTaskViewModal,
        showDeleteBoardModal,
        taskSelected,
        setSelectedBoard,
        openModal,
        closeModal,
        openAddTaskModal,
        closeAddTaskModal,
        openTaskViewModal,
        closeTaskViewModal,
        openDeleteBoardModal,
        closeDeleteBoardModal,
        deleteCurrentBoard
    }
})
