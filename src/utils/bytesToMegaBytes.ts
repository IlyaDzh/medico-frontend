export const bytesToMegaBytes = (bytes: number): string => {
    const converted = bytes / (1024 * 1024);
    return converted.toFixed(2) + "MB";
};
