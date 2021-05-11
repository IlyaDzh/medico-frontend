import { IUser } from "../IUserStore";

export interface IDashboardSettingsStore {
    updateForm: IUpdateInfoForm;
    updateFormErrors: IUpdateInfoFormErrors;
    pending: boolean;
    submissionError: string | undefined;
    avatarPending: boolean;
    updateUserInfo: () => void;
    validateForm: () => boolean;
    setFormValue: <K extends KeysOfUpdateInfoForm>(
        key: K,
        value: IUpdateInfoForm[K]
    ) => void;
    setUpdateInfoForm: (data: IUser) => void;
    setAvatar: (file: File) => void;
    resetForm: () => void;
}

export interface IUpdateInfoForm {
    surname: string;
    name: string;
    middleName: string;
    birthDate: Date;
    phone: string;
    sex: "male" | "female";
}

export interface IUpdateInfoFormErrors {
    surname: undefined | string;
    name: undefined | string;
    birthDate: undefined | string;
    phone: undefined | string;
}

export type KeysOfUpdateInfoForm = keyof IUpdateInfoForm;
