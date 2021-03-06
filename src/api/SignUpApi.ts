import { axiosInstance } from "./axios-instance";
import { ISignUpPostData, ISendMailPostData } from "./interfaces";

export class SignUpApi {
    static signUp(postData: ISignUpPostData) {
        return axiosInstance.post("/api/v1/auth/sign-up", postData);
    }

    static sendMail(postData: ISendMailPostData) {
        return axiosInstance.post("/api/v1/auth/send-email-with-token", postData);
    }
}
