import { AxiosResponse, AxiosError } from "axios";
import { makeObservable, observable, action } from "mobx";

import {
    DashboardPatientApi,
    IChangeMedicalCardErrorResponse,
    IChangeMedicalCardPostData,
    IChangeMedicalCardSuccessResponse
} from "api";
import {
    IDashboardMedicalCardStore,
    AdditionalTypes,
    IChangeMedicalCardForm,
    IChangeMedicalCardFormErrors,
    KeysOfMedicalCardForm
} from "stores/interfaces/Dashboard";
import IStores from "stores/interfaces";
import { clearEmptyObject } from "utils/clearEmptyObject";

const INITIAL_CHANGE_MEDICAL_CARD_FORM: IChangeMedicalCardForm = {
    weight: undefined,
    height: undefined,
    bloodType: undefined,
    RHFactor: undefined,
    allergies: undefined,
    chronicDiseases: undefined,
    operations: undefined,
    isSmoker: undefined,
    isAlcoholic: undefined,
    badHabits: undefined,
    bloodTransfusion: undefined
};

const INITIAL_CHANGE_MEDICAL_CARD_FORM_ERRORS: IChangeMedicalCardFormErrors = {
    weight: undefined,
    height: undefined,
    bloodType: undefined,
    RHFactor: undefined,
    isSmoker: undefined,
    isAlcoholic: undefined,
    bloodTransfusion: undefined
};

export class DashboardMedicalCardStore implements IDashboardMedicalCardStore {
    changeCardForm = INITIAL_CHANGE_MEDICAL_CARD_FORM;

    changeCardFormErrors = INITIAL_CHANGE_MEDICAL_CARD_FORM_ERRORS;

    currentModalState: AdditionalTypes | null = null;

    pending: boolean = false;

    submissionError: string | undefined = undefined;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            changeCardForm: observable,
            changeCardFormErrors: observable,
            currentModalState: observable,
            pending: observable,
            submissionError: observable,
            changeMedicalCard: action,
            setCurrentModalState: action,
            setFormValue: action,
            resetForm: action
        });
    }

    changeMedicalCard = () => {
        // if (!this.validateForm()) {
        //     return;
        // }

        this.pending = true;
        this.submissionError = undefined;

        const postData: IChangeMedicalCardPostData = {
            weight: Number(this.changeCardForm.weight),
            height: Number(this.changeCardForm.height),
            bloodType: this.changeCardForm.bloodType,
            RHFactor: this.changeCardForm.RHFactor,
            allergies: this.changeCardForm.allergies,
            chronicDiseases: this.changeCardForm.chronicDiseases,
            operations: this.changeCardForm.operations,
            isSmoker: this.changeCardForm.isSmoker,
            isAlcoholic: this.changeCardForm.isAlcoholic,
            badHabits: this.changeCardForm.badHabits,
            bloodTransfusion: this.changeCardForm.bloodTransfusion
        };

        clearEmptyObject(postData);

        DashboardPatientApi.changeMedicalCard(postData)
            .then(
                action(
                    ({ data }: AxiosResponse<IChangeMedicalCardSuccessResponse>) => {
                        if (this.rootStore.userStore.currentUser) {
                            this.rootStore.userStore.currentUser.additionalData = {
                                ...this.rootStore.userStore.currentUser
                                    .additionalData,
                                ...data.data
                            };
                        }
                        this.rootStore.modalsStore.setModalIsOpen(
                            "update-medical-card",
                            false
                        );
                        this.resetForm();
                    }
                )
            )
            .catch(
                action((error: AxiosError<IChangeMedicalCardErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    setCurrentModalState = (state: AdditionalTypes) => {
        this.currentModalState = state;
    };

    setFormValue = <K extends KeysOfMedicalCardForm>(
        key: K,
        value: IChangeMedicalCardForm[K]
    ) => {
        this.changeCardForm[key] = value;
    };

    resetForm = () => {
        this.changeCardForm = INITIAL_CHANGE_MEDICAL_CARD_FORM;
        this.changeCardFormErrors = INITIAL_CHANGE_MEDICAL_CARD_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
