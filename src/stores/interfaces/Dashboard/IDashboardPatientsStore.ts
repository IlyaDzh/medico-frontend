import { CommunicationMethod } from "../IAppointmentStore";

export interface IDashboardPatientsStore {
    patients: PatientItem[];
    currentDate: Date;
    currentType: GetPatientsType;
    pending: boolean;
    getPatients: (date?: string, type?: GetPatientsType) => void;
    setCurrentDate: (date: Date) => void;
    setCurrentType: (type: GetPatientsType) => void;
}

export interface PatientItem {
    id: number;
    receptionDate: Date;
    isFirstConsultation: boolean;
    patient: {
        id: number;
        name: string;
        surname: string;
        avatar: string | null;
    };
    communicationMethod: CommunicationMethod;
}

export type GetPatientsType = "new" | "done";
