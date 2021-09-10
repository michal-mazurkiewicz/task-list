<template>
  <main>
    <button v-on:click="getTasksList">Get Task List</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTaskList from '@/components/task-list/task-list'

export default defineComponent({
  name: 'TaskList',
  setup() {
    const { getTasksList } = useTaskList()

    return {
      getTasksList,
    }
  }
})
</script>