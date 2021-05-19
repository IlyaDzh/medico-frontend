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
    KeysOfMedicalCardForm
} from "stores/interfaces/Dashboard";
import IStores from "stores/interfaces";
import { clearEmptyObject } from "utils/clearEmptyObject";
import { AdditionalData } from "stores/interfaces/IUserStore";

const INITIAL_CHANGE_MEDICAL_CARD_FORM: IChangeMedicalCardForm = {
    weight: "",
    height: "",
    bloodType: "",
    RHFactor: "",
    allergies: "",
    chronicDiseases: "",
    operations: "",
    isSmoker: "",
    isAlcoholic: "",
    badHabits: "",
    bloodTransfusion: ""
};

export class DashboardMedicalCardStore implements IDashboardMedicalCardStore {
    changeCardForm = INITIAL_CHANGE_MEDICAL_CARD_FORM;

    currentModalState: AdditionalTypes | null = null;

    pending: boolean = false;

    submissionError: string | undefined = undefined;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            changeCardForm: observable,
            currentModalState: observable,
            pending: observable,
            submissionError: observable,
            changeMedicalCard: action,
            setCurrentModalState: action,
            setFormValue: action,
            setChangeCardForm: action,
            resetForm: action
        });
    }

    changeMedicalCard = () => {
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
                        this.setChangeCardForm(data.data);
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

    setChangeCardForm = (data: AdditionalData) => {
        this.changeCardForm = {
            RHFactor: data.RHFactor,
            allergies: data.allergies,
            badHabits: data.badHabits,
            bloodTransfusion: data.bloodTransfusion,
            bloodType: data.bloodType,
            chronicDiseases: data.chronicDiseases,
            isAlcoholic: data.isAlcoholic,
            isSmoker: data.isSmoker,
            operations: data.operations,
            height: data.height.toString(),
            weight: data.weight.toString()
        };
    };

    resetForm = () => {
        this.submissionError = undefined;
    };
}
