import { History } from "history";

import { RouterStore } from "./RouterStore";
import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { UserStore } from "./UserStore";
import { ModalsStore } from "./ModalsStore";
import { QuestionnaireStore } from "./QuestionnaireStore";
import { SpecialtiesStore } from "./SpecialtiesStore";
import { DoctorStore } from "./DoctorStore";
import { SearchDoctorStore } from "./SearchDoctorStore";
import { HomeStore } from "./HomeStore";
import { DrawerStore } from "./DrawerStore";
import { AppointmentStore } from "./AppointmentStore";

import IStores from "./interfaces";
import { IRouterStore } from "./interfaces/IRouterStore";
import { ISignUpStore } from "./interfaces/ISignUpStore";
import { ISignInStore } from "./interfaces/ISignInStore";
import { IUserStore } from "./interfaces/IUserStore";
import { IModalsStore } from "./interfaces/IModalsStore";
import { IQuestionnaireStore } from "./interfaces/IQuestionnaireStore";
import { ISpecialtiesStore } from "./interfaces/ISpecialtiesStore";
import { IDoctorStore } from "./interfaces/IDoctorStore";
import { ISearchDoctorStore } from "./interfaces/ISearchDoctorStore";
import { IHomeStore } from "./interfaces/IHomeStore";
import { IDrawerStore } from "./interfaces/IDrawerStore";
import { IAppointmentStore } from "./interfaces/IAppointmentStore";

export class RootStore implements IStores {
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
    drawerStore: IDrawerStore;
    appointmentStore: IAppointmentStore;

    constructor(history: History) {
        this.routerStore = new RouterStore(history);
        this.signUpStore = new SignUpStore(this);
        this.signInStore = new SignInStore(this);
        this.userStore = new UserStore();
        this.modalsStore = new ModalsStore();
        this.questionnaireStore = new QuestionnaireStore(this);
        this.specialtiesStore = new SpecialtiesStore();
        this.doctorStore = new DoctorStore();
        this.searchDoctorStore = new SearchDoctorStore(this);
        this.homeStore = new HomeStore();
        this.drawerStore = new DrawerStore();
        this.appointmentStore = new AppointmentStore();
    }
}
