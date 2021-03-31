export interface ISpecialtiesStore {
    specialties: Specialty[];
    getSpecialties: () => void;
}

export type Specialty = {
    id: number;
    name: string;
    slug: string;
};
