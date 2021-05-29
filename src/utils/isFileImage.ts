export const isFileImage = (file: File): boolean =>
    file && file["type"].split("/")[0] === "image";
