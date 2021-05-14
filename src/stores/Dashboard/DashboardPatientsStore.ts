import { AxiosResponse } from "axios";
import { makeAutoObservable, action, reaction } from "mobx";

import { DashboardDoctorApi, IGetPatientsSuccessResponse } from "api";
import {
    IDashboardPatientsStore,
    GetPatientsType,
    PatientItem
} from "stores/interfaces/Dashboard";

export class DashboardPatientsStore implements IDashboardPatientsStore {
    patients: PatientItem[] = [] as PatientItem[];

    currentDate: Date = new Date();

    currentType: GetPatientsType = "waiting";

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.currentDate,
            date => this.getPatients(date.toISOString(), this.currentType)
        );

        reaction(
            () => this.currentType,
            type => this.getPatients(this.currentDate.toISOString(), type)
        );
    }

    getPatients = (
        date = this.currentDate.toISOString(),
        type = this.currentType
    ) => {
        this.pending = true;
        this.patients = [];

        DashboardDoctorApi.getPatients(date, type)
            .then(
                action(({ data }: AxiosResponse<IGetPatientsSuccessResponse>) => {
                    this.patients = data.data;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    setCurrentDate = (date: Date) => {
        this.currentDate = date;
    };

    setCurrentType = (type: GetPatientsType) => {
        this.currentType = type;
    };
}
