import { StatusKey } from "@/types/project-status.types";

export type TaskStatus = StatusKey;

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}
