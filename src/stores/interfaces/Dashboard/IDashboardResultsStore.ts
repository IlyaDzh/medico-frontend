export interface IDashboardResultsStore {
    appointmentResults: AppointmentResult[];
    pending: boolean;
    getAppointmentResults: () => void;
    resetAll: () => void;
}

export interface AppointmentResult {
    id: number;
    appointment: string;
    receptionDate: Date;
    doctor: {
        id: number;
        name: string;
        surname: string;
        middleName: string;
        photo: string;
        specialty: string;
    };
}
