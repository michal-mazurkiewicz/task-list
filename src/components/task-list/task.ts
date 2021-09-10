import { Task, FormattedTask } from "@/models/task.model";

export default function useTask() {
    const dateFormatter = (date: number): string => {
        const dateNow: number = new Date().getTime()
        const dateDiff: number = dateNow - date;
        const seconds = Math.floor(dateDiff / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
    
    const addedAgo = (date: Date): string => {
        return `Added ${dateFormatter(date.getTime())} ago.`
    }
    
    const formatTask = (task: Task): FormattedTask => {
        return {
            title: task.title,
            description: task.description,
            budget: task.budget,
            proposalCount: task.proposalCount,
            platforms: task.platforms.join(', '),
            timestamp: addedAgo(new Date(task.addedTime))
        }
    }
    return {
      formatTask
    }
  } 