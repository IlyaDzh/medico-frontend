export interface IUserStore {
    currentUser: IUser | undefined;
    pending: boolean;
    fetchUser: () => void;
    doLogout: () => void;
}

export interface IUser {
    id: number;
    avatar: string;
    fullname: string;
}

export interface ILoginForm {
    name: string;
    password: string;
}
