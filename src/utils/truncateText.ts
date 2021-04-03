const truncateText = (
    text: string,
    limit: number = 20,
    lengthStart: number = 8,
    lengthEnd: number = 8
): string => {
    return text.length > limit
        ? text.slice(0, lengthStart) + "..." + text.slice(-lengthEnd)
        : text;
};

export default truncateText;
