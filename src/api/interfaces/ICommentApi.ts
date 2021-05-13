import { BaseResponse } from "./";

export interface ISendCommentPostData {
    doctorId: number;
    text: string;
    estimation: number;
}

export interface ISendCommentErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
