import { AxiosResponse } from "axios";
import { action, makeAutoObservable } from "mobx";

import { UserApi, IGetUserSuccessResponse } from "../api";
import { IUserStore, IUser } from "./interfaces/IUserStore";

export class UserStore implements IUserStore {
    currentUser: IUser | undefined = undefined;

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
                })
            )
            .catch(() => {
                localStorage.removeItem("accessToken");
            })
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    doLogout = () => {
        this.currentUser = undefined;
        localStorage.removeItem("accessToken");
    };
}
