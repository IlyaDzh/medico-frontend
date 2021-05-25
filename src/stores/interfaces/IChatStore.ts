import { Specialty } from "./ISpecialtiesStore";
import { CommunicationMethod } from "./IAppointmentStore";

export interface IChatStore {
    dialogs: Dialog[];
    currentDialog: Dialog | undefined;
    pendingDialogs: boolean;
    pendingMessages: boolean;
    hasMore: boolean;
    messageText: string;
    getDialogs: () => void;
    getMessages: () => void;
    setCurrentDialog: (id: string) => void;
    setMessageText: (text: string) => void;
    sendMessage: () => void;
    resetCurrentDialog: () => void;
}

export type Dialog = {
    id: number;
    isOpenedAccess: boolean;
    interlocutor: {
        id: number;
        name: string;
        surname: string;
        avatar: string | null;
        specialties?: Specialty[];
    };
    messages: Message[];
    communicationMethod: CommunicationMethod | null;
};

export type Message = {
    id: number;
    text: string;
    createdAt: Date;
    user: {
        id: number;
        avatar: string | null;
        name: string;
    };
};