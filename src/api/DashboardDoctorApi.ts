import { axiosInstance } from "./axios-instance";
import { IChangeSchedulePostData } from "./interfaces";
import { GetPatientsType } from "stores/interfaces/Dashboard";

export class DashboardDoctorApi {
    static getSchedule() {
        return axiosInstance.get("/api/v1/doctor/profile/schedule");
    }

    static changeSchedule(postData: IChangeSchedulePostData) {
        return axiosInstance.post(
            "/api/v1/doctor/profile/change-schedule",
            postData
        );
    }

    static getPatients(date: string, state: GetPatientsType) {
        return axiosInstance.get(
            `/api/v1/consultation/patients-for-doctor?date=${date}&state=${state}`
        );
    }

    static getConsultationInfo(patientId: number, consultationId: number) {
        return axiosInstance.get(
            `/api/v1/patient/consultation-info?patientId=${patientId}&consultationId=${consultationId}`
        );
    }
}
