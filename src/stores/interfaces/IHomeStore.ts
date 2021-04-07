import { Specialty } from "./ISpecialtiesStore";

export interface IHomeStore {
    doctors: HomeDoctor[] | null;
    pending: boolean;
    getDoctors: () => void;
}

export type HomeDoctor = {
    id: number;
    photo: string;
    name: string;
    surname: string;
    middleName: string;
    specialties: Specialty[];
    experience: string;
};
