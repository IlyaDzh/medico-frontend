import { makeAutoObservable, action, reaction } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import { QuestionnaireApi, IQuestionnairePostData } from "api";
import {
    IQuestionnaireStore,
    IQuestionnaireForm,
    IQuestionnaireFormErrors,
    KeysOfQuestionnaireForm
} from "./interfaces/IQuestionnaireStore";
import { isNumber, isNotEmpty } from "utils/validation";

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
    bloodTransfusion: ""
};

const INITIAL_QUESTIONNAIRE_FORM_ERRORS: IQuestionnaireFormErrors = {
    weight: undefined,
    height: undefined,
    bloodType: undefined,
    RHFactor: undefined,
    isSmoker: undefined,
    isAlcoholic: undefined,
    bloodTransfusion: undefined
};

export class QuestionnaireStore implements IQuestionnaireStore {
    questionnaireForm = INITIAL_QUESTIONNAIRE_FORM;

    questionnaireFormErrors = INITIAL_QUESTIONNAIRE_FORM_ERRORS;

    submissionError: string | undefined = undefined;

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);

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
    }

    sendForm = () => {
        if (!this.validateForm()) {
            return;
        }

        this.pending = true;
        this.submissionError = undefined;

        const postData: IQuestionnairePostData = {
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

        console.log(postData);

        QuestionnaireApi.send(postData)
            .then(
                action(({ data }: AxiosResponse<any>) => {
                    console.log(data);
                    this.resetForm();
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

    validateForm = () => {
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

        const {
            weight,
            height,
            bloodType,
            RHFactor,
            isSmoker,
            isAlcoholic,
            bloodTransfusion
        } = this.questionnaireFormErrors;

        return Boolean(
            !(
                weight ||
                height ||
                bloodType ||
                RHFactor ||
                isSmoker ||
                isAlcoholic ||
                bloodTransfusion
            )
        );
    };

    setFormValue = <K extends KeysOfQuestionnaireForm>(
        key: K,
        value: IQuestionnaireForm[K]
    ) => {
        this.questionnaireForm[key] = value;
    };

    resetForm = () => {
        this.questionnaireForm = INITIAL_QUESTIONNAIRE_FORM;
        this.questionnaireFormErrors = INITIAL_QUESTIONNAIRE_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
