import { differenceInCalendarYears } from "date-fns";

export const getAge = (date: Date): number =>
    differenceInCalendarYears(new Date(), new Date(date));
