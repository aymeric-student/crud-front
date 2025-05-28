<script lang="ts" setup>
interface Props {
    show: boolean
    width?: string
    height?: string
    columnId?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    height: 'auto'
})

const emit = defineEmits<{
    close: []
}>()

const closeModal = () => {
    emit('close')
}
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="closeModal"
    >
        <div>
            <h2>
                Research pricing points of various competitors and trial different business models
            </h2>

            <p>
                We know what we're planning to build for version one. Now we need to finalise the
                first pricing model we'll use. Keep iterating the subtasks until we have a coherent
                proposition.
            </p>

            <div>
                <h3>Subtasks (2 of 3)</h3>

                <div>
                    <input type="checkbox" />
                    <p>Research competitor pricing and business models</p>
                </div>

                <div>
                    <input type="checkbox" />
                    <p>Outline a business model that works for our solution</p>
                </div>

                <div>
                    <input type="checkbox" />
                    <p>
                        Talk to potential customers about our proposed solution and ask for fair
                        price expectancy
                    </p>
                </div>

                <div>
                    <h3>Current Status</h3>

                    <div>Doing</div>
                </div>
            </div>
        </div>
    </div>
</template>
