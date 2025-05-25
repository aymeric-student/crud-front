import type { DeepStringify } from '@/i18n/index.ts'
import type fr from '@/i18n/fr.ts'

const en: DeepStringify<typeof fr> = {
    home: {
        title: 'Welcome',
        subtitle: 'Subtitle EN',
        footer: {
            contact: {
                email: 'Contact us by email',
                phone: 'Call us'
            }
        }
    },
    auth: {
        login: {
            title: 'Login',
            button: 'Sign in'
        },
        register: {
            title: 'Register',
            button: 'Sign up'
        }
    }
}

export default en
