import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import { DashboardPatientApi, IGetAppointmentResultsSuccessResponse } from "api";
import {
    IDashboardResultsStore,
    AppointmentResult
} from "stores/interfaces/Dashboard";

export class DashboardResultsStore implements IDashboardResultsStore {
    appointmentResults: AppointmentResult[] = [] as AppointmentResult[];

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getAppointmentResults = () => {
        this.pending = true;

        DashboardPatientApi.getAppointmentResults()
            .then(
                action(
                    ({
                        data
                    }: AxiosResponse<IGetAppointmentResultsSuccessResponse>) => {
                        this.appointmentResults = data.data;
                    }
                )
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    resetAll = () => {
        this.appointmentResults = [];
        this.pending = false;
    };
}
