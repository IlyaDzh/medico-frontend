import { AxiosResponse, AxiosError } from "axios";
import { makeObservable, observable, action } from "mobx";

import {
    DashboardPatientApi,
    IAppendAnalysisErrorResponse,
    IAppendAnalysisSuccessResponse,
    IGetAnalyzesSuccessResponse
} from "api";
import {
    Analysis,
    AnalysisType,
    IAnalysisForm,
    IAnalysisFormErrors,
    IDashboardAnalyzesStore,
    KeysOfAnalysisForm
} from "stores/interfaces/Dashboard";
import { isNotEmpty } from "utils/validation";
import IStores from "stores/interfaces";

const INITIAL_APPEND_ANALYSIS_FORM: IAnalysisForm = {
    name: "",
    type: "analysis",
    analysisDeliveryDate: new Date(),
    file: null
};

const INITIAL_APPEND_ANALYSIS_FORM_ERRORS: IAnalysisFormErrors = {
    name: undefined,
    file: undefined
};

export class DashboardAnalyzesStore implements IDashboardAnalyzesStore {
    analyzes: Analysis[] = [] as Analysis[];

    analyzesPending: boolean = false;

    appendForm = INITIAL_APPEND_ANALYSIS_FORM;

    appendFormErrors = INITIAL_APPEND_ANALYSIS_FORM_ERRORS;

    appendPending: boolean = false;

    submissionError: string | undefined = undefined;

    deleteAnalysisId: number | null = null;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            analyzes: observable,
            analyzesPending: observable,
            appendForm: observable,
            appendFormErrors: observable,
            appendPending: observable,
            submissionError: observable,
            deleteAnalysisId: observable,
            getAnalyzes: action,
            sortAnalyzesByType: action,
            appendAnalysis: action,
            validateForm: action,
            setFormValue: action,
            resetForm: action
        });
    }

    getAnalyzes = () => {
        this.analyzesPending = true;

        DashboardPatientApi.getAnalyzes()
            .then(
                action(({ data }: AxiosResponse<IGetAnalyzesSuccessResponse>) => {
                    this.analyzes = data.data;
                })
            )
            .catch(
                action(() => {
                    this.analyzes = [];
                })
            )
            .finally(
                action(() => {
                    this.analyzesPending = false;
                })
            );
    };

    sortAnalyzesByType = (type: AnalysisType) => {
        return this.analyzes.filter(analysis => analysis.type === type);
    };

    appendAnalysis = () => {
        this.appendPending = true;
        this.submissionError = undefined;

        const postData = new FormData();
        postData.append("name", this.appendForm.name);
        postData.append("type", this.appendForm.type);
        postData.append(
            "analysisDeliveryDate",
            this.appendForm.analysisDeliveryDate.toISOString()
        );
        postData.append("file", this.appendForm.file as File);

        DashboardPatientApi.appendAnalysis(postData)
            .then(
                action(({ data }: AxiosResponse<IAppendAnalysisSuccessResponse>) => {
                    this.analyzes.push(data.data);
                    this.rootStore.modalsStore.setModalIsOpen("add-analysis", false);
                })
            )
            .catch(
                action((error: AxiosError<IAppendAnalysisErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.analyzesPending = false;
                })
            );
    };

    setDeleteAnalysisId = (id: number) => {
        this.deleteAnalysisId = id;
    };

    deleteAnalysis = () => {
        console.log(`Файл с id ${this.deleteAnalysisId} удалён`);
    };

    validateForm = () => {
        this.appendFormErrors = {
            ...this.appendFormErrors,
            name: isNotEmpty(this.appendForm.name),
            file: isNotEmpty(this.appendForm.file)
        };

        return Boolean(!(this.appendFormErrors.name || this.appendFormErrors.file));
    };

    setFormValue = <K extends KeysOfAnalysisForm>(
        key: K,
        value: IAnalysisForm[K]
    ) => {
        this.appendForm[key] = value;
    };

    resetForm = () => {
        this.appendForm = INITIAL_APPEND_ANALYSIS_FORM;
        this.appendFormErrors = INITIAL_APPEND_ANALYSIS_FORM_ERRORS;
        this.submissionError = undefined;
    };
}
