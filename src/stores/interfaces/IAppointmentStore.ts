import { IDoctor } from "./IDoctorStore";

export interface IAppointmentStore {
    chosenDoctor: IDoctor | null;
    pendingMetaInfo: boolean;
    fetchingMetaInfoError: boolean;
    appointmentForm: IAppointmentForm;
    pendingAppointment: boolean;
    submissionError: string | undefined;
    getMetaInfo: (id: number) => void;
    createAppointment: () => void;
    setFormValue: <K extends KeysOfAppointmentForm>(
        key: K,
        value: IAppointmentForm[K]
    ) => void;
    resetAppointment: () => void;
}

export interface IAppointmentForm {
    date: Date;
    time: string;
    communicationMethod: number;
    symptoms: string;
}

export type KeysOfAppointmentForm = keyof IAppointmentForm;
