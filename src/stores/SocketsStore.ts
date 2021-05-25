import { makeObservable, observable, action } from "mobx";
import { io, Socket } from "socket.io-client";

import IStores from "./interfaces";
import { Message } from "./interfaces/IChatStore";
import { SendMessageSocketData } from "./interfaces/ISocketsStore";

export class SocketsStore {
    socket: Socket = io("http://medico-back-end.herokuapp.com/", {
        autoConnect: false
    });

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

        this.socket.on("connect", () => {
            console.log("success");
        });

        this.socket.on("connect_error", error => {
            console.log(error);
        });

        this.socket.on("newMessage-success", (data: Message) => {
            console.log("success send message", data);
            this.rootStore.chatStore.appendMessage(data);
        });

        this.socket.on("newMessage-error", data => {
            console.log("error send message", data);
        });
    };

    sendMessage = (data: SendMessageSocketData) => {
        this.socket.emit("newMessage", data);
    };
}
