import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";

import IStores from "./interfaces";
import { ISignUpStore } from "./interfaces/ISignUpStore";
import { ISignInStore } from "./interfaces/ISignInStore";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";

class RootStore implements IStores {
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;

    constructor() {
        this.signUpStore = new SignUpStore(this);
        this.signInStore = new SignInStore(this);
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
    }
}

export const rootStore = new RootStore();
