import { Specialty } from "./ISpecialtiesStore";

export interface IHomeStore {
    doctors: HomeDoctor[] | null;
    pending: boolean;
    feedbackForm: IFeedbackForm;
    feedbackFormErrors: IFeedbackFormErrors;
    pendingFeedback: boolean;
    submissionSuccess: string | undefined;
    submissionError: string | undefined;
    getDoctors: () => void;
    sendFeedback: () => void;
    validateForm: () => boolean;
    setFormValue: <K extends KeysOfFeedbackForm>(
        key: K,
        value: IFeedbackForm[K]
    ) => void;
    resetForm: () => void;
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

export interface IFeedbackForm {
    name: string;
    email: string;
    subject: string;
    text: string;
    acceptedAgreement: boolean;
}

export interface IFeedbackFormErrors {
    name: undefined | string;
    email: undefined | string;
    subject: undefined | string;
    text: undefined | string;
}

export type KeysOfFeedbackForm = keyof IFeedbackForm;
