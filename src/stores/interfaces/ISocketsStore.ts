import { Socket } from "socket.io-client";

export interface ISocketsStore {
    socket: Socket;
    initSocket: (accessToken: string) => void;
    sendMessage: (data: SendMessageSocketData) => void;
}

export type SendMessageSocketData = {
    chatId: number;
    text: string;
    uuid: string;
}