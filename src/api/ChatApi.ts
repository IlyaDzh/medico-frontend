import { axiosInstance } from "./axios-instance";

export class ChatApi {
    static getDialogs() {
        return axiosInstance.get("/api/v1/chat/list");
    }

    static getMessages(chatId: number, count: number, lastMessageId: number) {
        return axiosInstance.get(
            `/api/v1/chat/message/list?chatId=${chatId}&count=${count}&lastMessageId=${lastMessageId}`
        );
    }

    static sendMedia(postData: FormData) {
        return axiosInstance.post("/api/v1/chat/message/send-media", postData);
    }
}
