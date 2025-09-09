export interface MenuSection {
    key: string;
    label: string;
    icon?: React.ReactNode;
    path?: string;
    children?: {
        key: string;
        label: string;
        path: string;
        icon?: React.ReactNode;
    }[];
}