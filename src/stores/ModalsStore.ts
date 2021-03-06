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
            name: "cancel-consultation",
            isOpen: false
        },
        {
            name: "add-analysis",
            isOpen: false
        },
        {
            name: "delete-analysis",
            isOpen: false
        },
        {
            name: "update-medical-card",
            isOpen: false
        },
        {
            name: "add-comment",
            isOpen: false
        },
        {
            name: "add-appointment",
            isOpen: false
        },
        {
            name: "update-doctor-profile",
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
