'use client';

import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    DragEndEvent,
    DragStartEvent,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import TaskColumn from './TaskColumn';
import TaskCard from './TaskCard';
import { StatusKey } from '@/types';
import { useTaskStore } from '@/store/useTaskStore';
import { Task } from '@/store/types/task.types';

const STATUS_KEYS: StatusKey[] = ['todo', 'inProgress', 'approved', 'rejected'];

const TaskBoard: React.FC = () => {
    const { tasks, setTasks, moveTask } = useTaskStore();
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragStart = (event: DragStartEvent) => {
        const taskId = event.active.id as string;
        const task = tasks.find(t => t.id === taskId) || null;
        setActiveTask(task);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveTask(null);

        if (!over) return;

        const taskId = active.id as string;
        const overId = over.id as string;

        const activeTask = tasks.find(t => t.id === taskId);
        if (!activeTask) return;
        if (STATUS_KEYS.includes(overId as StatusKey)) {
            moveTask(taskId, overId as StatusKey);
            return;
        }
        const overTask = tasks.find(t => t.id === overId);
        if (overTask) {
            const newStatus = overTask.status;
            const columnTasks = tasks.filter(t => t.status === newStatus);
            const newIndex = columnTasks.findIndex(t => t.id === overId);

            moveTask(taskId, newStatus, newIndex);
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="overflow-y-auto h-[calc(100vh-100px)] p-4">
                <div className="flex gap-4 min-w-max">
                    {STATUS_KEYS.map(status => (
                        <TaskColumn key={status} status={status} tasks={tasks.filter(t => t.status === status)} />
                    ))}
                </div>
            </div>
            <DragOverlay>{activeTask ? <TaskCard task={activeTask} /> : null}</DragOverlay>
        </DndContext>
    );
};

export default TaskBoard;
