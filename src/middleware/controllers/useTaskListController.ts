import { TasksRequest, TasksResponse } from '@/models/task.model'
import api, { paramsToQueryString } from '@/services/api'
import useTaskListStore from '@/store/tasks'

const {setTaskList} = useTaskListStore()

const getTasks = async (tasksRequest: TasksRequest) => {
  const response =  await api.get<TasksResponse>('tasks' + paramsToQueryString(tasksRequest))
  setTaskList(response.data)
} 

export default function useTaskListController() {
  return {
    getTasks
  }
}
