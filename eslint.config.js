import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs['flat/recommended']
        ],
        files: ['**/*.{ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser
            }
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-unused-vars': 'error',
            'vue/no-unused-components': 'warn',
            'vue/no-mutating-props': 'error',
            'vue/require-v-for-key': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            'no-var': 'error',
            'vue/html-self-closing': [
                'error',
                {
                    html: { void: 'always', normal: 'never', component: 'always' }
                }
            ],
            'vue/prop-name-casing': 'error'
        }
    },
    eslintConfigPrettier
)
