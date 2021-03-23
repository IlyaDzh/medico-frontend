import { makeObservable, action, observable } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import { UserApi, ISignInPostData } from "api";
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
            email: this.signInForm.email,
            password: this.signInForm.password
        };

        UserApi.signIn(postData)
            .then(
                action(({ data: { data } }: AxiosResponse<any>) => {
                    localStorage.setItem("accessToken", data.token);
                    this.rootStore.userStore.fetchUser();
                    this.resetForm();
                    this.rootStore.modalsStore.setModalIsOpen("sign-in", true);
                })
            )
            .catch(
                action((error: AxiosError) => {
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
