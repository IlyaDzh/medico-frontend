import { BaseResponse } from "./";
import { IDoctor, IPagination, Review } from "stores/interfaces/IDoctorStore";
import { HomeDoctor } from "stores/interfaces/IHomeStore";

export interface IGetDoctorsSuccessResponse extends BaseResponse {
    error: 0;
    data: {
        items: IDoctor[];
        meta: IPagination;
    };
}

export interface IGetDoctorsErrorResponse extends BaseResponse {
    error: 1;
    data: {
        meta: IPagination;
    };
}

export interface IGetDoctorSuccessResponse extends BaseResponse {
    error: 0;
    data: IDoctor;
}

export interface IGetMostExperienceDoctorSuccessResponse extends BaseResponse {
    error: 0;
    data: HomeDoctor[];
}

export interface IGetReviewsSuccessResponse extends BaseResponse {
    error: 0;
    data: Review[];
}
