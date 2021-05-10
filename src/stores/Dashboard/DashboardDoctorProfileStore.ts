import { AxiosResponse } from "axios";
import { makeObservable, observable, action } from "mobx";

import { DoctorApi, IGetReviewsSuccessResponse } from "api";
import { IDashboardDoctorProfileStore } from "stores/interfaces/Dashboard";
import IStores from "stores/interfaces";

export class DashboardDoctorProfileStore implements IDashboardDoctorProfileStore {
    pendingReviews: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            pendingReviews: observable,
            fetchReviews: action
        });
    }

    fetchReviews = () => {
        this.pendingReviews = true;

        const user = this.rootStore.userStore.currentUser!;
        const additionalData = user.additionalData!;

        const lastReviewId =
            additionalData.reviews[additionalData.reviews.length - 1].id;

        DoctorApi.getReviews(lastReviewId, user.id)
            .then(
                action(({ data }: AxiosResponse<IGetReviewsSuccessResponse>) => {
                    additionalData.reviews.push(...data.data);
                })
            )
            .finally(
                action(() => {
                    this.pendingReviews = false;
                })
            );
    };
}
