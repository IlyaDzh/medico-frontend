import { BaseResponse } from "./";
import { IDoctor, IPagination } from "stores/interfaces/IDoctorStore";

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
