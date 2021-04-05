import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import {
    DoctorApi,
    IGetDoctorsSuccessResponse,
    IGetDoctorSuccessResponse
} from "api";
import { IDoctorStore, IDoctor, IPagination } from "./interfaces/IDoctorStore";

export class DoctorStore implements IDoctorStore {
    doctors: IDoctor[] = [] as IDoctor[];

    currentDoctor: IDoctor | null = null;

    pagination: IPagination | null = null;

    pending: boolean = false;

    pendingProfile: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getDoctors = () => {
        this.pending = true;

        DoctorApi.getDoctors(1)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorsSuccessResponse>) => {
                    this.doctors = data.data.items;
                    this.pagination = data.data.meta;
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
