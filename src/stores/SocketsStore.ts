import { makeObservable, observable, action } from "mobx";
import { io, Socket } from "socket.io-client";

import IStores from "./interfaces";
import { Message } from "./interfaces/IChatStore";
import { SendMessageSocketData } from "./interfaces/ISocketsStore";

export class SocketsStore {
    socket: Socket = io(
        process.env.REACT_APP_API_BASE_URL || "http://localhost:3003",
        {
            autoConnect: false
        }
    );

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            socket: observable,
            initSocket: action,
            sendMessage: action
        });
    }

    initSocket = (accessToken: string) => {
        this.socket.io.opts.query = {
            token: accessToken
        };
        this.socket.connect();

        this.socket.on("disconnect", () => {
            alert(
                "Соединение прервано. Закройте все вкладки с данным приложением и обновите страницу"
            );
        });

        this.socket.on("newMessage-success", (data: Message) => {
            this.rootStore.chatStore.appendMessage(data);
        });
    };

    sendMessage = (data: SendMessageSocketData) => {
        this.socket.emit("newMessage", data);
    };
}
