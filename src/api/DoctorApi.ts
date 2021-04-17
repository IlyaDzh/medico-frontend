import { axiosInstance } from "./axios-instance";
// import {} from "./interfaces/IDoctorApi";

export class DoctorApi {
    static getDoctor(id: number) {
        return axiosInstance.get(`/api/v1/doctor/info?id=${id}`);
    }

    static getDoctors(page: number, count: number = 3) {
        return axiosInstance.get(
            `/api/v1/doctor/paginate?page=${page}&count=${count}`
        );
    }

    static getDoctorsByCount(count: number = 7) {
        return axiosInstance.get(`/api/v1/doctor/most-experienced?count=${count}`);
    }

    static getReviews(reviewId: number, doctorId: number, count: number = 5) {
        return axiosInstance.get(
            `/api/v1/doctor/review/list?reviewId=${reviewId}&doctorId=${doctorId}&count=${count}`
        );
    }
}
