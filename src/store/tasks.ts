import { Task, TasksResponse } from '@/models/task.model'
import { Ref, ref } from 'vue'

const taskList: Ref<Task[] | null> = ref([])
const page: Ref<number> = ref(1)
const count: Ref<number> = ref(0)

export default function useTaskListStore() {

    const setTaskList = (data: TasksResponse) => { taskList.value = data.tasks; count.value = data.count }

    const setPage = (data: number) => { page.value = data }

    const reset = () => { setTaskList({tasks: [], count: 0}) }

    return {
        taskList,
        setTaskList,
        setPage,
        reset
    }
}
