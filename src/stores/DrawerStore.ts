import { makeAutoObservable } from "mobx";

export class DrawerStore {
    drawerExpanded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setDrawerExpanded = (drawerExpanded: boolean) => {
        this.drawerExpanded = drawerExpanded;
    };
}
