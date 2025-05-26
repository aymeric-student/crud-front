<script lang="ts" setup>
import { computed, ref } from 'vue'
import draggable from 'vuedraggable'
import { useBoardStore } from '@/modules/stores/useBoard.store'
import TbModal from '@/modules/core/components/tbModal.component.vue'
import { useRoute } from 'vue-router'
import TbAddTaskModal from '@/modules/core/components/tbAddTaskModal.component.vue'

const route = useRoute()
const boardStore = useBoardStore()

const boardId = computed(() => route.params.boardId as string)
boardStore.setSelectedBoard(boardId.value)

const columns = computed(() => boardStore.selectedBoard?.columns ?? [])

const showAddTaskModal = ref(false)

const addTask = (title: string) => {
    console.log('Nouvelle tâche :', title)

    // 👇 Ici tu peux l'ajouter à la première colonne par défaut :
    const firstColumn = boardStore.selectedBoard?.columns?.[0]
    if (firstColumn) {
        const taskId = `${Date.now()}`
        firstColumn.tasks.push({ id: taskId, title, subTask: [] })
    }
}
</script>

<template>
    <div class="board-container">
        <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="board-column">
            <div class="column-header">
                <div class="circle"></div>
                <h3>{{ column.title }} ({{ column.tasks.length }})</h3>
            </div>

            <draggable
                :group="{ name: 'tasks', pull: true, put: true }"
                :list="column.tasks"
                class="drag-container"
                ghost-class="ghost"
                item-key="id"
            >
                <template #item="{ element: task }">
                    <div class="task">
                        <h3>{{ task.title }}</h3>
                    </div>
                </template>
            </draggable>
        </div>
    </div>

    <tb-modal
        :show="boardStore.showModal"
        height="429px"
        title="Add New Board"
        width="480px"
        @close="boardStore.closeModal"
    />

    <TbAddTaskModal
        :show="boardStore.showAddTaskModal"
        @close="boardStore.closeAddTaskModal"
        @create="addTask"
    />
</template>

<style scoped>
.board-container {
    padding: 24px;
    display: flex;
}

.board-column {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
}

h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    color: #828fa3;
}

.column-header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}

.circle {
    width: 15px;
    height: 15px;
    background-color: #49c4e5;
    margin-right: 12px;
    border-radius: 50%;
}

.task {
    cursor: grab;
    background: #2b2c37;
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
    border-radius: 8px;
    width: 280px;
    height: 88px;
    margin-bottom: 20px;
    padding: 23px;
}

.task h3 {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
}
</style>
