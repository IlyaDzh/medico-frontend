import { axiosInstance } from "./axios-instance";
import {
    IPatientQuestionnairePostData,
    IDoctorQuestionnairePostData
} from "./interfaces/IQuestionnaireApi";

export class QuestionnaireApi {
    static sendPatient(postData: IPatientQuestionnairePostData) {
        return axiosInstance.post("/api/v1/patient/profile/questionnaire", postData);
    }

    static sendDoctor(postData: IDoctorQuestionnairePostData) {
        return axiosInstance.post("/api/v1/doctor/profile/questionnaire", postData);
    }
}
