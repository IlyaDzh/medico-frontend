import { ISignUpStore } from "./ISignUpStore";
import { ISignInStore } from "./ISignInStore";
import { IUserStore } from "./IUserStore";
import { IModalsStore } from "./IModalsStore";
import { IQuestionnaireStore } from "./IQuestionnaireStore";
import { ISpecialtiesStore } from "./ISpecialtiesStore";

export default interface IStores {
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
    questionnaireStore: IQuestionnaireStore;
    specialtiesStore: ISpecialtiesStore;
}
