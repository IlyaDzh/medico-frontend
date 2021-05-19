import { BaseResponse } from "./";
import { Dialog, Message } from "stores/interfaces/IChatStore";

export interface IGetDialogsSuccessResponse extends BaseResponse {
    error: 0;
    data: Dialog[];
}

export interface IGetMessagesSuccessResponse extends BaseResponse {
    error: 0;
    data: Message[];
}
