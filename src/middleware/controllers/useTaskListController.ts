import { TasksRequest, TasksResponse } from '@/models/task.model'
import api, { paramsToQueryString } from '@/services/api'


const getTasks = async (tasksRequest: TasksRequest) => {
  const response =  await api.get<TasksResponse>('tasks' + paramsToQueryString(tasksRequest))
  const data = response.data
  console.log(data)
} 


export default function useTaskListController() {
  return {
    getTasks
  }
}
