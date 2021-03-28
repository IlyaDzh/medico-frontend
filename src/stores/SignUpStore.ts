import { makeObservable, action, observable, reaction } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import {
    SignUpApi,
    ISignUpPostData,
    ISignUpSuccessResponse,
    ISignUpErrorResponse
} from "api";
import {
    ISignUpStore,
    ISignUpForm,
    ISignUpFormErrors,
    KeysOfSignUpForm
} from "./interfaces/ISignUpStore";
import IStores from "./interfaces";
import {
    isOnlyLetters,
    isAdult,
    isPhoneNumber,
    isEmail,
    isPassword
} from "utils/validation";

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

const INITIAL_SIGN_UP_FORM_ERRORS: ISignUpFormErrors = {
    firstName: undefined,
    lastName: undefined,
    birthDate: undefined,
    phoneNumber: undefined,
    email: undefined,
    password: {
        isLength: false,
        isUppercase: false,
        isLowercase: false,
        isNumber: false
    }
};

export class SignUpStore implements ISignUpStore {
    signUpForm = INITIAL_SIGN_UP_FORM;

    signUpFormErrors = INITIAL_SIGN_UP_FORM_ERRORS;

    submissionError: string | undefined = undefined;

    pending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            signUpForm: observable,
            signUpFormErrors: observable,
            submissionError: observable,
            pending: observable,
            doSignUp: action,
            setFormValue: action,
            validateForm: action,
            resetForm: action
        });

        reaction(
            () => this.signUpForm.lastName,
            lastName => (this.signUpFormErrors.lastName = isOnlyLetters(lastName))
        );

        reaction(
            () => this.signUpForm.firstName,
            firstName => (this.signUpFormErrors.firstName = isOnlyLetters(firstName))
        );

        reaction(
            () => this.signUpForm.birthDate,
            birthDate => (this.signUpFormErrors.birthDate = isAdult(birthDate))
        );

        reaction(
            () => this.signUpForm.phoneNumber,
            phoneNumber =>
                (this.signUpFormErrors.phoneNumber = isPhoneNumber(phoneNumber))
        );

        reaction(
            () => this.signUpForm.email,
            email => (this.signUpFormErrors.email = isEmail(email))
        );

        reaction(
            () => this.signUpForm.password,
            password => (this.signUpFormErrors.password = isPassword(password))
        );
    }

    doSignUp = () => {
        if (!this.validateForm()) {
            return;
        }

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

        SignUpApi.signUp(postData)
            .then(
                action(({ data }: AxiosResponse<ISignUpSuccessResponse>) => {
                    console.log(data);
                    this.resetForm();
                    this.rootStore.modalsStore.setModalIsOpen("email", true);
                })
            )
            .catch(
                action((error: AxiosError<ISignUpErrorResponse>) => {
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
        this.signUpFormErrors = {
            ...this.signUpFormErrors,
            firstName: isOnlyLetters(this.signUpForm.firstName),
            lastName: isOnlyLetters(this.signUpForm.lastName),
            birthDate: isAdult(this.signUpForm.birthDate),
            phoneNumber: isPhoneNumber(this.signUpForm.phoneNumber),
            email: isEmail(this.signUpForm.email),
            password: isPassword(this.signUpForm.password)
        };

        return Boolean(
            !(
                this.signUpFormErrors.firstName ||
                this.signUpFormErrors.lastName ||
                this.signUpFormErrors.birthDate ||
                this.signUpFormErrors.phoneNumber ||
                this.signUpFormErrors.email ||
                !this.signUpFormErrors.password.isLength ||
                !this.signUpFormErrors.password.isUppercase ||
                !this.signUpFormErrors.password.isLowercase ||
                !this.signUpFormErrors.password.isNumber
            )
        );
    };

    setFormValue = <K extends KeysOfSignUpForm>(key: K, value: ISignUpForm[K]) => {
        this.signUpForm[key] = value;
    };

    resetForm = () => {
        this.signUpForm = INITIAL_SIGN_UP_FORM;
        this.signUpFormErrors = INITIAL_SIGN_UP_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
