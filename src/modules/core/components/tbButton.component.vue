<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    disabled?: boolean
    icon?: string
    variant: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false
})

const emit = defineEmits<{
    click: []
}>()

const handleClick = () => {
    if (!props.disabled) {
        emit('click')
    }
}

const buttonClass = computed(() => {
    return {
        'btn-primary': props.variant === 'primary',
        'btn-secondary': props.variant === 'secondary',
        'btn-disabled': props.disabled
    }
})
</script>

<template>
    <button :class="[buttonClass]" :disabled="disabled" @click="handleClick">
        <i v-if="icon" :class="`mdi ${icon}`"></i>
        <slot />
    </button>
</template>

<style scoped>
.btn-primary {
    background-color: #635fc7;
    color: white;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    width: 164px;
    height: 48px;
    border: none;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.btn-primary:hover:not(:disabled) {
    transform: scale(1.02);
    opacity: 0.9;
}

.btn-secondary {
    background-color: #ffffff;
    color: #635fc7;
    border-radius: 24px;
    font-weight: 700;
    font-size: 13px;
    width: 100%;
    height: 48px;
    text-align: center;
    border: none;
}

.btn-secondary:hover:not(:disabled) {
    transform: scale(1.02);
    opacity: 0.9;
}

.btn-disabled {
    opacity: 0.25;
    cursor: not-allowed;
}

.mdi {
    font-size: 18px;
    margin-right: 8px;
}
</style>
