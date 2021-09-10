<template>
  <main>
    <button v-on:click="getTasksList({limit:4})">Get Task List</button>
    <Task v-for="task in taskList" :key="task.id" :task="{task}"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTaskList from '@/components/task-list/task-list'
import useTaskListStore from '@/store/tasks'
import Task from './Task.vue'

export default defineComponent({
  name: 'TaskList',
  components: {Task},
  setup() {
    const { getTasksList } = useTaskList()
    const { taskList } = useTaskListStore()
    return {
      taskList,
      getTasksList,
    }
  }
})
</script>