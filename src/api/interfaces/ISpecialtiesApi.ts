import { BaseResponse } from "./";
import { Specialty } from "stores/interfaces/ISpecialtiesStore";

export interface IGetSpecialtiesSuccessResponse extends BaseResponse {
    error: 0;
    data: Specialty[];
}
