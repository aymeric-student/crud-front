<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
    title: 'My Awesome App'
})
</script>

<template>
    <div>
        <h1>{{ t('home.title') }}</h1>
        <p>{{ t('home.footer.contact.email') }}</p>

        <div>
            <h2>{{ t('auth.login.title') }}</h2>
            <button>{{ t('auth.login.button') }}</button>
        </div>

        <div>
            <h2>{{ t('auth.register.title') }}</h2>
            <button>{{ t('auth.register.button') }}</button>
        </div>
    </div>
</template>
