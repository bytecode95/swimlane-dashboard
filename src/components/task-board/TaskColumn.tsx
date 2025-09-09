'use client';

import React from 'react';
import { STATUS_CONFIG, StatusKey } from '@/types';
import { Task } from '@/store/types/task.types';
import BaseTag from '@/theme/components/base-tag/BaseTag';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableTaskCard from './SortableTaskCard';
import { useDroppable } from '@dnd-kit/core';

interface TaskColumnProps {
    status: StatusKey;
    tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks }) => {
    const statusConfig = STATUS_CONFIG[status];
    const { setNodeRef } = useDroppable({ id: status });

    return (
        <div className="flex flex-col w-72 ">
            <div className="sticky top-0 z-10 !p-2 bg-white flex items-center justify-center">
                <BaseTag
                    text={statusConfig.text}
                    bgClass={statusConfig.bgClass}
                    textClass={statusConfig.textClass}
                    roundedClass="rounded-full"
                />
            </div>
            <div ref={setNodeRef} className="bg-[var(--color-text-neutral6)] !p-2">
                {tasks.length > 0 ? (
                    <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                        <div className="flex flex-col gap-2 p-2">
                            {tasks.map(task => (
                                <SortableTaskCard key={task.id} task={task} />
                            ))}
                        </div>
                    </SortableContext>
                ) : (
                    <p className="text-center text-gray-400 text-sm mt-4">No tasks available</p>
                )}
            </div>
        </div>
    );
};

export default TaskColumn;
