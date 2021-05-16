import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import { DashboardDoctorApi, IConsultationInfoSuccessResponse } from "api";
import {
    IDashboardPatientInfoStore,
    PatientProfile,
    CurrentConsultation,
    AnalysisType,
    Analysis,
    AppointmentResult
} from "stores/interfaces/Dashboard";

export class DashboardPatientInfoStore implements IDashboardPatientInfoStore {
    patient: PatientProfile | undefined = undefined;

    consultation: CurrentConsultation | undefined = undefined;

    analyzes: Analysis[] = [] as Analysis[];

    history: AppointmentResult[] = [] as AppointmentResult[];

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
                        this.patient = data.data.patient;
                        this.consultation = data.data.currentConsultation;
                        this.analyzes = data.data.patient.analyzes;
                        this.history = data.data.history;
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

    sortAnalyzesByType = (type: AnalysisType) => {
        return this.analyzes.filter(analysis => analysis.type === type);
    };

    resetProfile = () => {
        this.fetchingError = false;
        this.patient = undefined;
        this.consultation = undefined;
    };
}
