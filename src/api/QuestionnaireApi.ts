import { axiosInstance } from "./axios-instance";
import { IPatientQuestionnairePostData } from "./interfaces/IQuestionnaireApi";

export class QuestionnaireApi {
    static sendPatient(postData: IPatientQuestionnairePostData) {
        return axiosInstance.post("/api/v1/patient/profile/questionnaire", postData);
    }

    static sendDoctor(postData: FormData) {
        return axiosInstance.post("/api/v1/doctor/profile/questionnaire", postData);
    }
}
