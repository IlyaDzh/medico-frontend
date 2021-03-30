import { AxiosResponse } from "axios";
import { action, makeAutoObservable } from "mobx";

import { UserApi, IGetUserSuccessResponse } from "../api";
import { IUserStore, IUser } from "./interfaces/IUserStore";

export class UserStore implements IUserStore {
    currentUser: IUser | undefined = undefined;

    isAuthorized: boolean = !!localStorage.getItem("accessToken");

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchUser = () => {
        this.pending = true;

        UserApi.getUser()
            .then(
                action(({ data }: AxiosResponse<IGetUserSuccessResponse>) => {
                    console.log(data);
                    this.currentUser = data.data;
                    this.isAuthorized = true;
                })
            )
            .catch(
                action(() => {
                    localStorage.removeItem("accessToken");
                    this.isAuthorized = false;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    doLogout = () => {
        this.currentUser = undefined;
        this.isAuthorized = false;
        localStorage.removeItem("accessToken");
    };
}
