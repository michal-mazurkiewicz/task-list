<template>
  <main>
    <h1>Tasks Search view</h1>
    <SearchForm/>
    <TaskList/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskList from './TaskList.vue'
import SearchForm from './SearchForm.vue'

export default defineComponent({ name: 'TasksSearch', components: {TaskList, SearchForm} })
</script>
