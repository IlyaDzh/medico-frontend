export interface IQuestionnaireStore {
    questionnaireForm: IQuestionnaireForm;
    questionnaireFormErrors: IQuestionnaireFormErrors;
    submissionError: string | undefined;
    pending: boolean;
    sendForm: () => void;
    validateForm: () => void;
    setFormValue: <K extends KeysOfQuestionnaireForm>(
        key: K,
        value: IQuestionnaireForm[K]
    ) => void;
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
}

export interface IQuestionnaireFormErrors {
    weight: undefined | string;
    height: undefined | string;
    bloodType: undefined | string;
    RHFactor: undefined | string;
    isSmoker: undefined | string;
    isAlcoholic: undefined | string;
    bloodTransfusion: undefined | string;
}

export type KeysOfQuestionnaireForm = keyof IQuestionnaireForm;
