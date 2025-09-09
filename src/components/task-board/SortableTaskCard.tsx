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
    const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id: task.id });

    const style = {
        transform: transform ? CSS.Transform.toString(transform) : undefined,
        transition: transform ? 'transform 200ms ease' : undefined,
        zIndex: isDragging ? 50 : 'auto',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskCard task={task} />
        </div>
    );
};

export default SortableTaskCard;
