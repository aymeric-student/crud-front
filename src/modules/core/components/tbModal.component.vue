<script lang="ts" setup>
import TbButton from '@/modules/core/components/tbButton.component.vue'
import { ref } from 'vue'
import { useBoardStore } from '@/modules/stores/useBoard.store.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const boardStore = useBoardStore()

interface Props {
    show: boolean
    title?: string
    width?: string
    height?: string
    data?: string[]
}

const columns = ref<string[]>([''])
const props = withDefaults(defineProps<Props>(), {
    title: '',
    width: '480px',
    height: 'auto'
})

const emit = defineEmits<{
    close: []
}>()

const boardName = ref('')

const createBoard = () => {
    if (!boardName.value || columns.value.length === 0) return

    const currentMaxId = Math.max(...boardStore.boards.map(b => Number(b.id)))
    const newBoardId = (currentMaxId + 1).toString()

    boardStore.boards.push({
        id: newBoardId,
        name: boardName.value,
        columns: columns.value.map((title, i) => ({
            id: `${newBoardId}-col-${i}`,
            title,
            tasks: []
        }))
    })

    boardStore.setSelectedBoard(newBoardId)
    closeModal()
    router.push(`/board/${newBoardId}`)
}

const closeModal = () => {
    emit('close')
    boardName.value = ''
    columns.value = []
}

const addEmptyColumn = () => {
    columns.value.push('')
}

const removeColumn = (index: number) => {
    if (index >= 0) {
        console.log('je suis là')
        columns.value.splice(index, 1)
    }
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
            <h2 v-if="title" class="text-xl font-bold title">{{ title }}</h2>

            <h2 class="font-bold text-xs leading-[15px] text-white">Board Name</h2>

            <input v-model="boardName" placeholder="e.g. Platform Launch" type="text" />

            <div class="add-column">
                <h2 class="font-bold text-xs leading-[15px] text-white">Board Columns</h2>

                <div
                    v-for="(_, index) in columns"
                    :key="index"
                    class="flex container-column items-center"
                >
                    <input v-model="columns[index]" placeholder="e.g. Web Design" type="text" />
                    <img
                        alt="croix"
                        class="cursor-pointer"
                        src="@/assets/delete.svg"
                        @click="removeColumn(index)"
                    />
                </div>

                <tb-button
                    :disabled="false"
                    class="w-full"
                    variant="secondary"
                    @click="addEmptyColumn()"
                    >+ Add New Column
                </tb-button>
            </div>

            <tb-button :disabled="false" class="w-full" variant="primary" @click="createBoard()">
                Create New Board
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
    margin-bottom: 24px;
}

input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    mix-blend-mode: normal;
    opacity: 0.25;
    color: #979797;
}

.container-column {
    margin-bottom: 12px;
}
</style>
