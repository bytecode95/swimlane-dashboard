'use client';

import React from 'react';

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import TaskColumn from './TaskColumn';
import { StatusKey } from '@/types';
import { useTaskStore } from '@/store/useTaskStore';

const STATUS_KEYS: StatusKey[] = ['todo', 'inProgress', 'approved', 'rejected'];

const TaskBoard: React.FC = () => {
    const { tasks, moveTask } = useTaskStore();
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as StatusKey;

        moveTask(taskId, newStatus);
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="overflow-y-auto h-[calc(100vh-100px)] p-4">
                <div className="flex gap-4 min-w-max">
                    {STATUS_KEYS.map(status => (
                        <div key={status} id={status}>
                            <TaskColumn status={status} tasks={tasks.filter(t => t.status === status)} />
                        </div>
                    ))}
                </div>
            </div>
        </DndContext>
    );
};

export default TaskBoard;
