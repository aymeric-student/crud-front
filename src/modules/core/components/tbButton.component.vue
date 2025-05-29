<script lang="ts" setup>
interface Props {
    disabled?: boolean
    icon?: string
    variant: 'primary' | 'secondary' | 'danger'
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
</script>

<template>
    <button
        :class="{
            'bg-[#635fc7] text-white hover:opacity-90': variant === 'primary',
            'bg-white text-[#635fc7]': variant === 'secondary',
            'bg-[#ff9898] text-white': variant === 'danger',
            'opacity-25 cursor-not-allowed': disabled
        }"
        :disabled="disabled"
        class="font-bold rounded-3xl border-none h-12 px-6 flex items-center justify-center gap-2 cursor-pointer"
        @click="handleClick"
    >
        <i v-if="icon" :class="`mdi ${icon}`"></i>
        <slot />
    </button>
</template>
