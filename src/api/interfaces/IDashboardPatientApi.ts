import { BaseResponse } from "./";
import {
    Analysis,
    Consultation,
    AppointmentResult
} from "stores/interfaces/Dashboard";
import { AdditionalData } from "stores/interfaces/IUserStore";

export interface ICancelConsultationPostData {
    consultationId: number;
}

export interface IDeleteAnalysisPostData {
    analysisId: number;
}

export interface IChangeMedicalCardPostData {
    weight?: number;
    height?: number;
    bloodType?: string;
    RHFactor?: string;
    allergies?: string;
    chronicDiseases?: string;
    operations?: string;
    isSmoker?: string;
    isAlcoholic?: string;
    badHabits?: string;
    bloodTransfusion?: string;
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
    error: 0;
    data: Analysis[];
}

export interface IAppendAnalysisSuccessResponse extends BaseResponse {
    error: 0;
    data: Analysis;
}

export interface IAppendAnalysisErrorResponse extends BaseResponse {
    error: 1;
    data: null;
}

export interface IGetAppointmentResultsSuccessResponse extends BaseResponse {
    error: 0;
    data: AppointmentResult[];
}

export interface IChangeMedicalCardSuccessResponse extends BaseResponse {
    error: 0;
    data: AdditionalData;
}

export interface IChangeMedicalCardErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}