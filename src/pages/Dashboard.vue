<template>
    <h1 class="text-black text-2xl">Home page</h1>
    <Dropdown :dataset="dataset" />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import Dropdown from '../components/forms/Dropdown.vue'

export default defineComponent({
    components: { Dropdown },
    setup() {
        onMounted(() => {})
        const dataset = ref([
            {
                key: '1980年',
                value: '1980年',
            },
            {
                key: '1985年',
                value: '1985年',
            },
            {
                key: '1990年',
                value: '1990年',
            },
            {
                key: '1995年',
                value: '1995年',
            },
            {
                key: '2000年',
                value: '2000年',
            },
            {
                key: '2005年',
                value: '2005年',
            },
            {
                key: '2010年',
                value: '2010年',
            },
        ])
        return { dataset }
    },
})
</script>
