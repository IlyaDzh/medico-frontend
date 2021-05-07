export interface IDashboardConsultationsStore {
    activeConsultations: Consultation[];
    waitingConsultations: Consultation[];
    doneConsultations: Consultation[];
    pendingActiveConsultations: boolean;
    pendingWaitingConsultations: boolean;
    pendingDoneConsultations: boolean;
    cancelConsultationId: number | null;
    getActiveConsultations: () => void;
    getWaitingConsultations: () => void;
    getDoneConsultations: () => void;
    cancelConsultation: () => void;
    setCancelConsultationId: (id: number) => void;
}

export interface Consultation {
    id: number;
    receptionDate: Date;
    communicationMethod: {
        id: number;
        method: string;
    };
    doctorSpecialty: {
        id: number;
        name: string;
    };
    doctor: {
        id: number;
        name: string;
        surname: string;
        middleName: string;
        photo: string;
    };
}
