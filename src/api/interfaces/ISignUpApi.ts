import { BaseResponse } from "./";

export interface ISignUpPostData {
    userType: string;
    name: string;
    surname: string;
    middleName: string;
    birthDate: string;
    sex: string;
    phone: string;
    email: string;
    password: string;
    acceptedUserAgreement: boolean;
}

export interface ISendMailPostData {
    email: string;
}

export interface ISignUpSuccessResponse extends BaseResponse {
    error: 0;
    data: null;
}

export interface ISignUpErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
