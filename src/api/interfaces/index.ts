export * from "./ISignUpApi";
export * from "./ISignInApi";
export * from "./IUserApi";
export * from "./IQuestionnaireApi";

export interface BaseResponse {
    data?: any;
    error: 1 | 0;
    message: string;
}
