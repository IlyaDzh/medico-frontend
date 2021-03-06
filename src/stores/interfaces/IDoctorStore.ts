import { Specialty } from "./ISpecialtiesStore";
import { Experience } from "./IUserStore";

export interface IDoctorStore {
    currentDoctor: IDoctor | null;
    pendingProfile: boolean;
    pendingProfileReviews: boolean;
    fetchingProfileError: boolean;
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
    education: Experience[];
    workplaces: Experience[];
    reviews: Review[];
    countOfReviews: number;
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
