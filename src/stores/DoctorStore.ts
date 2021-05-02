import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import {
    DoctorApi,
    IGetDoctorSuccessResponse,
    IGetReviewsSuccessResponse
} from "api";
import { IDoctorStore, IDoctor } from "./interfaces/IDoctorStore";

export class DoctorStore implements IDoctorStore {
    currentDoctor: IDoctor | null = null;

    pendingProfile: boolean = false;

    pendingProfileReviews: boolean = false;

    fetchingProfileError: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getDoctorProfile = (id: number) => {
        this.pendingProfile = true;
        this.fetchingProfileError = false;

        DoctorApi.getDoctor(id)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorSuccessResponse>) => {
                    this.currentDoctor = data.data;
                })
            )
            .catch(
                action(() => {
                    this.fetchingProfileError = true;
                })
            )
            .finally(
                action(() => {
                    this.pendingProfile = false;
                })
            );
    };

    fetchReviews = () => {
        if (!this.currentDoctor) {
            return;
        }

        this.pendingProfileReviews = true;

        const lastReviewId = this.currentDoctor.reviews[
            this.currentDoctor.reviews.length - 1
        ].id;
        const doctorId = this.currentDoctor.id;

        DoctorApi.getReviews(lastReviewId, doctorId)
            .then(
                action(({ data }: AxiosResponse<IGetReviewsSuccessResponse>) => {
                    this.currentDoctor!.reviews.push(...data.data);
                })
            )
            .finally(
                action(() => {
                    this.pendingProfileReviews = false;
                })
            );
    };

    resetProfile = () => {
        this.fetchingProfileError = false;
    };
}
