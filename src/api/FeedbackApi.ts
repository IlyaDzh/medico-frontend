import { axiosInstance } from "./axios-instance";
import { IFeedbackPostData } from "./interfaces/IFeedbackApi";

export class FeedbackApi {
    static sendFeedback(postData: IFeedbackPostData) {
        return axiosInstance.post("/api/v1/feedback/leave", postData);
    }
}
