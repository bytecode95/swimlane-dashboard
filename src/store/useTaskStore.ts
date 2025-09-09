import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Task, TaskStatus } from './types/task.types';
import tasksData from '@/lib/mock/tasks.json';

interface TaskState {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    moveTask: (taskId: string, newStatus: TaskStatus, position?: number) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredTasks: Task[];
    getFilteredTasks: () => Task[];
}

const STORAGE_KEY = 'swimlane_tasks';

export const useTaskStore = create<TaskState>()(
    devtools((set, get) => ({
        tasks: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || tasksData,
        setTasks: (tasks: Task[]) => {
            set({ tasks });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        },
        moveTask: (taskId, newStatus: TaskStatus, position?: number) =>
            set(state => {
                const task = state.tasks.find(t => t.id === taskId);
                if (!task) return { tasks: state.tasks };

                const updatedTask = { ...task, status: newStatus };
                let newTasks = state.tasks.filter(t => t.id !== taskId);
                const before = newTasks.filter(t => t.status !== newStatus);
                const targetColumn = newTasks.filter(t => t.status === newStatus);
                if (typeof position === "number") {
                    targetColumn.splice(position, 0, updatedTask);
                } else {
                    targetColumn.push(updatedTask);
                }

                newTasks = [...before, ...targetColumn];

                localStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
                return { tasks: newTasks };
            }),
        searchQuery: '',
        setSearchQuery: (query: string) => set({ searchQuery: query }),
        getFilteredTasks: () => {
            const state = get();
            const lowerQuery = state.searchQuery.toLowerCase();
            return state.tasks.filter(t => t.title.toLowerCase().includes(lowerQuery));
        },

    }))
);
