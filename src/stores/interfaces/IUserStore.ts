import { Review } from "./IDoctorStore";
import { Specialty } from "./ISpecialtiesStore";

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
    avatar: string;
};

export type DoctorAdditionalData = {
    IIN: string;
    about: string;
    costOfConsultation: number;
    countOfReviews: number;
    diploma: string;
    specialties: Specialty[];
    education: string[];
    experience: string;
    isVerified: boolean;
    photo: string;
    rating: null | number;
    reviews: Review[];
    summary: string;
    weeklySchedule: Schedule[];
    workTime: string;
    workplaces: string[];
};

type Schedule = {
    dayNumber: number;
    workingHours: number[];
};
