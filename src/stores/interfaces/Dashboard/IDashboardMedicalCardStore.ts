export interface IDashboardMedicalCardStore {
    changeCardForm: IChangeMedicalCardForm;
    changeCardFormErrors: IChangeMedicalCardFormErrors;
    currentModalState: AdditionalTypes | null;
    pending: boolean;
    submissionError: string | undefined;
    changeMedicalCard: () => void;
    setCurrentModalState: (state: AdditionalTypes) => void;
    // validateForm: () => boolean;
    setFormValue: <K extends KeysOfMedicalCardForm>(
        key: K,
        value: IChangeMedicalCardForm[K]
    ) => void;
    resetForm: () => void;
}

export interface IChangeMedicalCardForm {
    weight: string | undefined;
    height: string | undefined;
    bloodType: string | undefined;
    RHFactor: string | undefined;
    allergies: string | undefined;
    chronicDiseases: string | undefined;
    operations: string | undefined;
    isSmoker: string | undefined;
    isAlcoholic: string | undefined;
    badHabits: string | undefined;
    bloodTransfusion: string | undefined;
}

export interface IChangeMedicalCardFormErrors {
    weight: undefined | string;
    height: undefined | string;
    bloodType: undefined | string;
    RHFactor: undefined | string;
    isSmoker: undefined | string;
    isAlcoholic: undefined | string;
    bloodTransfusion: undefined | string;
}

export type AdditionalTypes =
    | "blood-type"
    | "bad-habits"
    | "allergies"
    | "chronic-diseases"
    | "operations"
    | "blood-transfusion";

export type KeysOfMedicalCardForm = keyof IChangeMedicalCardForm;
