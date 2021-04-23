import { BaseResponse } from "./";

export interface IAppointmentPostData {
    doctorId: number;
    receptionDate: Date;
    communicationMethodId: number;
    symptoms: string;
}

export interface ICreateAppointmentErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
