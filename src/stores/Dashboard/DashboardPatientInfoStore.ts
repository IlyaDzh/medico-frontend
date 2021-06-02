import { AxiosResponse, AxiosError } from "axios";
import { makeAutoObservable, action, reaction } from "mobx";

import {
    DashboardDoctorApi,
    IAddAppointmentPostData,
    IConsultationInfoSuccessResponse
} from "api";
import {
    IDashboardPatientInfoStore,
    PatientProfile,
    CurrentConsultation,
    AnalysisType,
    Analysis,
    AppointmentResult
} from "stores/interfaces/Dashboard";
import IStores from "stores/interfaces";
import { isLength } from "utils/validation";

export class DashboardPatientInfoStore implements IDashboardPatientInfoStore {
    patient: PatientProfile | undefined = undefined;

    consultation: CurrentConsultation | undefined = undefined;

    analyzes: Analysis[] = [] as Analysis[];

    history: AppointmentResult[] = [] as AppointmentResult[];

    pending: boolean = false;

    fetchingError: boolean = false;

    appointmentText: string = "";

    pendingAppointment: boolean = false;

    appointmentError: string = "";

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeAutoObservable(this);

        reaction(
            () => this.appointmentText,
            text => text && (this.appointmentError = isLength(text, 1, 10000) || "")
        );
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

    sendAppointment = () => {
        if (!this.validateAppointmentText()) {
            return;
        }

        this.pendingAppointment = true;
        this.appointmentError = "";

        const postData: IAddAppointmentPostData = {
            consultationId: this.consultation!.id,
            patientId: this.patient!.id,
            appointmentText: this.appointmentText
        };

        DashboardDoctorApi.sendAppointment(postData)
            .then(() => {
                this.rootStore.modalsStore.setModalIsOpen("add-appointment", false);
            })
            .catch(
                action((error: AxiosError) => {
                    if (error.response && error.response.status === 403) {
                        this.appointmentError =
                            "Оставить назначение можно только во время консультации";
                    }
                })
            )
            .finally(
                action(() => {
                    this.pendingAppointment = false;
                })
            );
    };

    validateAppointmentText = () => {
        this.appointmentError = isLength(this.appointmentText, 1, 10000) || "";

        return Boolean(!this.appointmentError);
    };

    setAppointmentText = (text: string) => {
        this.appointmentText = text;
    };

    resetAppointmentError = () => {
        this.appointmentError = "";
    };

    resetProfile = () => {
        this.fetchingError = false;
        this.patient = undefined;
        this.consultation = undefined;
    };
}
