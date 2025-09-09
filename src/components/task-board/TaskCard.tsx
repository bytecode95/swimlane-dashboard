'use client';

import React from 'react';
import BaseAvatar from '@/theme/components/base-avatar/BaseAvatar';
import BaseTag from '@/theme/components/base-tag/BaseTag';
import { Task } from '@/store/types/task.types';
import { BaseIcon } from '@/theme';
import { CATEGORY_COLORS } from '@/constants/color-catergpry.constants';

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const categoryColor = CATEGORY_COLORS[task.category] || 'var(--color-text-neutral4)';
    return (
        <div className="bg-white rounded-lg !p-3 shadow-sm cursor-pointer">
            <div className="flex items-center gap-1 mb-2">
                <BaseIcon name="Rectangle" color={categoryColor} size={10} />
                <p className="text-xs text-[var(--color-text-neutral4)]">{task.category}</p>
            </div>
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm !font-medium text-black">{task.title}</h4>
                <BaseTag
                    text={task.priority}
                    bgClass="bg-[var(--color-text-neutral6)]"
                    textClass="text-[var(--color-text-neutral4)] text-sm"
                    iconName="FlashLight"
                />
            </div>

            <div className="flex items-center -space-x-2 !mt-2">
                {task.assigned.map(user => (
                    <BaseAvatar key={user.id} src={user.src} size={24} />
                ))}
            </div>
            <div className=" border-t border-t-[color:var(--color-text-neutral8)] !mt-2">
                <div className="!mt-2 flex justify-between text-xs">
                    <span className="flex items-center gap-1 justify-normal">
                        <BaseIcon name="ChatCircle" />
                        {task.comments}
                    </span>
                    <span className="flex items-center gap-1 justify-normal">
                        <BaseIcon name="Links" />
                        {task.attachments}
                    </span>
                    <span className="flex items-center gap-1 justify-normal">
                        <BaseIcon name="Calendar" /> : {task.dueDate}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
