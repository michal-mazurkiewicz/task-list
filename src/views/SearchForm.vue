<template>
    <main>
        <form @submit.prevent="getTasksList({ limit: limit, keywords: keywords.split(' ') })">
            <label>Search</label>
            <input type="text" placeholder="Search" v-model="keywords" />
            <label>Limit Per Page</label>
            <input type="number" v-model="limit" placeholder="Limit" />
            <button>Get Task List</button>
            <Pagination />
        </form>
    </main>
</template>

<script lang="ts">
import useTaskList from '@/components/task-list/task-list'
import useTaskListStore from '@/store/tasks'
import { defineComponent, ref } from 'vue'
import Pagination from './Pagination.vue'


export default defineComponent({
    name: 'SearchForm',
    components: { Pagination },
    setup() {
        const { getTasksList } = useTaskList()
        const { limit } = useTaskListStore()
        const keywords = ref('')
        
        return {
            limit,
            keywords,
            getTasksList,
        }
    }
})
</script>
