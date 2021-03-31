export interface ISpecialtiesStore {
    specialties: Specialty[];
    pending: boolean;
    getSpecialties: () => void;
}

export type Specialty = {
    id: number;
    name: string;
    slug: string;
};
