import { AdditionalData } from "../IUserStore";

export interface IDashboardMedicalCardStore {
    changeCardForm: IChangeMedicalCardForm;
    currentModalState: AdditionalTypes | null;
    pending: boolean;
    submissionError: string | undefined;
    changeMedicalCard: () => void;
    setCurrentModalState: (state: AdditionalTypes) => void;
    setFormValue: <K extends KeysOfMedicalCardForm>(
        key: K,
        value: IChangeMedicalCardForm[K]
    ) => void;
    setChangeCardForm: (data: AdditionalData) => void;
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

export type AdditionalTypes =
    | "height-weight"
    | "blood-type"
    | "bad-habits"
    | "allergies"
    | "chronic-diseases"
    | "operations"
    | "blood-transfusion";

export type KeysOfMedicalCardForm = keyof IChangeMedicalCardForm;
