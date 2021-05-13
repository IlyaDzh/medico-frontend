export interface IModalsStore {
    modals: IModal[];
    getModalIsOpen: (modalName: TModalsName) => boolean;
    setModalIsOpen: (modalName: TModalsName, isOpen: boolean) => void;
}

export interface IModal {
    name: TModalsName;
    isOpen: boolean;
}

export type TModalsName =
    | "sign-in"
    | "confirmation"
    | "email"
    | "reset"
    | "cancel-consultation"
    | "add-analysis"
    | "delete-analysis"
    | "update-medical-card"
    | "add-comment";
