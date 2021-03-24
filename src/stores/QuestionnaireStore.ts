import { makeAutoObservable, action } from "mobx";
import { AxiosError, AxiosResponse } from "axios";

import { QuestionnaireApi, IQuestionnairePostData } from "api";
import {
    IQuestionnaireStore,
    IQuestionnaireForm,
    IQuestionnaireFormErrors,
    KeysOfQuestionnaireForm
} from "./interfaces/IQuestionnaireStore";

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
    }

    sendForm = () => {
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

        console.log(postData)

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
