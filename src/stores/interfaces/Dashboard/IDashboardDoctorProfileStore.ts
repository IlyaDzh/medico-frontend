import { AdditionalData } from "../IUserStore";

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
    resetForm: () => void;
}

export interface IUpdateDoctorProfileForm {
    cost: string;
    about: string;
}

export type ChangeDoctorProfileTypes = "cost" | "about";

export type KeysOfDoctorProfileForm = keyof IUpdateDoctorProfileForm;
