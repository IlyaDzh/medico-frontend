import { axiosInstance } from "./axios-instance";
import { ICancelConsultationPostData } from "./interfaces";

export class DashboardPatientApi {
    static getConsultations(type: "waiting" | "done") {
        return axiosInstance.get(
            `/api/v1/consultation/doctors-for-patient?consultationState=${type}`
        );
    }

    static cancelConsultation(postData: ICancelConsultationPostData) {
        return axiosInstance.post("/api/v1/consultation/cancel", postData);
    }
}
