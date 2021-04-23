import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import { AppointmentApi, IGetDoctorSuccessResponse } from "api";
import {
    IAppointmentPostData,
    ICreateAppointmentErrorResponse
} from "api/interfaces";
import {
    IAppointmentStore,
    IAppointmentForm,
    KeysOfAppointmentForm
} from "./interfaces/IAppointmentStore";
import { IDoctor } from "./interfaces/IDoctorStore";

const INITIAL_APPOINTMENT_FORM: IAppointmentForm = {
    date: new Date(),
    time: "",
    communicationMethod: 1,
    symptoms: ""
};

export class AppointmentStore implements IAppointmentStore {
    chosenDoctor: IDoctor | null = null;

    pendingMetaInfo: boolean = false;

    fetchingMetaInfoError: boolean = false;

    appointmentForm = INITIAL_APPOINTMENT_FORM;

    pendingAppointment: boolean = false;

    submissionError: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    getMetaInfo = (id: number) => {
        this.pendingMetaInfo = true;
        this.fetchingMetaInfoError = false;

        AppointmentApi.getMetaInfo(id)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorSuccessResponse>) => {
                    this.chosenDoctor = data.data;
                })
            )
            .catch(
                action(() => {
                    this.fetchingMetaInfoError = true;
                })
            )
            .finally(
                action(() => {
                    this.pendingMetaInfo = false;
                })
            );
    };

    createAppointment = () => {
        this.pendingAppointment = true;
        this.submissionError = undefined;

        const postData: IAppointmentPostData = {
            doctorId: this.chosenDoctor!.id,
            receptionDate: new Date(),
            // date: this.appointmentForm.date,
            // time: this.appointmentForm.time,
            communicationMethodId: this.appointmentForm.communicationMethod,
            symptoms: this.appointmentForm.symptoms
        };

        AppointmentApi.createAppointment(postData)
            .then(action(() => {}))
            .catch(
                action((error: AxiosError<ICreateAppointmentErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pendingAppointment = false;
                })
            );
    };

    setFormValue = <K extends KeysOfAppointmentForm>(
        key: K,
        value: IAppointmentForm[K]
    ) => {
        this.appointmentForm[key] = value;
    };

    resetAppointment = () => {
        this.chosenDoctor = null;
        this.appointmentForm = INITIAL_APPOINTMENT_FORM;
    };
}
