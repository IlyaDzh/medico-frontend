import { IDoctor } from "./IDoctorStore";
import { AvailableTime, CommunicationMethod } from "api";

export interface IAppointmentStore {
    chosenDoctor: IDoctor | null;
    communicationMethods: CommunicationMethod[] | null;
    availableTime: AvailableTime[] | null;
    pendingMetaInfo: boolean;
    fetchingMetaInfoError: boolean;
    appointmentForm: IAppointmentForm;
    pendingAppointment: boolean;
    submissionError: string | undefined;
    getMetaInfo: (id: number) => void;
    getFreeDoctorTime: (date: Date) => void;
    createAppointment: () => void;
    setFormValue: <K extends KeysOfAppointmentForm>(
        key: K,
        value: IAppointmentForm[K]
    ) => void;
    resetAppointment: () => void;
}

export interface IAppointmentForm {
    date: Date;
    time: string | undefined;
    communicationMethod: number | undefined;
    doctorSpecialty: number | undefined;
    symptoms: string;
}

export type KeysOfAppointmentForm = keyof IAppointmentForm;
