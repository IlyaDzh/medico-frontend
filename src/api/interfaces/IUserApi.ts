import { BaseResponse } from "./";
import { IUser } from "stores/interfaces/IUserStore";

export interface IGetUserSuccessResponse extends BaseResponse {
    error: 0;
    data: IUser;
}

export interface IGetUserErrorResponse extends BaseResponse {
    error: 1;
    data: null;
}
