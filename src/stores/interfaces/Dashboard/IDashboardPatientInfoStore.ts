import { Analysis, AppointmentResult } from "./";
import { PatientAdditionalData } from "../IUserStore";
import { CommunicationMethod } from "../IAppointmentStore";

export interface IDashboardPatientInfoStore {
    patientInfo: PatientInfo | undefined;
    pending: boolean;
    fetchingError: boolean;
    getPatientInfo: (patientId: number, consultationId: number) => void;
    resetProfile: () => void;
}

export interface PatientInfo {
    patient: PatientAdditionalData & {
        surname: string;
        name: string;
        middleName: string;
        birthDate: Date;
        analyzes: Analysis[];
    };
    currentConsultation: {
        id: number;
        symptoms: string;
        communicationMethod: CommunicationMethod;
    };
    history: AppointmentResult[];
}
