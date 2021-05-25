import { AdditionalData, Experience } from "../IUserStore";

export interface IDashboardDoctorProfileStore {
    pendingReviews: boolean;
    doctorProfileForm: IUpdateDoctorProfileForm;
    currentModalState: ChangeDoctorProfileTypes | null;
    pendingUpdate: boolean;
    submissionError: string | undefined;
    fetchReviews: () => void;
    updateDoctorProfile: () => void;
    setCurrentModalState: (state: ChangeDoctorProfileTypes) => void;
    setFormValue: <K extends KeysOfDoctorProfileForm>(
        key: K,
        value: IUpdateDoctorProfileForm[K]
    ) => void;
    setDoctorProfileForm: (data: AdditionalData) => void;
    setTabValue: (
        object: "education" | "workplaces",
        key: "year" | "name",
        index: number,
        value: string
    ) => void;
    removeTabValue: (object: "education" | "workplaces", index: number) => void;
    addTabValue: (object: "education" | "workplaces") => void;
    resetForm: () => void;
}

export interface IUpdateDoctorProfileForm {
    cost: string;
    about: string;
    education: Experience[];
    workplaces: Experience[];
}

export type ChangeDoctorProfileTypes = "cost" | "about" | "education" | "workplaces";

export type KeysOfDoctorProfileForm = keyof IUpdateDoctorProfileForm;
