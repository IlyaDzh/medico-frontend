import { ISignUpStore } from "./ISignUpStore";
import { IUserStore } from "./IUserStore";
import { IModalsStore } from "./IModalsStore";

export default interface IStores {
    signUpStore: ISignUpStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
}
