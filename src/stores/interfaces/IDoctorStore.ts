import { Specialty } from "./ISpecialtiesStore";

export interface IDoctorStore {
    doctors: IDoctor[];
    currentDoctor: IDoctor | null;
    pagination: IPagination | null;
    pending: boolean;
    pendingProfile: boolean;
    fetchingDoctorsError: boolean;
    fetchingDoctorProfileError: boolean;
    getDoctors: (page: number) => void;
    getDoctorProfile: (id: number) => void;
    resetProfile: () => void;
}

export interface IDoctor {
    id: number;
    name: string;
    surname: string;
    middleName: string;
    photo: string;
    about: string;
    rating: null | number;
    experience: string;
    costOfConsultation: number;
    workTime: string;
    specialties: Specialty[];
    education: string[];
    workplaces: string[];
}

export interface IPagination {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
}
