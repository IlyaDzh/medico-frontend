import { formatDuration as formatDurationBase, Duration } from "date-fns";
import ruLocale from "date-fns/locale/ru";

export const formatDuration = (duration: Duration): string =>
    formatDurationBase(duration, {
        delimiter: ", ",
        locale: ruLocale
    });
