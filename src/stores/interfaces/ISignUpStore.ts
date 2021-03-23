export interface ISignUpStore {
    signUpForm: ISignUpForm;
    submissionError: string | undefined;
    pending: boolean;
    doSignUp: () => void;
    setFormValue: <K extends KeysOfSignUpForm>(
        key: K,
        value: ISignUpForm[K]
    ) => void;
    resetForm: () => void;
}

export interface ISignUpForm {
    userType: string;
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: Date;
    gender: string;
    phoneNumber: string;
    email: string;
    password: string;
    acceptedUserAgreement: boolean;
}

export type KeysOfSignUpForm = keyof ISignUpForm;
