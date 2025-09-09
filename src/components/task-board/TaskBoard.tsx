'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
    DndContext,
    closestCenter,
    DragStartEvent,
    DragEndEvent,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import TaskColumn from './TaskColumn';
import TaskCard from './TaskCard';
import { StatusKey } from '@/types';
import { useTaskStore } from '@/store/useTaskStore';

const STATUS_KEYS: StatusKey[] = ['todo', 'inProgress', 'approved', 'rejected'];

const TaskBoard: React.FC = () => {
    const tasks = useTaskStore(state => state.tasks);
    const searchQuery = useTaskStore(state => state.searchQuery);
    const moveTask = useTaskStore(state => state.moveTask);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const filteredTasks = useMemo(() => {
        const lowerQuery = searchQuery.toLowerCase();
        return tasks.filter(t => t.title.toLowerCase().includes(lowerQuery));
    }, [tasks, searchQuery]);

    const [activeTask, setActiveTask] = useState<null | (typeof tasks)[0]>(null);

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
        <div
            ref={scrollContainerRef}
            className="overflow-x-auto px-4 pb-4 h-[calc(100vh-100px)] overflow-y-auto scroll-smooth"
        >
            <div className="flex gap-6 min-w-max">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    {STATUS_KEYS.map(status => (
                        <TaskColumn
                            key={status}
                            status={status}
                            tasks={filteredTasks.filter(t => t.status === status)}
                        />
                    ))}
                    <DragOverlay>{activeTask ? <TaskCard task={activeTask} /> : null}</DragOverlay>
                </DndContext>
            </div>
        </div>
    );
};

export default TaskBoard;
