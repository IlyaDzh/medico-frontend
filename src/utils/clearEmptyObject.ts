export const clearEmptyObject = (obj: any) =>
    Object.keys(obj).forEach(key => obj[key] !== "" && !obj[key] && delete obj[key]);
