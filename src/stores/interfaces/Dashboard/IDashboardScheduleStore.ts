export interface IDashboardScheduleStore {
    schedule: ScheduleItem[];
    pendingGetSchedule: boolean;
    submissionError: string | undefined;
    fetchSchedule: () => void;
}

export interface ScheduleItem {
    dayNumber: number;
    from: number;
    to: number;
}
