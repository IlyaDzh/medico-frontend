export interface IUserStore {
    currentUser: IUser | undefined;
    pending: boolean;
    fetchUser: () => void;
    doLogout: () => void;
}

export interface IUser {
    id: number;
    additionalData: AdditionalData | null;
    userType: "patient" | "doctor";
    email: string;
    surname: string;
    name: string;
    middleName: string;
    birthDate: Date;
    phone: string;
    sex: "male" | "female";
    isActivated: boolean;
    acceptedUserAgreement: boolean;
}

export type AdditionalData = {
    weight: number;
    height: number;
    bloodType: string;
    RHFactor: string;
    allergies: string;
    chronicDiseases: string;
    operations: string;
    isSmoker: string;
    isAlcoholic: string;
    badHabits: string;
    bloodTransfusion: string;
    isFullData: boolean;
};
