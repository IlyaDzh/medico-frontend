import { IRouterStore } from "./IRouterStore";
import { ISignUpStore } from "./ISignUpStore";
import { ISignInStore } from "./ISignInStore";
import { IUserStore } from "./IUserStore";
import { IModalsStore } from "./IModalsStore";
import { IQuestionnaireStore } from "./IQuestionnaireStore";
import { ISpecialtiesStore } from "./ISpecialtiesStore";
import { IDoctorStore } from "./IDoctorStore";
import { ISearchDoctorStore } from "./ISearchDoctorStore";
import { IHomeStore } from "./IHomeStore";

export default interface IStores {
    routerStore: IRouterStore;
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
    questionnaireStore: IQuestionnaireStore;
    specialtiesStore: ISpecialtiesStore;
    doctorStore: IDoctorStore;
    searchDoctorStore: ISearchDoctorStore;
    homeStore: IHomeStore;
}
