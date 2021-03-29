import { BaseResponse } from "./";

export interface IPatientQuestionnairePostData {
    weight: number;
    height: number;
    bloodType: string;
    RHFactor: string;
    allergies: string;
    chronicDiseases: string;
    operations: string;
    isSmoker: string;
    isAlcoholic: string;
    badHabits: string;
    bloodTransfusion: string;
}

export interface IDoctorQuestionnairePostData {
    IIN: string;
    experience: Date;
    photo: File;
    summary: File;
    diploma: File;
    specialties: number[];
}

export interface IQuestionnaireSuccessResponse extends BaseResponse {
    error: 0;
    data: null;
}

export interface IQuestionnaireErrorResponse extends BaseResponse {
    error: 1;
    data: null | string[];
}
