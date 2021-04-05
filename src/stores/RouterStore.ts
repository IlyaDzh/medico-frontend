import { makeObservable, action } from "mobx";
import { History } from "history";
import { IRouterStore } from "./interfaces/IRouterStore";

export class RouterStore implements IRouterStore {
    history: History | null = null;

    constructor(history: History) {
        this.history = history;

        makeObservable(this, {
            push: action,
            goBack: action,
            goForward: action
        });
    }

    push = (url: string) => {
        this.history!.push(url);
    };

    goBack = () => {
        this.history!.goBack();
    };

    goForward = () => {
        this.history!.goForward();
    };
}
