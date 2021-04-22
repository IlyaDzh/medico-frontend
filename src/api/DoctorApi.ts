import { axiosInstance } from "./axios-instance";

export class DoctorApi {
    static getDoctor(id: number) {
        return axiosInstance.get(`/api/v1/doctor/info?id=${id}`);
    }

    static getDoctors(page: number, count: number = 3, specialty?: string) {
        return axiosInstance.get(
            `/api/v1/doctor/paginate?page=${page}&count=${count}&specialty=${specialty}`
        );
    }

    static searchDoctors(fullName: string) {
        return axiosInstance.get(
            `/api/v1/doctor/paginate?page=1&count=4&fio=${fullName}`
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
