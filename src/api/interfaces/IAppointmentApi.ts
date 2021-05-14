import { BaseResponse } from "./";
import { IDoctor } from "stores/interfaces/IDoctorStore";
import {
    AvailableTime,
    CommunicationMethod
} from "stores/interfaces/IAppointmentStore";

export interface IAppointmentPostData {
    doctorId: number;
    receptionDate: Date;
    communicationMethodId: number;
    doctorSpecialtyId: number;
    symptoms: string;
}

export interface IGetMetaInfoSuccessResponse extends BaseResponse {
    error: 0;
    data: {
        communicationMethods: CommunicationMethod[];
        doctor: IDoctor;
    };
}

export interface IGetFreeDoctorTimeSuccessResponse extends BaseResponse {
    error: 0;
    data: AvailableTime[] | null;
}

export interface ICreateAppointmentErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
