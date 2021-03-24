import { axiosInstance } from "./axios-instance";

export interface IQuestionnairePostData {
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

export class QuestionnaireApi {
    static send(postData: IQuestionnairePostData) {
        return axiosInstance.post("/api/v1/auth/sign-in", postData);
    }
}
