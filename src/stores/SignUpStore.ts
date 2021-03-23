import { makeObservable, action, observable } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import { UserApi, ISignUpPostData } from "api";
import {
    ISignUpStore,
    ISignUpForm,
    KeysOfSignUpForm
} from "./interfaces/ISignUpStore";
import IStores from "./interfaces";

const INITIAL_SIGN_UP_FORM: ISignUpForm = {
    userType: "patient",
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: new Date(),
    gender: "male",
    phoneNumber: "",
    email: "",
    password: "",
    acceptedUserAgreement: false
};

export class SignUpStore implements ISignUpStore {
    signUpForm = INITIAL_SIGN_UP_FORM;

    submissionError: string | undefined = undefined;

    pending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            signUpForm: observable,
            submissionError: observable,
            pending: observable,
            doSignUp: action,
            setFormValue: action,
            resetForm: action
        });
    }

    doSignUp = () => {
        this.pending = true;
        this.submissionError = undefined;

        const postData: ISignUpPostData = {
            userType: this.signUpForm.userType,
            name: this.signUpForm.firstName,
            surname: this.signUpForm.lastName,
            middleName: this.signUpForm.middleName,
            birthDate: this.signUpForm.birthDate,
            sex: this.signUpForm.gender,
            phone: this.signUpForm.phoneNumber,
            email: this.signUpForm.email,
            password: this.signUpForm.password,
            acceptedUserAgreement: this.signUpForm.acceptedUserAgreement
        };

        UserApi.signUp(postData)
            .then(
                action(({ data }: AxiosResponse<any>) => {
                    console.log(data);
                    this.resetForm();
                    this.rootStore.modalsStore.setModalIsOpen("email", true);
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

    setFormValue = <K extends KeysOfSignUpForm>(key: K, value: ISignUpForm[K]) => {
        this.signUpForm[key] = value;
    };

    resetForm = () => {
        this.signUpForm = INITIAL_SIGN_UP_FORM;
        this.submissionError = undefined;
    };
}
