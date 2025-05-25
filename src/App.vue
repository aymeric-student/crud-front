<script lang="ts" setup>
import { useHead } from '@vueuse/head'

useHead({
    title: 'Profil',
    meta: [
        { name: 'description', content: 'Profil utilisateur' },
        { property: 'og:type', content: 'website' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
        lang: 'fr'
    }
})
</script>

<template>
    <div class="flex h-screen bg-[#20212C]">
        <!-- Sidebar -->
        <aside class="w-[300px] bg-[#2B2C37] text-white p-4">
            <h2 class="text-xl font-semibold mb-6">Menu</h2>
            <ul class="space-y-3">
                <li>
                    <RouterLink class="hover:underline" to="/">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink class="hover:underline" to="/profile">Profil</RouterLink>
                </li>
            </ul>
        </aside>

        <!-- Main content -->
        <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header
                class="flex items-center justify-between bg-[#2B2C37] h-[97px] text-white shadow px-6 py-4"
            >
                <h1 class="title-app">Platform Launch</h1>

                <div class="flex items-center">
                    <button class="btn-primary-disabled">
                        <i class="mdi mdi-plus text-[18px] mr-2"></i>
                        Add New Task
                    </button>
                    <i class="mdi mdi-dots-vertical icon-ellipsis"></i>
                </div>
            </header>

            <!-- Router content -->
            <main class="flex-1 p-6 text-white overflow-y-auto">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.btn-primary-disabled {
    background-color: #635fc7;
    color: white;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    width: 164px;
    height: 48px;
    border: none;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.25;
    margin-right: 24px;
    cursor: not-allowed;
}

.btn-icon {
    font-size: 18px;
    margin-right: 8px;
}

.icon-ellipsis {
    font-size: 24px;
    margin-right: 32px;
    color: #a3a3a3;
}

aside {
    border-right: solid 1px #979797;
}

header {
    border-bottom: solid 1px #979797;
}

.title-app {
    padding-top: 29px;
    padding-bottom: 37px;
    padding-left: 24px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    color: #ffffff;
}
</style>
