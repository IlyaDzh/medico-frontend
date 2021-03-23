import { ISignUpStore } from "./ISignUpStore";
import { ISignInStore } from "./ISignInStore";
import { IUserStore } from "./IUserStore";
import { IModalsStore } from "./IModalsStore";

export default interface IStores {
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
}
