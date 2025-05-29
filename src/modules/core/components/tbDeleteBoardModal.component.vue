<script lang="ts" setup>
import TbButton from '@/modules/core/components/tbButton.component.vue'

interface Props {
    show: boolean
    width?: string
    height?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    height: 'auto'
})

const emit = defineEmits<{
    close: []
    delete: []
}>()

const closeModal = () => {
    emit('close')
}

const confirmDelete = () => {
    emit('delete')
}
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click.stop="closeModal"
    >
        <div
            :style="{ width: props.width, height: props.height }"
            class="bg-[#2B2C37] rounded-lg text-white relative p-6"
            @click.stop
        >
            <h1 class="font-bold text-[18px] leading-[23px] text-[#ea5555] mb-6">
                Delete this board?
            </h1>
            <p class="font-medium text-[13px] leading-[23px] text-[#828fa3] mb-6">
                Are you sure you want to delete this board? This action will remove all columns and
                tasks and cannot be reversed.
            </p>

            <div class="flex gap-4">
                <tb-button :disabled="false" class="flex-1" variant="danger" @click="confirmDelete">
                    Delete
                </tb-button>
                <tb-button :disabled="false" class="flex-1" variant="secondary" @click="closeModal">
                    Cancel
                </tb-button>
            </div>
        </div>
    </div>
</template>
