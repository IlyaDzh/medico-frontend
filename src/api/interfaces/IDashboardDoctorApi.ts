import { BaseResponse } from "./";
import {
    ScheduleItem,
    PatientItem,
    PatientProfile,
    CurrentConsultation,
    AppointmentResult
} from "stores/interfaces/Dashboard";

export interface IChangeSchedulePostData {
    schedule: ScheduleItem[];
}

export interface IGetScheduleSuccessResponse extends BaseResponse {
    error: 0;
    data: ScheduleItem[];
}

export interface IChangeScheduleSuccessResponse extends BaseResponse {
    error: 0;
    data: ScheduleItem[];
}

export interface IChangeScheduleErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}

export interface IGetPatientsSuccessResponse extends BaseResponse {
    error: 0;
    data: PatientItem[];
}

export interface IConsultationInfoSuccessResponse extends BaseResponse {
    error: 0;
    data: {
        patient: PatientProfile;
        currentConsultation: CurrentConsultation;
        history: AppointmentResult[];
    };
}

export interface IConsultationInfoErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
