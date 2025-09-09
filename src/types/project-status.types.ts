export type StatusKey = 'todo' | 'inProgress' | 'approved' | 'rejected';

export interface StatusConfig {
    text: string;
    bgClass: string;
    textClass: string;
}

export const STATUS_CONFIG: Record<StatusKey, StatusConfig> = {
    todo: {
        text: 'To Do',
        bgClass: 'bg-[var(--color-neutral6)]',
        textClass: 'text-[var(--color-text-neutral3)]',
    },
    inProgress: {
        text: 'In Progress',
        bgClass: 'bg-[var(--color-warning)]',
        textClass: 'text-[var(--color-text-neutral3)]',
    },
    approved: {
        text: 'Approved',
        bgClass: 'bg-[var(--color-success)]',
        textClass: 'text-[var(--color-text-neutral3)]',
    },
    rejected: {
        text: 'Rejected',
        bgClass: 'bg-[var(--color-error)]',
        textClass: 'text-[var(--color-text-neutral3)]',
    },
};
