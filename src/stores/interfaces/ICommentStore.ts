export interface ICommentStore {
    doctorId: number | undefined;
    commentForm: ICommentForm;
    commentFormErrors: ICommentFormErrors;
    pending: boolean;
    submissionError: string | undefined;
    sendComment: () => void;
    validateForm: () => boolean;
    setFormValue: <K extends KeysOfCommentForm>(
        key: K,
        value: ICommentForm[K]
    ) => void;
    setDoctorId: (id: number) => void;
    resetForm: () => void;
}

export interface ICommentForm {
    text: string;
    estimation: number | null;
}

export interface ICommentFormErrors {
    text: undefined | string;
    estimation: undefined | string;
}

export type KeysOfCommentForm = keyof ICommentForm;
