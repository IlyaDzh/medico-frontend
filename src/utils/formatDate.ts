import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

export const formatDate = (date: string, type: string = "HH:mm"): string =>
    format(new Date(date), type, {
        locale: ruLocale
    });
