import { AxiosResponse } from "axios";
import { makeObservable, reaction, observable, action } from "mobx";
import { debounce } from "@material-ui/core";

import { DoctorApi, IGetDoctorsSuccessResponse } from "api";
import IStores from "./interfaces";
import { ISearchDoctorStore, IPagination } from "./interfaces/ISearchDoctorStore";
import { IDoctor } from "./interfaces/IDoctorStore";

export class SearchDoctorStore implements ISearchDoctorStore {
    doctors: IDoctor[] = [] as IDoctor[];

    dropdownDoctors: IDoctor[] = [] as IDoctor[];

    pagination: IPagination | null = null;

    searchText: string = "";

    pending: boolean = false;

    pendingSearchDoctors: boolean = false;

    fetchingDoctorsError: boolean = false;

    private rootStore: IStores;

    constructor(rootStore: IStores) {
        this.rootStore = rootStore;

        makeObservable(this, {
            doctors: observable,
            dropdownDoctors: observable,
            pagination: observable,
            searchText: observable,
            pending: observable,
            pendingSearchDoctors: observable,
            fetchingDoctorsError: observable,
            getDoctors: action,
            searchDoctors: action,
            setSearchText: action
        });

        reaction(
            () => this.searchText,
            debounce(inputValue => {
                inputValue.trim() && this.searchDoctors(inputValue);
            }, 300)
        );
    }

    getDoctors = (page: number, specialty: string) => {
        this.pending = true;
        this.fetchingDoctorsError = false;

        DoctorApi.getDoctors(page, 3, specialty)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorsSuccessResponse>) => {
                    this.doctors = data.data.items;
                    this.pagination = data.data.meta;
                })
            )
            .catch(
                action(() => {
                    this.fetchingDoctorsError = true;
                })
            )
            .finally(
                action(() => {
                    this.pending = false;
                })
            );
    };

    searchDoctors = (searchValue: string) => {
        this.pendingSearchDoctors = true;

        DoctorApi.searchDoctors(searchValue)
            .then(
                action(({ data }: AxiosResponse<IGetDoctorsSuccessResponse>) => {
                    this.dropdownDoctors = data.data.items;
                })
            )
            .catch(
                action(() => {
                    this.dropdownDoctors = [];
                })
            )
            .finally(
                action(() => {
                    this.pendingSearchDoctors = false;
                })
            );
    };

    setSearchText = (searchText: string) => {
        this.searchText = searchText;
    };
}
