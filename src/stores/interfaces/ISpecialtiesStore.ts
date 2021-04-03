export interface ISpecialtiesStore {
    specialties: Specialty[] | null;
    pending: boolean;
    getSpecialties: () => void;
}

export type Specialty = {
    id: number;
    name: string;
    slug: string;
};
