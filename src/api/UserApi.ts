import { axiosInstance } from "./axios-instance";
import { IChangeUserInfoPostData } from "./interfaces";

export class UserApi {
    static getUser() {
        return axiosInstance.get("/api/v1/user/info");
    }

    static refreshToken() {
        return axiosInstance.get("/api/v1/user/fresh-token");
    }

    static changeUserInfo(postData: IChangeUserInfoPostData) {
        return axiosInstance.post("/api/v1/user/change-user-info", postData);
    }
}
