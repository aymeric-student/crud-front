<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import TbSidebar from '@/modules/core/components/tbSidebar.component.vue'
import TbHeader from '@/modules/core/components/tbHeader.component.vue'

useHead({
    title: 'Profil',
    meta: [
        { name: 'description', content: 'Profil utilisateur' },
        { property: 'og:type', content: 'website' }
    ],
    link: [{ rel: 'icon', href: '@/assets/favicon.svg' }],
    htmlAttrs: {
        lang: 'fr'
    }
})
</script>

<template>
    <div class="flex h-screen bg-[#20212C]">
        <tb-sidebar :show="false"></tb-sidebar>
        <div class="flex-1 flex flex-col">
            <tb-header />
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

.icon-ellipsis {
    font-size: 24px;
    margin-right: 32px;
    padding-left: 24px;
    color: #a3a3a3;
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
