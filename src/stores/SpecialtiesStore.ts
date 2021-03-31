import { makeAutoObservable, action } from "mobx";
import { AxiosResponse } from "axios";

import { ISpecialtiesStore, Specialty } from "./interfaces/ISpecialtiesStore";
import { SpecialtiesApi, IGetSpecialtiesSuccessResponse } from "api";

export class SpecialtiesStore implements ISpecialtiesStore {
    specialties: Specialty[] = [] as Specialty[];

    pending: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getSpecialties = () => {
        this.pending = true;

        SpecialtiesApi.getSpecialties()
            .then(
                action(({ data }: AxiosResponse<IGetSpecialtiesSuccessResponse>) => {
                    this.specialties = data.data;
                })
            )
            .finally(() => {
                this.pending = false;
            });
    };
}
