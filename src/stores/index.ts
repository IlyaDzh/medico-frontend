import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";
import { QuestionnaireStore } from "./QuestionnaireStore";
import { SpecialtiesStore } from "./SpecialtiesStore";

import IStores from "./interfaces";
import { ISignUpStore } from "./interfaces/ISignUpStore";
import { ISignInStore } from "./interfaces/ISignInStore";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";
import { IQuestionnaireStore } from "./interfaces/IQuestionnaireStore";
import { ISpecialtiesStore } from "./interfaces/ISpecialtiesStore";

class RootStore implements IStores {
    signUpStore: ISignUpStore;
    signInStore: ISignInStore;
    userStore: IUserStore;
    modalsStore: IModalsStore;
    questionnaireStore: IQuestionnaireStore;
    specialtiesStore: ISpecialtiesStore;

    constructor() {
        this.signUpStore = new SignUpStore(this);
        this.signInStore = new SignInStore(this);
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
        this.questionnaireStore = new QuestionnaireStore(this);
        this.specialtiesStore = new SpecialtiesStore();
    }
}

export const rootStore = new RootStore();
