import { makeObservable, action, observable, reaction } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import {
    QuestionnaireApi,
    IPatientQuestionnairePostData,
    IQuestionnaireSuccessResponse,
    IQuestionnaireErrorResponse
} from "api";
import {
    IQuestionnaireStore,
    IQuestionnaireForm,
    IQuestionnaireFormErrors,
    KeysOfQuestionnaireForm,
    KeysOfFile
} from "./interfaces/IQuestionnaireStore";
import { isNumber, isNotEmpty } from "utils/validation";
import IStores from "./interfaces";

const INITIAL_QUESTIONNAIRE_FORM: IQuestionnaireForm = {
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
    bloodTransfusion: "",
    IIN: "",
    experienceNumber: "",
    experienceType: "month",
    photo: null,
    summary: null,
    diploma: null
};

const INITIAL_QUESTIONNAIRE_FORM_ERRORS: IQuestionnaireFormErrors = {
    weight: undefined,
    height: undefined,
    bloodType: undefined,
    RHFactor: undefined,
    isSmoker: undefined,
    isAlcoholic: undefined,
    bloodTransfusion: undefined,
    IIN: undefined,
    experienceNumber: undefined,
    photo: undefined,
    summary: undefined,
    diploma: undefined
};

export class QuestionnaireStore implements IQuestionnaireStore {
    questionnaireForm = INITIAL_QUESTIONNAIRE_FORM;

    questionnaireFormErrors = INITIAL_QUESTIONNAIRE_FORM_ERRORS;

    submissionError: string | undefined = undefined;

