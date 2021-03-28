import { axiosInstance } from "./axios-instance";
import { ISignInPostData } from "./interfaces";

export class SignInApi {
    static signIn(postData: ISignInPostData) {
        return axiosInstance.post("/api/v1/auth/sign-in", postData);
    }
}
