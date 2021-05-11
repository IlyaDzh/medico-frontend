import { BaseResponse } from "./";
import { IUser } from "stores/interfaces/IUserStore";

export interface IChangeUserInfoPostData {
    name: string;
    surname: string;
    middleName: string;
    birthDate: Date;
    phone: string;
    sex: "male" | "female";
}

export interface ChangeUserInfoData extends IChangeUserInfoPostData {}

export interface IGetUserSuccessResponse extends BaseResponse {
    error: 0;
    data: IUser;
}

export interface IGetUserErrorResponse extends BaseResponse {
    error: 1;
    data: null;
}

export interface IChangeUserInfoSuccessResponse extends BaseResponse {
    error: 0;
    data: ChangeUserInfoData;
}

export interface IChangeUserInfoErrorResponse extends BaseResponse {
    error: 1;
    data: null | string;
}

export interface IChangeAvatarSuccessResponse extends BaseResponse {
    error: 0;
    data: string;
}

export interface IChangeAvatarErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
