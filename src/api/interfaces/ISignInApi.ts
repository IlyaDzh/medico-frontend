import { BaseResponse } from "./";

export interface ISignInPostData {
    email: string;
    password: string;
}

export interface ISignInSuccessResponse extends BaseResponse {
    error: 0;
    data: {
        accessToken: string;
        tokenType: string;
    };
}

export interface ISignInErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
