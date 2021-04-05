import { History } from "history";

export interface IRouterStore {
    history: History | null;
    push: (url: string) => void;
    goBack: () => void;
    goForward: () => void;
}
