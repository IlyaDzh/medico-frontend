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
    appointmentText: string;
    pendingAppointment: boolean;
    appointmentError: string;
    getPatientInfo: (patientId: number, consultationId: number) => void;
    sortAnalyzesByType: (type: AnalysisType) => Analysis[];
    sendAppointment: () => void;
    setAppointmentText: (text: string) => void;
    resetAppointmentError: () => void;
    validateAppointmentText: () => boolean;
    resetProfile: () => void;
}

export type PatientProfile = PatientAdditionalData & {
    id: number;
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
