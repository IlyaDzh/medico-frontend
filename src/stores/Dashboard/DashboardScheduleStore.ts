import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import {
    DashboardDoctorApi,
    IChangeScheduleErrorResponse,
    IChangeSchedulePostData,
    IChangeScheduleSuccessResponse,
    IGetScheduleSuccessResponse
} from "api";
import { IDashboardScheduleStore, ScheduleItem } from "stores/interfaces/Dashboard";

export class DashboardScheduleStore implements IDashboardScheduleStore {
    schedule: ScheduleItem[] = [] as ScheduleItem[];

    pendingGetSchedule: boolean = false;

    pendingSubmit: boolean = false;

    submissionSuccess: string | undefined = undefined;

    submissionError: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    fetchSchedule = () => {
        this.pendingGetSchedule = true;

        DashboardDoctorApi.getSchedule()
            .then(
                action(({ data }: AxiosResponse<IGetScheduleSuccessResponse>) => {
                    this.schedule = data.data;
                })
            )
            .finally(
                action(() => {
                    this.pendingGetSchedule = false;
                })
            );
    };

    setSchedule = (time: number, day: number, type: "from" | "to") => {
        this.schedule[day][type] = time;
    };

    changeSchedule = () => {
        this.pendingSubmit = true;

        const postData: IChangeSchedulePostData = {
            schedule: this.schedule
        };

        DashboardDoctorApi.changeSchedule(postData)
            .then(
                action(({ data }: AxiosResponse<IChangeScheduleSuccessResponse>) => {
                    this.schedule = data.data;
                    this.submissionSuccess = data.message;
                })
            )
            .catch(
                action((error: AxiosError<IChangeScheduleErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pendingSubmit = false;
                })
            );
    };

    resetSubmissionResult = () => {
        this.submissionSuccess = undefined;
        this.submissionError = undefined;
    };
}
