import { createI18n } from 'vue-i18n'
import fr from '@/libs/i18n/fr.ts'
import en from '@/libs/i18n//en.ts'

export type DeepStringify<T> = {
    [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string
}

type FlatMessages = DeepStringify<typeof fr & typeof en>

export const i18n = createI18n<[FlatMessages], 'fr' | 'en'>({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        fr,
        en
    }
})
