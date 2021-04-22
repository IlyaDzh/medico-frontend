import { IDoctor } from "./IDoctorStore";

export interface ISearchDoctorStore {
    doctors: IDoctor[];
    dropdownDoctors: IDoctor[];
    pagination: IPagination | null;
    searchText: string;
    pending: boolean;
    pendingSearchDoctors: boolean;
    fetchingDoctorsError: boolean;
    getDoctors: (page: number, specialty: string) => void;
    searchDoctors: (searchValue: string) => void;
    setSearchText: (searchText: string) => void;
}

export interface IPagination {
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
}
