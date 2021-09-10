<template>
    <main>
        <h2>{{ formattedTask.title }}</h2>
        <div>{{ formattedTask.description }}</div>
        <div>{{`Budget: ${formattedTask.budget.value} ${formattedTask.budget.currency}`}}</div>
        <div>{{ `Platforms: ${formattedTask.platforms}` }}</div>
        <div>{{ formattedTask.timestamp }}</div>
        <div>{{ `Proposals: ${formattedTask.proposalCount}` }}</div>
    </main>
</template> 

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { FormattedTask, Task } from "@/models/task.model";
import useTask from "@/components/task-list/task";

interface TaskProps {
    task: Task;
}

export default defineComponent({
    name: "TaskList",
    props: {
        task: {
            type: Object as PropType<TaskProps>,
            required: true,
        }
    },
    setup(props) {
        const task = ref(props.task)
        const { formatTask } = useTask()
        console.log(props)
        const formattedTask: FormattedTask = formatTask(task.value.task)
        return {
            formattedTask
        };
    }
});
</script>
<style lang="scss" scoped>
main {
    border: 1px solid black;
    margin: 5px;
}
</style>
