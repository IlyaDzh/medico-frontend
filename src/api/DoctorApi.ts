import { axiosInstance } from "./axios-instance";
// import {} from "./interfaces/IDoctorApi";

export class DoctorApi {
    static getDoctor(id: number) {
        return axiosInstance.get(`/api/v1/doctor?id=${id}`);
    }

    static getDoctors(page: number, count: number = 3) {
        return axiosInstance.get(
            `/api/v1/doctor/paginate?page=${page}&count=${count}`
        );
    }
}
