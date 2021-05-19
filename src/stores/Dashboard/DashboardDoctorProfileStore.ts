import { AxiosResponse, AxiosError } from "axios";
import { makeObservable, observable, action } from "mobx";

import {
    DashboardDoctorApi,
    DoctorApi,
    IGetReviewsSuccessResponse,
    IUpdateDoctorProfileErrorResponse,
    IUpdateDoctorProfilePostData,
    IUpdateDoctorProfileSuccessResponse
} from "api";
import {
    IDashboardDoctorProfileStore,
    IUpdateDoctorProfileForm,
    ChangeDoctorProfileTypes,
    KeysOfDoctorProfileForm
} from "stores/interfaces/Dashboard";
import IStores from "stores/interfaces";
import { AdditionalData } from "stores/interfaces/IUserStore";

const INITIAL_UPDATE_DOCTOR_PROFILE_FORM: IUpdateDoctorProfileForm = {
    cost: "",
    about: ""
};

export class DashboardDoctorProfileStore implements IDashboardDoctorProfileStore {
    pendingReviews: boolean = false;

    doctorProfileForm = INITIAL_UPDATE_DOCTOR_PROFILE_FORM;

    currentModalState: ChangeDoctorProfileTypes | null = null;

    pendingUpdate: boolean = false;

    submissionError: string | undefined = undefined;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            pendingReviews: observable,
            doctorProfileForm: observable,
            currentModalState: observable,
            pendingUpdate: observable,
            submissionError: observable,
            fetchReviews: action,
            updateDoctorProfile: action,
            setCurrentModalState: action,
            setFormValue: action,
            setDoctorProfileForm: action,
            resetForm: action
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

    updateDoctorProfile = () => {
        this.pendingUpdate = true;
        this.submissionError = undefined;

        const postData: IUpdateDoctorProfilePostData = {
            costOfConsultation: Number(this.doctorProfileForm.cost),
            about: this.doctorProfileForm.about
        };

        DashboardDoctorApi.updateProfile(postData)
            .then(
                action(
                    ({
                        data
                    }: AxiosResponse<IUpdateDoctorProfileSuccessResponse>) => {
                        if (this.rootStore.userStore.currentUser) {
                            this.rootStore.userStore.currentUser.additionalData = {
                                ...this.rootStore.userStore.currentUser
                                    .additionalData,
                                ...data.data
                            };
                        }
                        this.rootStore.modalsStore.setModalIsOpen(
                            "update-doctor-profile",
                            false
                        );
                        this.setDoctorProfileForm(data.data);
                        this.resetForm();
                    }
                )
            )
            .catch(
                action((error: AxiosError<IUpdateDoctorProfileErrorResponse>) => {
                    this.submissionError = error.response?.data.message;
                })
            )
            .finally(
                action(() => {
                    this.pendingUpdate = false;
                })
            );
    };

    setCurrentModalState = (state: ChangeDoctorProfileTypes) => {
        this.currentModalState = state;
    };

    setFormValue = <K extends KeysOfDoctorProfileForm>(
        key: K,
        value: IUpdateDoctorProfileForm[K]
    ) => {
        this.doctorProfileForm[key] = value;
    };

    setDoctorProfileForm = (data: AdditionalData) => {
        this.doctorProfileForm = {
            cost: data.costOfConsultation.toString(),
            about: data.about
        };
    };

    resetForm = () => {
        this.submissionError = undefined;
    };
}
