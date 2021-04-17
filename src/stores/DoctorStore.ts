import { AxiosResponse, AxiosError } from "axios";
import { makeObservable, observable, action } from "mobx";

import {
    DoctorApi,
    IGetDoctorsErrorResponse,
    IGetDoctorsSuccessResponse,
    IGetDoctorSuccessResponse,
    IGetReviewsSuccessResponse
} from "api";
import IStores from "./interfaces";
import { IDoctorStore, IDoctor, IPagination } from "./interfaces/IDoctorStore";

export class DoctorStore implements IDoctorStore {
    doctors: IDoctor[] = [] as IDoctor[];

    currentDoctor: IDoctor | null = null;

    pagination: IPagination | null = null;

    pending: boolean = false;

    pendingProfile: boolean = false;

    pendingProfileReviews: boolean = false;

    fetchingDoctorsError: boolean = false;

    fetchingDoctorProfileError: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            doctors: observable,
            currentDoctor: observable,
            pagination: observable,
            pending: observable,
            pendingProfile: observable,
            pendingProfileReviews: observable,
            fetchingDoctorsError: observable,
            fetchingDoctorProfileError: observable,
            getDoctors: action,
            getDoctorProfile: action,
            fetchReviews: action,
            resetProfile: action
        });
    }

    getDoctors = (page: number) => {
        this.pending = true;
        this.fetchingDoctorsError = false;

        DoctorApi.getDoctors(page)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorsSuccessResponse>) => {
                    this.doctors = data.data.items;
                    this.pagination = data.data.meta;
                })
            )
            .catch(
                action(({ response }: AxiosError<IGetDoctorsErrorResponse>) => {
                    if (response?.status === 404) {
                        this.rootStore.routerStore.push(
                            `/doctors/${response.data.data.meta.pageCount}`
                        );
                    } else {
                        this.fetchingDoctorsError = true;
                    }
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    getDoctorProfile = (id: number) => {
        this.pendingProfile = true;
        this.fetchingDoctorProfileError = false;

        DoctorApi.getDoctor(id)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorSuccessResponse>) => {
                    this.currentDoctor = data.data;
                })
            )
            .catch(
                action(() => {
                    this.fetchingDoctorProfileError = true;
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
        this.currentDoctor = null;
    };
}
