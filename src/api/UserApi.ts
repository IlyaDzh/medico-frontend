import { axiosInstance } from "./axios-instance";
import { ILoginForm } from "stores/interfaces/IUserStore";

export class UserApi {
    static login(postData: ILoginForm) {
        return axiosInstance.post("api/auth/login", postData);
    }

    static getUser() {
        return axiosInstance.get("api/user/info");
    }
}
