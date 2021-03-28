import { axiosInstance } from "./axios-instance";

export class UserApi {
    static getUser() {
        return axiosInstance.get("/api/v1/user/");
    }
}
