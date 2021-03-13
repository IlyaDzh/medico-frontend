import { axiosInstance } from "./axios-instance";

export interface ISignInPostData {
    email: string;
    password: string;
}

export interface ISignUpPostData {
    userType: string;
    name: string;
    surname: string;
    middleName: string;
    birthDate: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
    acceptedUserAgreement: boolean;
}

export class UserApi {
    static login(postData: ISignInPostData) {
        return axiosInstance.post("/api/v1/auth/sign-in", postData);
    }

    static signUp(postData: ISignUpPostData) {
        return axiosInstance.post("/api/v1/auth/sign-up", postData);
    }

    static getUser() {
        return axiosInstance.get("/api/v1/user/info");
    }
}
