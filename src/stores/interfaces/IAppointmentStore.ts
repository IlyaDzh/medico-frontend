import { IDoctor } from "./IDoctorStore";

export interface IAppointmentStore {
    chosenDoctor: IDoctor | null;
    communicationMethods: CommunicationMethod[] | null;
    availableTime: AvailableTime[] | null;
    pendingMetaInfo: boolean;
    fetchingMetaInfoError: boolean;
    appointmentForm: IAppointmentForm;
    appointmentFormErrors: IAppointmentFormErrors;
    pendingAppointment: boolean;
    submissionError: string | undefined;
    getMetaInfo: (id: number) => void;
    getFreeDoctorTime: (date: Date) => void;
    createAppointment: () => void;
    validateForm: () => boolean;
    setFormValue: <K extends KeysOfAppointmentForm>(
        key: K,
        value: IAppointmentForm[K]
    ) => void;
    resetAppointment: () => void;
}

export interface IAppointmentForm {
    date: Date;
    time: string | undefined;
    communicationMethod: string | undefined;
    doctorSpecialty: number | undefined;
    symptoms: string;
}

export interface IAppointmentFormErrors {
    symptoms: undefined | string;
}

export type KeysOfAppointmentForm = keyof IAppointmentForm;

export type CommunicationMethod = {
    id: number;
    method: string;
};

export type AvailableTime = {
    time: string;
    isClosed: boolean;
};
