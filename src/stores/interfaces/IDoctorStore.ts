import { Specialty } from "./ISpecialtiesStore";

export interface IDoctorStore {
    doctors: IDoctor[];
    currentDoctor: IDoctor | null;
    pagination: IPagination | null;
    pending: boolean;
    pendingProfile: boolean;
    pendingProfileReviews: boolean;
    fetchingDoctorsError: boolean;
    fetchingDoctorProfileError: boolean;
    getDoctors: (page: number) => void;
    getDoctorProfile: (id: number) => void;
    fetchReviews: () => void;
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
    reviews: Review[];
    countOfReviews: number;
}

export interface IPagination {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
}

export type Review = {
    id: number;
    name: string;
    surname: string;
    estimation: number;
    text: string;
    avatar: string | null;
    createdAt: string;
};
