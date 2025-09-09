import BaseAvatar from '../base-avatar/BaseAvatar';
import BaseButton from '../base-button/BaseButton';
import BaseSearch from '../base-forms/input/BaseInput';
import { BaseIcon } from '../base-icon/BaseIcon';

const Topbar: React.FC = () => {
    return (
        <header className="sticky top-0 bg-white border-b border-b-[color:var(--color-text-neutral8)] h-20 flex items-center justify-end px-4 z-10">
            <div className="flex items-center gap-4 ml-auto !mr-10">
                <BaseButton
                    text="Create New Board"
                    iconName="Add"
                    bgColor="var(--color-primary)"
                    textColor="#fff"
                    fullWidth={false}
                    className="!p-3"
                />
                <BaseSearch
                    placeholder="Search Tasks..."
                    iconName="Search"
                    bgColor="var(--color-text-neutral8)/5"
                    textColor="var(--color-text-neutral1)"
                    className="!p-2 w-64" // fixed width, or use max-w-xs for responsive
                    fullWidth={false}
                />
                <BaseIcon name="Notification" size={20} />
                <BaseAvatar src="/avatar.png" size={32} />
            </div>
        </header>
    );
};

export default Topbar;
