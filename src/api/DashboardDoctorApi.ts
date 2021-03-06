import { axiosInstance } from "./axios-instance";
import {
    IChangeSchedulePostData,
    IUpdateDoctorProfilePostData,
    IAddAppointmentPostData
} from "./interfaces";
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

    static updateProfile(postData: IUpdateDoctorProfilePostData) {
        return axiosInstance.post("/api/v1/doctor/profile/change-info", postData);
    }

    static sendAppointment(postData: IAddAppointmentPostData) {
        return axiosInstance.post("/api/v1/consultation/add-appointment", postData);
    }
}
