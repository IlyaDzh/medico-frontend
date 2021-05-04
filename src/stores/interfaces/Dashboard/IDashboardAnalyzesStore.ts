export interface IDashboardAnalyzesStore {
    analyzes: Analysis[];
    analyzesPending: boolean;
    appendForm: IAnalysisForm;
    appendFormErrors: IAnalysisFormErrors;
    appendPending: boolean;
    submissionError: string | undefined;
    deleteAnalysisId: number | null;
    getAnalyzes: () => void;
    sortAnalyzesByType: (type: AnalysisType) => Analysis[];
    appendAnalysis: () => void;
    setDeleteAnalysisId: (id: number) => void;
    deleteAnalysis: () => void;
    validateForm: () => boolean;
    setFormValue: <K extends KeysOfAnalysisForm>(
        key: K,
        value: IAnalysisForm[K]
    ) => void;
    resetForm: () => void;
}

export interface Analysis {
    id: number;
    name: string;
    type: AnalysisType;
    path: string;
    analysisDeliveryDate: Date;
}

export interface IAnalysisForm {
    name: string;
    type: AnalysisType;
    analysisDeliveryDate: Date;
    file: File | null;
}

export interface IAnalysisFormErrors {
    name: undefined | string;
    file: undefined | string;
}

export type AnalysisType = "analysis" | "snapshot";

export type KeysOfAnalysisForm = keyof IAnalysisForm;
