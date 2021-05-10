import { AxiosResponse } from "axios";
import { makeObservable, action, observable } from "mobx";

import { UserApi, IGetUserSuccessResponse, ISignInSuccessResponse } from "api";
import { IUserStore, IUser } from "./interfaces/IUserStore";
import IStores from "./interfaces";

export class UserStore implements IUserStore {
    currentUser: IUser | undefined = undefined;

    isAuthorized: boolean = !!localStorage.getItem("accessToken");

    pending: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            currentUser: observable,
            isAuthorized: observable,
            pending: observable,
            fetchUser: action,
            doLogout: action
        });
    }

    fetchUser = () => {
        this.pending = true;

        UserApi.refreshToken().then(
            action(({ data }: AxiosResponse<ISignInSuccessResponse>) => {
                localStorage.setItem("accessToken", data.data.accessToken);
            })
        );

        UserApi.getUser()
            .then(
                action(({ data }: AxiosResponse<IGetUserSuccessResponse>) => {
                    this.currentUser = data.data;
                    this.isAuthorized = true;
                    this.rootStore.dashboardMedicalCard.setChangeCardForm(
                        data.data.additionalData
                    );
                    this.rootStore.dashboardSettings.setUpdateInfoForm(data.data);
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
