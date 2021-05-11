import { AxiosError, AxiosResponse } from "axios";
import { makeObservable, action, observable, reaction } from "mobx";

import {
    IChangeAvatarErrorResponse,
    IChangeAvatarSuccessResponse,
    IChangeUserInfoErrorResponse,
    IChangeUserInfoPostData,
    IChangeUserInfoSuccessResponse,
    UserApi
} from "api";
import {
    IDashboardSettingsStore,
    IUpdateInfoForm,
    IUpdateInfoFormErrors,
    KeysOfUpdateInfoForm
} from "stores/interfaces/Dashboard";
import { IUser } from "stores/interfaces/IUserStore";
import IStores from "stores/interfaces";
import { isAdult, isOnlyLetters, isPhoneNumber } from "utils/validation";

const INITIAL_UPDATE_INFO_FORM: IUpdateInfoForm = {
    surname: "",
    name: "",
    middleName: "",
    birthDate: new Date(),
    phone: "",
    sex: "male"
};

const INITIAL_UPDATE_INFO_FORM_ERRORS: IUpdateInfoFormErrors = {
    surname: undefined,
    name: undefined,
    birthDate: undefined,
    phone: undefined
};

export class DashboardSettingsStore implements IDashboardSettingsStore {
    updateForm = INITIAL_UPDATE_INFO_FORM;

    updateFormErrors = INITIAL_UPDATE_INFO_FORM_ERRORS;

    pending: boolean = false;

    submissionError: string | undefined = undefined;

    avatarPending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            updateForm: observable,
            updateFormErrors: observable,
            pending: observable,
            avatarPending: observable,
            submissionError: observable,
            updateUserInfo: action,
            setUpdateInfoForm: action,
            setFormValue: action,
            setAvatar: action,
            validateForm: action
        });

        reaction(
            () => this.updateForm.surname,
            surname =>
                surname && (this.updateFormErrors.surname = isOnlyLetters(surname))
        );

        reaction(
            () => this.updateForm.name,
            name => name && (this.updateFormErrors.name = isOnlyLetters(name))
        );

        reaction(
            () => this.updateForm.birthDate,
            birthDate =>
                birthDate.toLocaleDateString() !== new Date().toLocaleDateString() &&
                (this.updateFormErrors.birthDate = isAdult(birthDate))
        );

        reaction(
            () => this.updateForm.phone,
            phone => phone && (this.updateFormErrors.phone = isPhoneNumber(phone))
        );
    }

    updateUserInfo = () => {
        if (!this.validateForm()) {
            return;
        }

        this.pending = true;

        const postData: IChangeUserInfoPostData = {
            surname: this.updateForm.surname,
            name: this.updateForm.name,
            middleName: this.updateForm.middleName,
            birthDate: this.updateForm.birthDate,
            phone: this.updateForm.phone,
            sex: this.updateForm.sex
        };

        UserApi.changeUserInfo(postData)
            .then(
                action(({ data }: AxiosResponse<IChangeUserInfoSuccessResponse>) => {
                    if (this.rootStore.userStore.currentUser) {
                        this.rootStore.userStore.currentUser = {
                            ...this.rootStore.userStore.currentUser,
                            surname: data.data.surname,
                            name: data.data.name,
                            middleName: data.data.middleName,
                            birthDate: data.data.birthDate,
                            phone: data.data.phone,
                            sex: data.data.sex
                        };
                    }
                })
            )
            .catch(
                action((error: AxiosError<IChangeUserInfoErrorResponse>) => {
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
        this.updateFormErrors = {
            ...this.updateFormErrors,
            name: isOnlyLetters(this.updateForm.name),
            surname: isOnlyLetters(this.updateForm.surname),
            birthDate: isAdult(this.updateForm.birthDate),
            phone: isPhoneNumber(this.updateForm.phone)
        };

        return Boolean(
            !(
                this.updateFormErrors.name ||
                this.updateFormErrors.surname ||
                this.updateFormErrors.birthDate ||
                this.updateFormErrors.phone
            )
        );
    };

    setUpdateInfoForm = (data: IUser) => {
        this.updateForm = {
            surname: data.surname,
            name: data.name,
            middleName: data.middleName,
            birthDate: data.birthDate,
            phone: data.phone,
            sex: data.sex
        };
    };

    setFormValue = <K extends KeysOfUpdateInfoForm>(
        key: K,
        value: IUpdateInfoForm[K]
    ) => {
        this.updateForm[key] = value;
    };

    setAvatar = (avatar: File) => {
        this.avatarPending = true;

        const formData = new FormData();
        formData.append("file", avatar as any);

        UserApi.changeAvatar(formData)
            .then(
                action(({ data }: AxiosResponse<IChangeAvatarSuccessResponse>) => {
                    this.avatarPending = false;

                    const currentUser = this.rootStore.userStore.currentUser;

                    if (currentUser && currentUser.additionalData) {
                        if (currentUser.userType === "patient") {
                            currentUser.additionalData.avatar = data.data;
                        } else {
                            currentUser.additionalData.photo = data.data;
                        }
                    }
                })
            )
            .catch(
                action((error: AxiosError<IChangeAvatarErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            );
    };

    resetForm = () => {
        this.updateFormErrors = INITIAL_UPDATE_INFO_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
