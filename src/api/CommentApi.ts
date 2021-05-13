import { axiosInstance } from "./axios-instance";
import { ISendCommentPostData } from "./interfaces";

export class CommentApi {
    static sendComment(postData: ISendCommentPostData) {
        return axiosInstance.post("/api/v1/doctor/review/leave", postData);
    }
}
