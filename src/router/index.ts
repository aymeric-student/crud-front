import {ref} from "vue";
import type { RouteRecordRaw } from "vue-router";
import Job from "@/modules/jobs/Jobs.component.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = ref<RouteRecordRaw[]>([
    {
        path: "/",
        name: "Home",
        component: Job
    }
]);

const router = createRouter({
    history: createWebHistory(),
    routes: routes.value
});

export default router;

