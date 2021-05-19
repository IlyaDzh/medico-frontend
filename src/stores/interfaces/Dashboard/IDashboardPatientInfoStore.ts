import { Analysis, AnalysisType, AppointmentResult } from "./";
import { PatientAdditionalData } from "../IUserStore";
import { CommunicationMethod } from "../IAppointmentStore";

export interface IDashboardPatientInfoStore {
    patient: PatientProfile | undefined;
    consultation: CurrentConsultation | undefined;
    analyzes: Analysis[];
    history: AppointmentResult[];
    pending: boolean;
    fetchingError: boolean;
    getPatientInfo: (patientId: number, consultationId: number) => void;
    sortAnalyzesByType: (type: AnalysisType) => Analysis[];
    resetProfile: () => void;
}

export type PatientProfile = PatientAdditionalData & {
    surname: string;
    name: string;
    middleName: string;
    birthDate: Date;
    analyzes: Analysis[];
};

export type CurrentConsultation = {
    id: number;
    chatId: number;
    symptoms: string;
    communicationMethod: CommunicationMethod;
};
