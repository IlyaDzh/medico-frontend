export interface IDashboardConsultationsStore {
    waitingConsultations: Consultation[];
    doneConsultations: Consultation[];
    pendingWaitingConsultations: boolean;
    pendingDoneConsultations: boolean;
    cancelConsultationId: number | null;
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
