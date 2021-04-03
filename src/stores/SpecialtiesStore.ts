import { makeAutoObservable, action } from "mobx";
import { AxiosResponse } from "axios";

import { ISpecialtiesStore, Specialty } from "./interfaces/ISpecialtiesStore";
import { SpecialtiesApi, IGetSpecialtiesSuccessResponse } from "api";

export class SpecialtiesStore implements ISpecialtiesStore {
    specialties: Specialty[] | null = null;

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
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };
}
