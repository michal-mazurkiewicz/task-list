<template>
  <main>

    <Task v-for="task in taskList" :key="task.id" :task="{ task }" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTaskListStore from '@/store/tasks'
import Task from './Task.vue'

export default defineComponent({
  name: 'TaskList',
  components: { Task },
  setup() {
    const { taskList} = useTaskListStore()

    return {
      taskList,
    }
  }
})
</script>