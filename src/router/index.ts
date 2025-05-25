import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Kaban from '@/modules/kaban/Kaban.component.vue'

const routes = ref<RouteRecordRaw[]>([
    {
        path: '/',
        name: 'Home',
        component: Kaban
    }
])

const router = createRouter({
    history: createWebHistory(),
    routes: routes.value
})

export default router
