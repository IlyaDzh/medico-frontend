import { IUserStore } from "./IUserStore";
import { IModalsStore } from "./IModalsStore";

export default interface IStores {
    userStore: IUserStore;
    modalsStore: IModalsStore;
}
