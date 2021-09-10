import useTaskListController from '@/middleware/controllers/useTaskListController'
import { TasksRequest } from '@/models/task.model'


export default function useTaskList() {
  const tasksList = useTaskListController()

  const getTasksList = (tasksRequest: TasksRequest) => {
    return tasksList.getTasks(tasksRequest)
  }

  return {
    getTasksList
  }
}
