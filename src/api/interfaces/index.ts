export * from "./ISignUpApi";
export * from "./ISignInApi";
export * from "./IUserApi";
export * from "./IQuestionnaireApi";
export * from "./ISpecialtiesApi";
export * from "./IDoctorApi";
export * from "./IAppointmentApi";

export interface BaseResponse {
    data?: any;
    error: 1 | 0;
    message: string;
}
