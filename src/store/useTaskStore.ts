import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Task, TaskStatus } from './types/task.types';
import tasksData from '@/lib/mock/tasks.json';

interface TaskState {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    moveTask: (taskId: string, newStatus: TaskStatus) => void;
}

const STORAGE_KEY = 'swimlane_tasks';

export const useTaskStore = create<TaskState>()(
    devtools(set => ({
        tasks: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || tasksData,
        setTasks: (tasks: Task[]) => {
            set({ tasks });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        },
        moveTask: (taskId: string, newStatus: TaskStatus, newIndex?: number) =>
            set(state => {
                const task = state.tasks.find(t => t.id === taskId);
                if (!task) return { tasks: state.tasks };
                let newTasks = state.tasks.filter(t => t.id !== taskId);
                const updatedTask = { ...task, status: newStatus };

                if (typeof newIndex === 'number') {
                    newTasks.splice(newIndex, 0, updatedTask);
                } else {
                    newTasks.push(updatedTask);
                }

                localStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
                return { tasks: newTasks };
            }),
    }))
);
