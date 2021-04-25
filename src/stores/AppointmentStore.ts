import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, action, autorun } from "mobx";

import { AppointmentApi } from "api";
import {
    AvailableTime,
    CommunicationMethod,
    IAppointmentPostData,
    ICreateAppointmentErrorResponse,
    IGetFreeDoctorTimeSuccessResponse,
    IGetMetaInfoSuccessResponse
} from "api/interfaces";
import {
    IAppointmentStore,
    IAppointmentForm,
    KeysOfAppointmentForm
} from "./interfaces/IAppointmentStore";
import { IDoctor } from "./interfaces/IDoctorStore";

const INITIAL_APPOINTMENT_FORM: IAppointmentForm = {
    date: new Date(),
    time: undefined,
    communicationMethod: undefined,
    doctorSpecialty: undefined,
    symptoms: ""
};

export class AppointmentStore implements IAppointmentStore {
    chosenDoctor: IDoctor | null = null;

    communicationMethods: CommunicationMethod[] | null = null;

    availableTime: AvailableTime[] | null = null;

    pendingMetaInfo: boolean = false;

    fetchingMetaInfoError: boolean = false;

    appointmentForm = INITIAL_APPOINTMENT_FORM;

    pendingAppointment: boolean = false;

    submissionError: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);

        autorun(() => {
            this.getFreeDoctorTime(new Date());
        });
    }

    getMetaInfo = (id: number) => {
        this.pendingMetaInfo = true;
        this.fetchingMetaInfoError = false;

        AppointmentApi.getMetaInfo(id)
            .then(
                action(({ data }: AxiosResponse<IGetMetaInfoSuccessResponse>) => {
                    this.chosenDoctor = data.data.doctor;
                    this.communicationMethods = data.data.communicationMethods;
                    this.setFormValue(
                        "communicationMethod",
                        data.data.communicationMethods[0].id
                    );
                    this.setFormValue(
                        "doctorSpecialty",
                        data.data.doctor.specialties[0].id
                    );
                    this.setFormValue("time", "9");
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

    getFreeDoctorTime = (date: Date) => {
        if (!this.chosenDoctor) {
            return;
        }

        const correctDate = new Date(date);
        correctDate.setHours(date.getHours() + 3);

        AppointmentApi.getFreeDoctorTime(
            this.chosenDoctor.id,
            correctDate.toISOString()
        ).then(
            action(({ data }: AxiosResponse<IGetFreeDoctorTimeSuccessResponse>) => {
                this.availableTime = data.data;

                const availableFirstTime = data.data.find(time => !time.isClosed);
                this.setFormValue(
                    "time",
                    availableFirstTime ? availableFirstTime.time : ""
                );
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
            communicationMethodId: this.appointmentForm.communicationMethod!,
            doctorSpecialtyId: this.appointmentForm.doctorSpecialty!,
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
        this.communicationMethods = null;
        this.appointmentForm = INITIAL_APPOINTMENT_FORM;
    };
}
