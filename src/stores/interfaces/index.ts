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
import { ICommentStore } from "./ICommentStore";
import { IChatStore } from "./IChatStore";
import {
    IDashboardConsultationsStore,
    IDashboardAnalyzesStore,
    IDashboardResultsStore,
    IDashboardMedicalCardStore,
    IDashboardSettingsStore,
    IDashboardDoctorProfileStore,
    IDashboardScheduleStore,
    IDashboardPatientsStore,
    IDashboardPatientInfoStore
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
    commentStore: ICommentStore;
    dashboardConsultationsStore: IDashboardConsultationsStore;
    dashboardAnalyzesStore: IDashboardAnalyzesStore;
    dashboardResultsStore: IDashboardResultsStore;
    dashboardMedicalCardStore: IDashboardMedicalCardStore;
    dashboardSettingsStore: IDashboardSettingsStore;
    dashboardDoctorProfileStore: IDashboardDoctorProfileStore;
    dashboardScheduleStore: IDashboardScheduleStore;
    dashboardPatientsStore: IDashboardPatientsStore;
    dashboardPatientInfoStore: IDashboardPatientInfoStore;
    chatStore: IChatStore;
}
