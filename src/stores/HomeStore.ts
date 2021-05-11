import { AxiosError, AxiosResponse } from "axios";
import { makeAutoObservable, action, reaction } from "mobx";

import {
    DoctorApi,
    FeedbackApi,
    IGetMostExperienceDoctorSuccessResponse,
    IFeedbackPostData,
    IFeedbackSuccessResponse,
    IFeedbackErrorResponse
} from "api";
import {
    HomeDoctor,
    IFeedbackForm,
    IFeedbackFormErrors,
    IHomeStore,
    KeysOfFeedbackForm
} from "./interfaces/IHomeStore";
import { isEmail, isLength } from "utils/validation";

const INITIAL_FEEDBACK_FORM: IFeedbackForm = {
    name: "",
    email: "",
    subject: "",
    text: "",
    acceptedAgreement: false
};

const INITIAL_FEEDBACK_FORM_ERRORS: IFeedbackFormErrors = {
    name: undefined,
    email: undefined,
    subject: undefined,
    text: undefined
};

export class HomeStore implements IHomeStore {
    doctors: HomeDoctor[] | null = null;

    pending: boolean = false;

    feedbackForm = INITIAL_FEEDBACK_FORM;

    feedbackFormErrors = INITIAL_FEEDBACK_FORM_ERRORS;

    pendingFeedback: boolean = false;

    submissionSuccess: string | undefined = undefined;

    submissionError: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.feedbackForm.name,
            name => name && (this.feedbackFormErrors.name = isLength(name, 2, 200))
        );

        reaction(
            () => this.feedbackForm.email,
            email => email && (this.feedbackFormErrors.email = isEmail(email))
        );

        reaction(
            () => this.feedbackForm.subject,
            subject =>
                subject &&
                (this.feedbackFormErrors.subject = isLength(subject, 2, 200))
        );

        reaction(
            () => this.feedbackForm.text,
            text => text && (this.feedbackFormErrors.text = isLength(text, 5, 30000))
        );
    }

    getDoctors = () => {
        this.pending = true;

        DoctorApi.getDoctorsByCount(10)
            .then(
                action(
                    ({
                        data
                    }: AxiosResponse<IGetMostExperienceDoctorSuccessResponse>) => {
                        this.doctors = data.data;
                    }
                )
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    sendFeedback = () => {
        if (!this.validateForm()) {
            return;
        }

        this.pendingFeedback = true;

        const postData: IFeedbackPostData = {
            name: this.feedbackForm.name,
            email: this.feedbackForm.email,
            subject: this.feedbackForm.subject,
            text: this.feedbackForm.text
        };

        FeedbackApi.sendFeedback(postData)
            .then(
                action(({ data }: AxiosResponse<IFeedbackSuccessResponse>) => {
                    this.submissionSuccess = data.message;
                    this.resetForm();
                })
            )
            .catch(
                action((error: AxiosError<IFeedbackErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pendingFeedback = false;
                })
            );
    };

    validateForm = () => {
        this.feedbackFormErrors = {
            ...this.feedbackFormErrors,
            name: isLength(this.feedbackForm.name, 2, 200),
            email: isEmail(this.feedbackForm.email),
            subject: isLength(this.feedbackForm.subject, 2, 200),
            text: isLength(this.feedbackForm.text, 5, 30000)
        };

        return Boolean(
            !(
                this.feedbackFormErrors.name ||
                this.feedbackFormErrors.email ||
                this.feedbackFormErrors.subject ||
                this.feedbackFormErrors.text
            )
        );
    };

    setFormValue = <K extends KeysOfFeedbackForm>(
        key: K,
        value: IFeedbackForm[K]
    ) => {
        this.feedbackForm[key] = value;
    };

    resetForm = () => {
        this.feedbackForm = INITIAL_FEEDBACK_FORM;
        this.feedbackFormErrors = INITIAL_FEEDBACK_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
