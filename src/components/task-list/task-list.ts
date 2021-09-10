import useTaskListController from '@/middleware/controllers/useTaskListController'


export default function useTaskList() {
    const tasksList = useTaskListController()

  const getTasksList = () => {
    tasksList.getTasks({limit: 5}).then((res) => console.log(res))
  }

  return {
    getTasksList
  }
}
