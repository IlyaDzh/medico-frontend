import { AxiosResponse, AxiosError } from "axios";
import { makeObservable, observable, action } from "mobx";

import {
    DoctorApi,
    IGetDoctorsErrorResponse,
    IGetDoctorsSuccessResponse,
    IGetDoctorSuccessResponse
} from "api";
import IStores from "./interfaces";
import { IDoctorStore, IDoctor, IPagination } from "./interfaces/IDoctorStore";

export class DoctorStore implements IDoctorStore {
    doctors: IDoctor[] = [] as IDoctor[];

    currentDoctor: IDoctor | null = null;

    pagination: IPagination | null = null;

    pending: boolean = false;

    pendingProfile: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            doctors: observable,
            currentDoctor: observable,
            pagination: observable,
            pending: observable,
            pendingProfile: observable,
            getDoctors: action,
            getDoctorProfile: action,
            resetProfile: action
        });
    }

    getDoctors = (page: number) => {
        this.pending = true;

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

        DoctorApi.getDoctor(id)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorSuccessResponse>) => {
                    this.currentDoctor = data.data;
                })
            )
            .finally(
                action(() => {
                    this.pendingProfile = false;
                })
            );
    };

    resetProfile = () => {
        this.currentDoctor = null;
    };
}
