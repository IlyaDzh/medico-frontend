import { Analysis } from "./";

export interface IDashboardPatientInfoStore {
    patientInfo: PatientInfo | undefined;
    pending: boolean;
    fetchingError: boolean;
    getPatientInfo: (patientId: number, consultationId: number) => void;
    resetProfile: () => void;
}

export interface PatientInfo {
    patient: {
        analyzes: Analysis[];
    };
    currentConsultation: {};
    history: {};
}
