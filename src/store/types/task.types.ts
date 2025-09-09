import { AssignedUser, GenericUUID, TaskPriority } from "@/types";

import { StatusKey } from "@/types/project-status.types";

export type TaskStatus = StatusKey;

export interface Task {
    id: GenericUUID;
    title: string;
    category: string;
    status: TaskStatus;
    assigned: AssignedUser[];
    attachments: number;
    comments: number;
    dueDate: string;
    priority: TaskPriority;
}
