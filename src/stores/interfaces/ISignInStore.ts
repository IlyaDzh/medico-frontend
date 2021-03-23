export interface ISignInStore {
    signInForm: ISignInForm;
    submissionError: string | undefined;
    pending: boolean;
    doSignIn: () => void;
    setFormValue: <K extends KeysOfSignInForm>(
        key: K,
        value: ISignInForm[K]
    ) => void;
    resetForm: () => void;
}

export interface ISignInForm {
    email: string;
    password: string;
}

export type KeysOfSignInForm = keyof ISignInForm;
