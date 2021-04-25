import { axiosInstance } from "./axios-instance";

export class SpecialtiesApi {
    static getSpecialties() {
        return axiosInstance.get("/api/v1/doctor/specialty/all");
    }
}
