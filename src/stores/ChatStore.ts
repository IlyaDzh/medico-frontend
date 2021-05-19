import { AxiosResponse } from "axios";
import { makeAutoObservable, observable, action } from "mobx";
// import { v4 as uuidv4 } from "uuid";

import {
    ChatApi,
    IGetDialogsSuccessResponse,
    IGetMessagesSuccessResponse
} from "api";
import { IChatStore, Dialog, Message } from "./interfaces/IChatStore";
import { MAX_MESSAGE_COUNT } from "utils/constants";
import IStores from "./interfaces";

export class ChatStore implements IChatStore {
    dialogs: Dialog[] = [] as Dialog[];

    currentDialog: Dialog | undefined = undefined;

    pendingDialogs: boolean = false;

    pendingMessages: boolean = false;

    hasMore: boolean = true;

    messageText: string = "";

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeAutoObservable(this, {
            dialogs: observable,
            currentDialog: observable,
            pendingDialogs: observable,
            pendingMessages: observable,
            hasMore: observable,
            messageText: observable,
            getDialogs: action,
            getMessages: action,
            setCurrentDialog: action,
            setMessageText: action,
            sendMessage: action,
            resetCurrentDialog: action
        });
    }

    getDialogs = () => {
        this.pendingDialogs = true;

        ChatApi.getDialogs()
            .then(
                action(({ data }: AxiosResponse<IGetDialogsSuccessResponse>) => {
                    this.dialogs = data.data;
                })
            )
            .finally(
                action(() => {
                    this.pendingDialogs = false;
                })
            );
    };

    getMessages = () => {
        if (!this.currentDialog) {
            return;
        }

        this.pendingMessages = true;

        const lastMessageId =
            this.currentDialog.messages[this.currentDialog.messages.length - 1].id;
        const currentDialogId = this.currentDialog.id;

        ChatApi.getMessages(currentDialogId, 20, lastMessageId)
            .then(
                action(({ data }: AxiosResponse<IGetMessagesSuccessResponse>) => {
                    if (data.data.length > 0) {
                        this.dialogs
                            .filter(dialog => dialog.id === currentDialogId)[0]
                            .messages.push(...data.data);
                        this.hasMore = true;
                    }

                    if (data.data.length < 20) {
                        this.hasMore = false;
                    }
                })
            )
            .finally(
                action(() => {
                    this.pendingMessages = false;
                })
            );
    };

    setCurrentDialog = (id: string) => {
        this.currentDialog = this.dialogs.filter(
            dialog => dialog.id === Number(id)
        )[0];
    };

    setMessageText = (text: string) => {
        if (text.length <= MAX_MESSAGE_COUNT) {
            this.messageText = text;
        }
    };

    sendMessage = () => {
        if (
            !this.messageText ||
            !this.currentDialog ||
            !this.rootStore.userStore.currentUser
        ) {
            return;
        }

        const randomMessageId: number = Math.random() * 99999;
        const message: Message = {
            id: randomMessageId,
            text: this.messageText,
            createdAt: new Date(),
            user: {
                id: this.rootStore.userStore.currentUser.id,
                avatar:
                    this.rootStore.userStore.currentUser.additionalData?.avatar ||
                    null
            }
        };

        this.currentDialog.messages.unshift(message);

        this.messageText = "";
    };

    resetCurrentDialog = () => {
        this.currentDialog = undefined;
    };
}
