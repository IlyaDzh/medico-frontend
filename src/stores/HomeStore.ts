import { AxiosResponse } from "axios";
import { makeAutoObservable, action } from "mobx";

import { DoctorApi, IGetMostExperienceDoctorSuccessResponse } from "api";
import { HomeDoctor, IHomeStore } from "./interfaces/IHomeStore";

export class HomeStore implements IHomeStore {
    doctors: HomeDoctor[] | null = null;

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getDoctors = () => {
        this.pending = true;

        DoctorApi.getDoctorsByCount(10)
            .then(
                action(
                    ({
                        data
                    }: AxiosResponse<IGetMostExperienceDoctorSuccessResponse>) => {
                        this.doctors = data.data;
                    }
                )
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };
}
