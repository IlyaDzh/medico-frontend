import { SignUpStore } from "./SignUpStore";
import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";

import IStores from "./interfaces";
import { ISignUpStore } from "./interfaces/ISignUpStore";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";

class RootStore implements IStores {
    signUpStore: ISignUpStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;

    constructor() {
        this.signUpStore = new SignUpStore();
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
    }
}

export const rootStore = new RootStore();
