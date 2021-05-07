import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import {
    DashboardPatientApi,
    ICancelConsultationPostData,
    IGetConsultationsSuccessResponse
} from "api";
import {
    IDashboardConsultationsStore,
    Consultation
} from "stores/interfaces/Dashboard";

export class DashboardConsultationsStore implements IDashboardConsultationsStore {
    waitingConsultations: Consultation[] = [] as Consultation[];

    doneConsultations: Consultation[] = [] as Consultation[];

    pendingWaitingConsultations: boolean = false;

    pendingDoneConsultations: boolean = false;

    cancelConsultationId: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getWaitingConsultations = () => {
        this.pendingWaitingConsultations = true;

        DashboardPatientApi.getConsultations("waiting")
            .then(
                action(
                    ({ data }: AxiosResponse<IGetConsultationsSuccessResponse>) => {
                        this.waitingConsultations = data.data;
                    }
                )
            )
            .finally(
                action(() => {
                    this.pendingWaitingConsultations = false;
                })
            );
    };

    getDoneConsultations = () => {
        this.pendingDoneConsultations = true;

        DashboardPatientApi.getConsultations("done")
            .then(
                action(
                    ({ data }: AxiosResponse<IGetConsultationsSuccessResponse>) => {
                        this.doneConsultations = data.data;
                    }
                )
            )
            .finally(
                action(() => {
                    this.pendingDoneConsultations = false;
                })
            );
    };

    cancelConsultation = () => {
        if (!this.cancelConsultationId) {
            return;
        }

        const postData: ICancelConsultationPostData = {
            consultationId: this.cancelConsultationId
        };

        DashboardPatientApi.cancelConsultation(postData).then(
            action(() => {
                this.waitingConsultations = this.waitingConsultations.filter(
                    item => item.id !== this.cancelConsultationId
                );
            })
        );
    };

    setCancelConsultationId = (id: number) => {
        this.cancelConsultationId = id;
    };
}
