import { AxiosResponse } from "axios";
import { makeAutoObservable, observable, action } from "mobx";
import { v4 as uuidv4 } from "uuid";

import {
    ChatApi,
    IGetDialogsSuccessResponse,
    IGetMessagesSuccessResponse
} from "api";
import { IChatStore, Dialog, Message } from "./interfaces/IChatStore";
import { MAX_MESSAGE_COUNT } from "utils/constants";
import IStores from "./interfaces";
import { SendMessageSocketData } from "./interfaces/ISocketsStore";

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
            appendMessage: action,
            resetCurrentDialog: action,
            resetAll: action
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

        ChatApi.getMessages(currentDialogId, 20, Number(lastMessageId))
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

        const user = this.rootStore.userStore.currentUser;

        const dialog = this.currentDialog;

        const messageText = this.messageText;

        const avatar = user.additionalData
            ? user.userType === "doctor"
                ? user.additionalData.photo
                : user.additionalData.avatar
            : null;

        const randomId = uuidv4();

        const message: Message = {
            id: randomId,
            chatId: dialog.id,
            text: messageText,
            createdAt: new Date(),
            user: {
                id: user.id,
                avatar: avatar,
                name: user.name
            },
            pending: true,
            uuid: randomId.toString()
        };

        dialog.messages.unshift(message);

        const socketMessage: SendMessageSocketData = {
            chatId: dialog.id,
            authorId: user.id,
            text: messageText,
            uuid: randomId.toString()
        };

        this.rootStore.socketsStore.sendMessage(socketMessage);

        this.messageText = "";
    };

    appendMessage = (message: Message) => {
        const appendedDialog = this.dialogs.filter(
            dialog => dialog.id === message.chatId
        )[0];

        if (appendedDialog) {
            if (
                this.rootStore.userStore.currentUser &&
                message.user.id === this.rootStore.userStore.currentUser.id
            ) {
                const pendingMessage = appendedDialog.messages.filter(
                    item => item.uuid === message.uuid
                )[0];

                console.log(pendingMessage);

                if (pendingMessage) {
                    pendingMessage.id = message.id;
                    pendingMessage.createdAt = message.createdAt;
                    pendingMessage.pending = false;
                }
            } else {
                appendedDialog.messages.unshift(message);
            }
        }
    };

    resetCurrentDialog = () => {
        this.currentDialog = undefined;
    };

    resetAll = () => {
        this.currentDialog = undefined;
        this.dialogs = [];
        this.pendingDialogs = false;
        this.pendingMessages = false;
        this.hasMore = true;
        this.messageText = "";
    };
}
