import { useTaskStore } from '@/store/useTaskStore';
import BaseAvatar from '../base-avatar/BaseAvatar';
import BaseButton from '../base-button/BaseButton';
import BaseSearch from '../base-forms/input/BaseInput';
import { BaseIcon } from '../base-icon';

interface TopbarProps {
    onToggleSidebar: () => void;
}

export const TopBar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
    const searchQuery = useTaskStore(state => state.searchQuery);
    const setSearchQuery = useTaskStore(state => state.setSearchQuery);

    return (
        <header className="sticky top-0 bg-white border-b border-[color:var(--color-text-neutral8)] h-20 flex items-center justify-end !p-3 z-10">
            <div className="flex items-center gap-4 ml-auto !mr-4">
                <BaseButton
                    text="Create New Board"
                    iconName="Add"
                    bgColor="var(--color-primary)"
                    textColor="#fff"
                    fullWidth={false}
                    className="!p-3 hidden md:flex"
                />
                <BaseSearch
                    placeholder="Search Tasks..."
                    iconName="Search"
                    bgColor="var(--color-text-neutral8)/5"
                    textColor="var(--color-text-neutral1)"
                    className="p-2 w-40 sm:w-64"
                    fullWidth={false}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <BaseIcon name="Notification" size={20} />
                <BaseAvatar src="/avatar.png" size={32} />
            </div>
        </header>
    );
};
