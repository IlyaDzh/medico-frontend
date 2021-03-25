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
    allergies: undefined,
    chronicDiseases: undefined,
    operations: undefined,
    isSmoker: undefined,
    isAlcoholic: undefined,
    badHabits: undefined,
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
            () => this.questionnaireForm.allergies,
            allergies =>
                allergies &&
                (this.questionnaireFormErrors.allergies = isNotEmpty(allergies))
        );

        reaction(
            () => this.questionnaireForm.chronicDiseases,
            chronicDiseases =>
                chronicDiseases &&
                (this.questionnaireFormErrors.chronicDiseases = isNotEmpty(
                    chronicDiseases
                ))
        );

        reaction(
            () => this.questionnaireForm.operations,
            operations =>
                operations &&
                (this.questionnaireFormErrors.operations = isNotEmpty(operations))
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
            () => this.questionnaireForm.badHabits,
            badHabits =>
                badHabits &&
                (this.questionnaireFormErrors.badHabits = isNotEmpty(badHabits))
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
            allergies: isNotEmpty(this.questionnaireForm.allergies),
            chronicDiseases: isNotEmpty(this.questionnaireForm.chronicDiseases),
            operations: isNotEmpty(this.questionnaireForm.operations),
            isSmoker: isNotEmpty(this.questionnaireForm.isSmoker),
            isAlcoholic: isNotEmpty(this.questionnaireForm.isAlcoholic),
            badHabits: isNotEmpty(this.questionnaireForm.badHabits),
            bloodTransfusion: isNotEmpty(this.questionnaireForm.bloodTransfusion)
        };

        const { weight, height } = this.questionnaireFormErrors;

        return Boolean(!(weight || height));
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
