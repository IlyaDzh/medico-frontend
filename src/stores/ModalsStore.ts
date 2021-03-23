import { makeAutoObservable } from "mobx";

import { IModalsStore, IModal, TModalsName } from "./interfaces/IModalsStore";

export class ModalsStore implements IModalsStore {
    modals: IModal[] = [
        {
            name: "sign-in",
            isOpen: false
        },
        {
            name: "confirmation",
            isOpen: false
        },
        {
            name: "email",
            isOpen: false
        },
        {
            name: "reset",
            isOpen: false
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    getModalIsOpen = (modalName: TModalsName) => {
        const currentModal = this.modals.find(modal => modal.name === modalName);
        return currentModal ? currentModal.isOpen : false;
    };

    setModalIsOpen = (modalName: TModalsName, isOpen: boolean) => {
        const currentModal = this.modals.find(modal => modal.name === modalName);

        if (currentModal) {
            currentModal.isOpen = isOpen;
        }
    };
}