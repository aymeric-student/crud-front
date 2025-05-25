/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['**/tests/units/**/*.spec.ts'],
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'html', 'lcov']
        }
    }
})
