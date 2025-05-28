<script lang="ts" setup>
import { computed } from 'vue'
import { useBoardStore } from '@/modules/stores/useBoard.store'
import { useRouter } from 'vue-router'

const boardStore = useBoardStore()
const router = useRouter()

const boards = computed(() => boardStore.boards)

const selectBoard = (id: string) => {
    boardStore.setSelectedBoard(id)
    router.push(`/board/${id}`)
}
</script>

<template>
    <aside class="w-[300px] bg-[#2B2C37] text-white">
        <img alt="logo" class="logo" src="@/assets/logo.svg" />
        <h2>ALL BOARDS (8)</h2>
        <ul class="space-y-3">
            <li
                v-for="board in boards"
                :key="board.id"
                :class="{ 'active-item': boardStore.selectedBoardId === board.id }"
                @click="selectBoard(board.id)"
            >
                <img src="@/assets/fluent_board.svg" />
                <p>{{ board.name }}</p>
            </li>

            <!-- Dernier bouton -->
            <li class="last-item" @click="boardStore.openModal()">
                <img src="@/assets/fluent_board_purple.png" />
                <p>+ Create New Board</p>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
.active-item {
    width: 276px;
    background: #635fc7;
}

.last-item {
    color: #635fc7;
}

.last-item:hover {
    background: rgba(99, 95, 199, 0.1);
}

aside {
    border-right: solid 1px #979797;
}

ul li {
    display: flex;
    align-items: center;
    padding: 14px 0 14px 0;
    border-radius: 0px 100px 100px 0px;
    cursor: pointer;
    transition: background-color 0.2s;
    padding-left: 32px;
    gap: 12px;
    width: 276px;
}

ul li.active-item {
    background: #635fc7;
    color: white;
    font-weight: 700;
    width: 276px;
}

ul li.active-item p {
    color: white;
}

ul li:hover:not(.active-item):not(.last-item) {
    background-color: rgba(99, 95, 199, 0.1);
    width: 276px;
}

ul li.last-item {
    color: #635fc7;
    font-weight: 600;
}

ul li.last-item:hover {
    background: rgba(99, 95, 199, 0.1);
}

.logo {
    margin-top: 33px;
    margin-left: 34px;
    margin-bottom: 54px;
}

h2 {
    padding-left: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    color: #828fa3;
    margin-bottom: 19px;
}
</style>
