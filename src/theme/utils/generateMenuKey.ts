export const generateMenuKey = (input: string, parentKey?: string): string => {
    const sanitized = input
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return parentKey ? `${parentKey}.${sanitized}` : sanitized;
};
