<template>
  <main>

    <h1>Tasks Search view</h1>
    <TaskList/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskList from './TaskList.vue'

export default defineComponent({ name: 'TasksSearch', components: {TaskList} })
</script>
