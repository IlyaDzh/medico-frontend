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
import { IDrawerStore } from "./IDrawerStore";
import { IAppointmentStore } from "./IAppointmentStore";
import {
    IDashboardConsultationsStore,
    IDashboardAnalyzesStore,
    IDashboardResultsStore,
    IDashboardMedicalCardStore,
    IDashboardSettingsStore,
    IDashboardDoctorProfileStore,
    IDashboardScheduleStore
} from "./Dashboard";

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
    drawerStore: IDrawerStore;
    appointmentStore: IAppointmentStore;
    dashboardConsultationsStore: IDashboardConsultationsStore;
    dashboardAnalyzesStore: IDashboardAnalyzesStore;
    dashboardResultsStore: IDashboardResultsStore;
    dashboardMedicalCardStore: IDashboardMedicalCardStore;
    dashboardSettingsStore: IDashboardSettingsStore;
    dashboardDoctorProfileStore: IDashboardDoctorProfileStore;
    dashboardScheduleStore: IDashboardScheduleStore;
}
