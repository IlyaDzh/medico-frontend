import { axiosInstance } from "./axios-instance";
import { ISignUpPostData } from "./interfaces";

export class SignUpApi {
    static signUp(postData: ISignUpPostData) {
        return axiosInstance.post("/api/v1/auth/sign-up", postData);
    }
}
