import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import {
    DashboardDoctorApi,
    IConsultationInfoSuccessResponse,
    IConsultationInfoErrorResponse
} from "api";
import {
    IDashboardPatientInfoStore,
    PatientInfo
} from "stores/interfaces/Dashboard";

export class DashboardPatientInfoStore implements IDashboardPatientInfoStore {
    patientInfo: PatientInfo | undefined = undefined;

    pending: boolean = false;

    fetchingError: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getPatientInfo = (patientId: number, consultationId: number) => {
        this.pending = true;
        this.fetchingError = false;

        DashboardDoctorApi.getConsultationInfo(patientId, consultationId)
            .then(
                action(
                    ({ data }: AxiosResponse<IConsultationInfoSuccessResponse>) => {
                        this.patientInfo = data.data;
                    }
                )
            )
            .catch(
                action(() => {
                    this.fetchingError = true;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    resetProfile = () => {
        this.fetchingError = false;
    };
}
