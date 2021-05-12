import { axiosInstance } from "./axios-instance";
import { IChangeSchedulePostData } from "./interfaces";

export class DashboardDoctorApi {
    static getSchedule() {
        return axiosInstance.get("/api/v1/doctor/profile/schedule");
    }

    static changeSchedule(postData: IChangeSchedulePostData) {
        return axiosInstance.post("/api/v1/doctor/profile/change-schedule", postData);
    }
}
