import { makeObservable, action, observable } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import {
    SignInApi,
    ISignInPostData,
    ISignInSuccessResponse,
    ISignInErrorResponse
} from "api";
import {
    ISignInStore,
    ISignInForm,
    KeysOfSignInForm
} from "./interfaces/ISignInStore";
import IStores from "./interfaces";

const INITIAL_SIGN_IN_FORM: ISignInForm = {
    email: "",
    password: ""
};

export class SignInStore implements ISignInStore {
    signInForm = INITIAL_SIGN_IN_FORM;

    submissionError: string | undefined = undefined;

    pending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            signInForm: observable,
            submissionError: observable,
            pending: observable,
            doSignIn: action,
            setFormValue: action,
            resetForm: action
        });
    }

    doSignIn = () => {
        this.pending = true;
        this.submissionError = undefined;

        const postData: ISignInPostData = {
            email: this.signInForm.email.toLowerCase(),
            password: this.signInForm.password.trim()
        };

        SignInApi.signIn(postData)
            .then(
                action(({ data }: AxiosResponse<ISignInSuccessResponse>) => {
                    localStorage.setItem("accessToken", data.data.accessToken);
                    this.rootStore.userStore.fetchUser();
                    this.resetForm();
                    this.rootStore.modalsStore.setModalIsOpen("sign-in", false);
                })
            )
            .catch(
                action((error: AxiosError<ISignInErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    setFormValue = <K extends KeysOfSignInForm>(key: K, value: ISignInForm[K]) => {
        this.signInForm[key] = value;
    };

    resetForm = () => {
        this.signInForm = INITIAL_SIGN_IN_FORM;
        this.submissionError = undefined;
    };
}
