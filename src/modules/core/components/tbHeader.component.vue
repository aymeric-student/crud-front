<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useBoardStore } from '@/modules/stores/useBoard.store'
import TbButton from '@/modules/core/components/tbButton.component.vue'
import TbDeleteBoardModal from '@/modules/core/components/tbDeleteBoardModal.component.vue'

const boardStore = useBoardStore()

const selectedBoard = computed(() => boardStore.selectedBoard?.name ?? '')
const isDisabled = computed(() => !boardStore.selectedBoard)

// État de la popover
const showPopover = ref(false)
const popoverRef = ref<HTMLElement | null>(null)
const dotsRef = ref<HTMLElement | null>(null)

const handleAddTask = () => {
    boardStore.openAddTaskModal()
}

const togglePopover = () => {
    showPopover.value = !showPopover.value
}

const handleEditBoard = () => {
    console.log('Edit Board clicked')
    showPopover.value = false
    // Ajouter votre logique d'édition ici
}

const handleDeleteBoard = () => {
    console.log('Delete Board clicked')
    showPopover.value = false
    boardStore.openDeleteBoardModal()
}

// Fermer la popover quand on clique ailleurs
const handleClickOutside = (event: MouseEvent) => {
    if (
        popoverRef.value &&
        dotsRef.value &&
        !popoverRef.value.contains(event.target as Node) &&
        !dotsRef.value.contains(event.target as Node)
    ) {
        showPopover.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <header
        class="flex items-center justify-between bg-[#2B2C37] h-[97px] text-white shadow px-6 py-4 border-b border-[#979797]"
    >
        <div class="w-full flex items-center justify-between">
            <h1 class="text-white font-bold text-2xl">{{ selectedBoard }}</h1>

            <div class="flex items-center mr-8 relative">
                <tb-button
                    :disabled="isDisabled"
                    icon="mdi-plus"
                    variant="primary"
                    @click="handleAddTask"
                >
                    Add New Task
                </tb-button>

                <i
                    ref="dotsRef"
                    class="mdi mdi-dots-vertical pl-2 cursor-pointer hover:bg-[#3E3F4E] rounded p-2 transition-colors"
                    @click="togglePopover"
                ></i>

                <!-- Popover -->
                <div
                    v-if="showPopover"
                    ref="popoverRef"
                    class="absolute top-full right-0 mt-2 bg-[#20212C] border border-[#3E3F4E] rounded-lg shadow-lg z-50 min-w-[192px]"
                >
                    <div class="py-2">
                        <button
                            class="w-full px-4 py-3 text-left text-[#828FA3] hover:bg-[#2B2C37] transition-colors flex items-center"
                            @click="handleEditBoard"
                        >
                            Edit Board
                        </button>
                        <button
                            class="w-full px-4 py-3 text-left text-[#EA5555] hover:bg-[#2B2C37] transition-colors flex items-center"
                            @click="handleDeleteBoard"
                        >
                            Delete Board
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <tb-delete-board-modal
        :show="boardStore.showDeleteBoardModal"
        @close="boardStore.closeDeleteBoardModal"
        @delete="boardStore.deleteCurrentBoard"
    />
</template>

<style scoped>
/* Animation pour la popover */
.popover-enter-active,
.popover-leave-active {
    transition: all 0.2s ease;
}

.popover-enter-from,
.popover-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
