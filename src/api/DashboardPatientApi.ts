import { axiosInstance } from "./axios-instance";
import {
    ICancelConsultationPostData,
    IChangeMedicalCardPostData,
    IDeleteAnalysisPostData
} from "./interfaces";

export class DashboardPatientApi {
    static getConsultations(type: "waiting" | "done" | "active") {
        return axiosInstance.get(
            `/api/v1/consultation/doctors-for-patient?consultationState=${type}`
        );
    }

    static cancelConsultation(postData: ICancelConsultationPostData) {
        return axiosInstance.post("/api/v1/consultation/cancel", postData);
    }

    static getAnalyzes() {
        return axiosInstance.get("/api/v1/patient/analysis/all");
    }

    static appendAnalysis(postData: FormData) {
        return axiosInstance.post("/api/v1/patient/analysis/append", postData);
    }

    static deleteAnalysis(postData: IDeleteAnalysisPostData) {
        return axiosInstance.post("/api/v1/patient/analysis/delete", postData);
    }

    static getAppointmentResults() {
        return axiosInstance.get("/api/v1/consultation/appointments");
    }

    static changeMedicalCard(postData: IChangeMedicalCardPostData) {
        return axiosInstance.post(
            "/api/v1/patient/profile/change-medical-card",
            postData
        );
    }
}
