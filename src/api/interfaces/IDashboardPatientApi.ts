import { BaseResponse } from "./";
import { Analysis, Consultation } from "stores/interfaces/Dashboard";

export interface ICancelConsultationPostData {
    consultationId: number;
}

export interface IDeleteAnalysisPostData {
    analysisId: number;
}

export interface IGetConsultationsSuccessResponse extends BaseResponse {
    error: 0;
    data: Consultation[];
}

export interface ICancelConsultationSuccessResponse extends BaseResponse {
    error: 0;
    data: null;
}

export interface ICancelConsultationErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}

export interface IGetAnalyzesSuccessResponse extends BaseResponse {
    error: 1;
    data: Analysis[];
}

export interface IAppendAnalysisSuccessResponse extends BaseResponse {
    error: 1;
    data: Analysis;
}

export interface IAppendAnalysisErrorResponse extends BaseResponse {
    error: 1;
    data: null;
}
