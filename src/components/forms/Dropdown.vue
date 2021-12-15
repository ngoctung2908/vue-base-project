<template>
    <div class="w-full">
        <div class="relative w-auto h-auto rounded-[3px] text-xs">
            <p
                class="py-[5px] pr-[30px] pl-[10px] bg-primary65 text-white rounded-[3px] leading-[1.5] cursor-pointer min-h-[28px] after:arrow-dropdown"
                @click="handleShowDropdown"
            >
                {{ value }}
            </p>
            <ul
                class="absolute z-10 right-0 left-0 overflow-y-auto max-h-48 m-0 p-0 bg-primary28"
                :class="{ hidden: !showDropdown }"
            >
                <li class="relative" v-for="item in dataset" :key="item">
                    <a
                        href="#"
                        class="block text-white px-[10px] py-[5px] hover:bg-[#494949]"
                        @click="handleChange(item.key, item.value)"
                    >
                        <span>{{ item.value }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'

export default defineComponent({
    name: 'Dropdown',
    props: ['dataset'],
    setup(props) {
        const showDropdown = ref(false)
        const state = reactive({
            key: props.dataset ? props.dataset[0].key : null,
            value: props.dataset ? props.dataset[0].value : null,
        })

        const handleShowDropdown = () => {
            showDropdown.value = !showDropdown.value
        }

        const handleChange = (key, value) => {
            state.key = key
            state.value = value
            showDropdown.value = false
        }

        return { ...toRefs(state), handleChange, showDropdown, handleShowDropdown }
    },
})
</script>
