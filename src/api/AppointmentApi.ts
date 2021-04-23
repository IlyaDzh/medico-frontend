import { axiosInstance } from "./axios-instance";
import { IAppointmentPostData } from "./interfaces/IAppointmentApi";

export class AppointmentApi {
    static getMetaInfo(doctorId: number) {
        return axiosInstance.get(
            `/api/v1/consultation/appointment/meta-info?doctorId=${doctorId}`
        );
    }

    static getFreeDoctorTime(doctorId: number, date: string) {
        return axiosInstance.get(
            `/api/v1/consultation/appointment/free-doctor-time?doctorId=${doctorId}&date=${date}`
        );
    }

    static createAppointment(postData: IAppointmentPostData) {
        return axiosInstance.post(
            "/api/v1/consultation/appointment/create",
            postData
        );
    }
}
