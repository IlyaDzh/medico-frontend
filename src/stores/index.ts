import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";

import IStores from "./interfaces";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";

class RootStore implements IStores {
    userStore: IUserStore;
    modalsStore: IModalsStore;

    constructor() {
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
    }
}

export const rootStore = new RootStore();
