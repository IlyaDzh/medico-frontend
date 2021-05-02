import { BaseResponse } from "./";
import { Consultation } from "stores/interfaces/Dashboard";

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

export interface ICancelConsultationPostData {
    consultationId: number;
}