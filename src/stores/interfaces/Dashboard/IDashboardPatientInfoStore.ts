import { Analysis, AppointmentResult } from "./";
import { PatientAdditionalData } from "../IUserStore";

export interface IDashboardPatientInfoStore {
    patientInfo: PatientInfo | undefined;
    pending: boolean;
    fetchingError: boolean;
    getPatientInfo: (patientId: number, consultationId: number) => void;
    resetProfile: () => void;
}

export interface PatientInfo {
    patient: PatientAdditionalData & {
        analyzes: Analysis[];
    };
    currentConsultation: {
        id: number;
        symptoms: string;
    };
    history: AppointmentResult[];
}