    pending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            questionnaireForm: observable,
            questionnaireFormErrors: observable,
            submissionError: observable,
            pending: observable,
            sendPatientForm: action,
            sendDoctorForm: action,
            validatePatientForm: action,
            validateDoctorForm: action,
            setFormValue: action,
            setFile: action,
            resetForm: action
        });

        reaction(
            () => this.questionnaireForm.weight,
            weight =>
                weight && (this.questionnaireFormErrors.weight = isNumber(weight))
        );

        reaction(
            () => this.questionnaireForm.height,
            height =>
                height && (this.questionnaireFormErrors.height = isNumber(height))
        );

        reaction(
            () => this.questionnaireForm.bloodType,
            bloodType =>
                bloodType &&
                (this.questionnaireFormErrors.bloodType = isNotEmpty(bloodType))
        );

        reaction(
            () => this.questionnaireForm.RHFactor,
            RHFactor =>
                RHFactor &&
                (this.questionnaireFormErrors.RHFactor = isNotEmpty(RHFactor))
        );

        reaction(
            () => this.questionnaireForm.isSmoker,
            isSmoker =>
                isSmoker &&
                (this.questionnaireFormErrors.isSmoker = isNotEmpty(isSmoker))
        );

        reaction(
            () => this.questionnaireForm.isAlcoholic,
            isAlcoholic =>
                isAlcoholic &&
                (this.questionnaireFormErrors.isAlcoholic = isNotEmpty(isAlcoholic))
        );

        reaction(
            () => this.questionnaireForm.bloodTransfusion,
            bloodTransfusion =>
                bloodTransfusion &&
                (this.questionnaireFormErrors.bloodTransfusion = isNotEmpty(
                    bloodTransfusion
                ))
        );

        reaction(
            () => this.questionnaireForm.IIN,
            IIN => IIN && (this.questionnaireFormErrors.IIN = isNotEmpty(IIN))
        );

        reaction(
            () => this.questionnaireForm.experienceNumber,
            experienceNumber =>
                experienceNumber &&
                (this.questionnaireFormErrors.experienceNumber = isNotEmpty(
                    experienceNumber
                ))
        );
    }

    sendPatientForm = () => {
        if (!this.validatePatientForm()) {
            return;
        }

        this.pending = true;
        this.submissionError = undefined;

        const postData: IPatientQuestionnairePostData = {
            weight: Number(this.questionnaireForm.weight),
            height: Number(this.questionnaireForm.height),
            bloodType: this.questionnaireForm.bloodType,
            RHFactor: this.questionnaireForm.RHFactor,
            allergies: this.questionnaireForm.allergies,
            chronicDiseases: this.questionnaireForm.chronicDiseases,
            operations: this.questionnaireForm.operations,
            isSmoker: this.questionnaireForm.isSmoker,
            isAlcoholic: this.questionnaireForm.isAlcoholic,
            badHabits: this.questionnaireForm.badHabits,
            bloodTransfusion: this.questionnaireForm.bloodTransfusion
        };

        QuestionnaireApi.sendPatient(postData)
            .then(
                action(({ data }: AxiosResponse<IQuestionnaireSuccessResponse>) => {
                    console.log(data);
                    this.rootStore.userStore.currentUser!.additionalData = data.data;
                    this.resetForm();
                })
            )
            .catch(
                action((error: AxiosError<IQuestionnaireErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    sendDoctorForm = () => {
        if (!this.validateDoctorForm()) {
            return;
        }

        this.pending = true;
        this.submissionError = undefined;

        const postData = new FormData();
        postData.append("IIN", this.questionnaireForm.IIN);
        postData.append("experience", this.questionnaireForm.experienceNumber);
        postData.append("photo", this.questionnaireForm.photo as File);
        postData.append("diploma", this.questionnaireForm.diploma as File);
        postData.append("summary", this.questionnaireForm.summary as File);

        console.log(this.questionnaireForm);

        QuestionnaireApi.sendDoctor(postData)
            .then(
                action(({ data }: AxiosResponse<IQuestionnaireSuccessResponse>) => {
                    console.log(data);
                    this.rootStore.userStore.currentUser!.additionalData = data.data;
                    this.resetForm();
                })
            )
            .catch(
                action((error: AxiosError<IQuestionnaireErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    validatePatientForm = () => {
        this.questionnaireFormErrors = {
            ...this.questionnaireFormErrors,
            weight: isNumber(this.questionnaireForm.weight),
            height: isNumber(this.questionnaireForm.height),
            bloodType: isNotEmpty(this.questionnaireForm.bloodType),
            RHFactor: isNotEmpty(this.questionnaireForm.RHFactor),
            isSmoker: isNotEmpty(this.questionnaireForm.isSmoker),
            isAlcoholic: isNotEmpty(this.questionnaireForm.isAlcoholic),
            bloodTransfusion: isNotEmpty(this.questionnaireForm.bloodTransfusion)
        };

        return Boolean(
            !(
                this.questionnaireFormErrors.weight ||
                this.questionnaireFormErrors.height ||
                this.questionnaireFormErrors.bloodType ||
                this.questionnaireFormErrors.RHFactor ||
                this.questionnaireFormErrors.isSmoker ||
                this.questionnaireFormErrors.isAlcoholic ||
                this.questionnaireFormErrors.bloodTransfusion
            )
        );
    };

    validateDoctorForm = () => {
        this.questionnaireFormErrors = {
            ...this.questionnaireFormErrors,
            IIN: isNotEmpty(this.questionnaireForm.experienceNumber),
            experienceNumber: isNotEmpty(this.questionnaireForm.experienceNumber)
        };

        return Boolean(
            !(
                this.questionnaireFormErrors.IIN ||
                this.questionnaireFormErrors.experienceNumber
            )
        );
    };

    setFormValue = <K extends KeysOfQuestionnaireForm>(
        key: K,
        value: IQuestionnaireForm[K]
    ) => {
        this.questionnaireForm[key] = value;
    };

    setFile = (property: KeysOfFile, file: File) => {
        this.questionnaireForm[property] = file;
    };

    resetForm = () => {
        this.questionnaireForm = INITIAL_QUESTIONNAIRE_FORM;
        this.questionnaireFormErrors = INITIAL_QUESTIONNAIRE_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
