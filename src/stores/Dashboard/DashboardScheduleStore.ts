import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import { DashboardDoctorApi, IGetScheduleSuccessResponse } from "api";
import { IDashboardScheduleStore, ScheduleItem } from "stores/interfaces/Dashboard";

export class DashboardScheduleStore implements IDashboardScheduleStore {
    schedule: ScheduleItem[] = [] as ScheduleItem[];

    pendingGetSchedule: boolean = false;

    submissionError: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    fetchSchedule = () => {
        this.pendingGetSchedule = true;

        DashboardDoctorApi.getSchedule()
            .then(
                action(({ data }: AxiosResponse<IGetScheduleSuccessResponse>) => {
                    this.schedule = [...data.data];
                })
            )
            .finally(
                action(() => {
                    this.pendingGetSchedule = false;
                })
            );
    };
}
