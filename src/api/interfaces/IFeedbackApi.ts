import { BaseResponse } from "./";

export interface IFeedbackPostData {
    name: string;
    email: string;
    subject: string;
    text: string;
}

export interface IFeedbackSuccessResponse extends BaseResponse {
    error: 0;
    data: null;
}

export interface IFeedbackErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
