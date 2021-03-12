import { AxiosResponse } from "axios";
import { action, makeAutoObservable } from "mobx";

import { UserApi } from "../api";
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
                action(({ data }: AxiosResponse<IUser>) => {
                    this.currentUser = data;
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
