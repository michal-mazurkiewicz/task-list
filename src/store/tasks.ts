import { Task, TasksResponse } from "@/models/task.model";
import { Ref, ref } from "vue";

const taskList: Ref<Task[] | null> = ref([]);
const limit = ref(5);
const keywords = ref<string[]>([])
const page: Ref<number> = ref(1);
const count: Ref<number> = ref(0);
const noPages = ref(0);

export default function useTaskListStore() {
  const setTaskList = (data: TasksResponse) => {
    taskList.value = data.tasks;
    count.value = data.count;
    noPages.value = Math.ceil((count.value / data.tasks.length)) || 0;
  };


  const setPage = (data: number) => {
    page.value = data;
  };

  const reset = () => {
    setTaskList({ tasks: [], count: 0 });
  };

  return {
    taskList,
    noPages,
    limit,
    setTaskList,
    setPage,
    reset,
  };
}
