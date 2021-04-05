export interface IUserStore {
    currentUser: IUser | undefined;
    isAuthorized: boolean;
    pending: boolean;
    fetchUser: () => void;
    doLogout: () => void;
}

export interface IUser {
    id: number;
    additionalData: AdditionalData | null;
    userType: "patient" | "doctor";
    email: string;
    surname: string;
    name: string;
    middleName: string;
    birthDate: Date;
    phone: string;
    sex: "male" | "female";
}

export type AdditionalData = PatientAdditionalData & DoctorAdditionalData;

export type PatientAdditionalData = {
    weight: number;
    height: number;
    bloodType: string;
    RHFactor: string;
    allergies: string;
    chronicDiseases: string;
    operations: string;
    isSmoker: string;
    isAlcoholic: string;
    badHabits: string;
    bloodTransfusion: string;
};

export type DoctorAdditionalData = {
    IIN: string;
    experience: string;
    photo: string;
    summary: string;
    diploma: string;
    specialties: ISpecialty[];
    isVerified: boolean;
};

type ISpecialty = {
    id: number;
    name: string;
    slug: string;
};
