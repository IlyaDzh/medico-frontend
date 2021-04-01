export interface IQuestionnaireStore {
    questionnaireForm: IQuestionnaireForm;
    questionnaireFormErrors: IQuestionnaireFormErrors;
    submissionError: string | undefined;
    pending: boolean;
    sendPatientForm: () => void;
    sendDoctorForm: () => void;
    validatePatientForm: () => void;
    validateDoctorForm: () => void;
    setFormValue: <K extends KeysOfQuestionnaireForm>(
        key: K,
        value: IQuestionnaireForm[K]
    ) => void;
    setFile: (property: KeysOfFile, file: File) => void;
    resetForm: () => void;
}

export interface IQuestionnaireForm {
    weight: string;
    height: string;
    bloodType: string;
    RHFactor: string;
    allergies: string;
    chronicDiseases: string;
    operations: string;
    isSmoker: string;
    isAlcoholic: string;
    badHabits: string;
    bloodTransfusion: string;
    IIN: string;
    experienceNumber: string;
    experienceType: string;
    photo: File | null;
    summary: File | null;
    diploma: File | null;
}

export interface IQuestionnaireFormErrors {
    weight: undefined | string;
    height: undefined | string;
    bloodType: undefined | string;
    RHFactor: undefined | string;
    isSmoker: undefined | string;
    isAlcoholic: undefined | string;
    bloodTransfusion: undefined | string;
    IIN: undefined | string;
    experienceNumber: undefined | string;
    photo: undefined | string;
    summary: undefined | string;
    diploma: undefined | string;
}

export type KeysOfQuestionnaireForm = keyof IQuestionnaireForm;

export type KeysOfFile = "photo" | "summary" | "diploma";
