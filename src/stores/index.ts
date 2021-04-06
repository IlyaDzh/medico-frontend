import { History } from "history";

import { RouterStore } from "./RouterStore";
import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";
import { QuestionnaireStore } from "./QuestionnaireStore";
import { SpecialtiesStore } from "./SpecialtiesStore";
import { DoctorStore } from "./DoctorStore";

import IStores from "./interfaces";
import { IRouterStore } from "./interfaces/IRouterStore";
import { ISignUpStore } from "./interfaces/ISignUpStore";
import { ISignInStore } from "./interfaces/ISignInStore";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";
import { IQuestionnaireStore } from "./interfaces/IQuestionnaireStore";
import { ISpecialtiesStore } from "./interfaces/ISpecialtiesStore";
import { IDoctorStore } from "./interfaces/IDoctorStore";

export class RootStore implements IStores {
    routerStore: IRouterStore;
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
    questionnaireStore: IQuestionnaireStore;
    specialtiesStore: ISpecialtiesStore;
    doctorStore: IDoctorStore;

    constructor(history: History) {
        this.routerStore = new RouterStore(history);
        this.signUpStore = new SignUpStore(this);
        this.signInStore = new SignInStore(this);
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
        this.questionnaireStore = new QuestionnaireStore(this);
        this.specialtiesStore = new SpecialtiesStore();
        this.doctorStore = new DoctorStore(this);
    }
}
