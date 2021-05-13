import { AxiosError } from "axios";
import { makeObservable, action, observable, reaction } from "mobx";

import { CommentApi, ISendCommentErrorResponse, ISendCommentPostData } from "api";
import {
    ICommentForm,
    ICommentFormErrors,
    ICommentStore,
    KeysOfCommentForm
} from "./interfaces/ICommentStore";
import { isLength, isRating } from "utils/validation";
import IStores from "./interfaces";

const INITIAL_SEND_COMMENT_FORM: ICommentForm = {
    text: "",
    estimation: null
};

const INITIAL_SEND_COMMENT_FORM_ERRORS: ICommentFormErrors = {
    text: undefined,
    estimation: undefined
};

export class CommentStore implements ICommentStore {
    doctorId: number | undefined = undefined;

    commentForm = INITIAL_SEND_COMMENT_FORM;

    commentFormErrors = INITIAL_SEND_COMMENT_FORM_ERRORS;

    pending: boolean = false;

    submissionError: string | undefined = undefined;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            doctorId: observable,
            commentForm: observable,
            commentFormErrors: observable,
            pending: observable,
            submissionError: observable,
            sendComment: action,
            validateForm: action,
            setFormValue: action,
            setDoctorId: action,
            resetForm: action
        });

        reaction(
            () => this.commentForm.text,
            text => text && (this.commentFormErrors.text = isLength(text, 5, 2000))
        );

        reaction(
            () => this.commentForm.estimation,
            estimation =>
                estimation &&
                (this.commentFormErrors.estimation = isRating(estimation))
        );
    }

    sendComment = () => {
        if (!this.validateForm()) {
            return;
        }

        this.pending = true;

        const postData: ISendCommentPostData = {
            doctorId: this.doctorId!,
            text: this.commentForm.text,
            estimation: this.commentForm.estimation!
        };

        CommentApi.sendComment(postData)
            .then(() => {
                this.rootStore.modalsStore.setModalIsOpen("add-comment", false);
                this.resetForm();
            })
            .catch(
                action((error: AxiosError<ISendCommentErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    validateForm = () => {
        this.commentFormErrors.text = isLength(this.commentForm.text, 5, 2000);
        this.commentFormErrors.estimation = isRating(this.commentForm.estimation);

        return Boolean(
            !(this.commentFormErrors.text || this.commentFormErrors.estimation)
        );
    };

    setFormValue = <K extends KeysOfCommentForm>(key: K, value: ICommentForm[K]) => {
        this.commentForm[key] = value;
    };

    setDoctorId = (id: number) => {
        this.doctorId = id;
    };

    resetForm = () => {
        this.commentForm = INITIAL_SEND_COMMENT_FORM;
        this.commentFormErrors = INITIAL_SEND_COMMENT_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
