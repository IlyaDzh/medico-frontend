import { makeAutoObservable, action } from "mobx";
import { AxiosResponse } from "axios";

import { ISpecialtiesStore, Specialty } from "./interfaces/ISpecialtiesStore";
import { SpecialtiesApi, IGetSpecialtiesSuccessResponse } from "api";

export class SpecialtiesStore implements ISpecialtiesStore {
    specialties: Specialty[] = [] as Specialty[];

    constructor() {
        makeAutoObservable(this);
    }

    getSpecialties = () => {
        SpecialtiesApi.getSpecialties().then(
            action(({ data }: AxiosResponse<IGetSpecialtiesSuccessResponse>) => {
                this.specialties = data.data;
            })
        );
    };
}
