export interface ISignUpStore {
    signUpForm: ISignUpForm;
    signUpFormErrors: ISignUpFormErrors;
    submissionError: string | undefined;
    pending: boolean;
    doSignUp: () => void;
    validateForm: () => void;
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

export interface ISignUpFormErrors {
    firstName: undefined | string;
    lastName: undefined | string;
    birthDate: undefined | string;
    phoneNumber: undefined | string;
    email: undefined | string;
    password: {
        isLength: boolean;
        isUppercase: boolean;
        isLowercase: boolean;
        isNumber: boolean;
    };
}

export type KeysOfSignUpForm = keyof ISignUpForm;
