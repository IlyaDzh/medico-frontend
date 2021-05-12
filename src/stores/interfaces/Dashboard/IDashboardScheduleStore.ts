export interface IDashboardScheduleStore {
    schedule: ScheduleItem[];
    pendingGetSchedule: boolean;
    pendingSubmit: boolean;
    submissionSuccess: string | undefined;
    submissionError: string | undefined;
    fetchSchedule: () => void;
    setSchedule: (time: number, day: number, type: "from" | "to") => void;
    changeSchedule: () => void;
    resetSubmissionResult: () => void;
}

export interface ScheduleItem {
    dayNumber: number;
    from: number;
    to: number;
}
