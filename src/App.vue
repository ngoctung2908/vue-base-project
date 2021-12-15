<template>
    <div class="p-5">
        <router-view />
        <Spinner :is-visible="isLoading" />
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import Spinner from './components/Spinner.vue'
import { useStore } from 'vuex'
export default defineComponent({
    components: { Spinner },
    setup() {
        const store = useStore()

        const isLoading = ref(store.state.common.isLoading)

        watch(
            () => store.getters.checkLoading,
            (newValue, prevValue) => {
                isLoading.value = newValue
            }
        )

        return { isLoading }
    },
})
</script>
