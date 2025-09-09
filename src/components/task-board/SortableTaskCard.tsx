'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskCard from './TaskCard';
import { Task } from '@/store/types/task.types';

interface SortableTaskCardProps {
    task: Task;
}

const SortableTaskCard: React.FC<SortableTaskCardProps> = ({ task }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? 'none' : transition || 'transform 250ms ease',
        zIndex: isDragging ? 999 : 'auto',
        opacity: isDragging ? 0.8 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskCard task={task} />
        </div>
    );
};

export default SortableTaskCard;
