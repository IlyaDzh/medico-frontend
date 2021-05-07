export interface IDashboardResultsStore {
    appointmentResults: AppointmentResult[];
    pending: boolean;
    getAppointmentResults: () => void;
}

export interface AppointmentResult {
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
