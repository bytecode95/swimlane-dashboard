'use client';

import { useState, useEffect } from 'react';
import { useTaskStore } from '@/store/useTaskStore';
import { Task } from '@/store/types/task.types';

export const useTaskSearch = () => {
    const tasks = useTaskStore(state => state.tasks);
    const setSearchQuery = useTaskStore(state => state.setSearchQuery);

    const [query, setQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(query);
        }, 200);

        return () => clearTimeout(handler);
    }, [query, setSearchQuery]);

    useEffect(() => {
        const lowerQuery = query.toLowerCase();
        setFilteredTasks(
            tasks.filter(task => task.title.toLowerCase().includes(lowerQuery))
        );
    }, [tasks, query]);

    return { query, setQuery, filteredTasks };
};
