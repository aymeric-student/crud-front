import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Kaban from '@/modules/kaban/tbKaban.component.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/board/0'
    },
    {
        path: '/board/:boardId',
        name: 'Board',
        component: Kaban
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
