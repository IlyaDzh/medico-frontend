import React, { createContext, useContext, ReactNode, ReactElement } from "react";
import IStores from "./interfaces";

interface IStoreProvider {
    store: IStores;
    children: ReactNode;
}

const StoreContext = createContext<IStores>({} as IStores);

export const StoreProvider: React.FC<IStoreProvider> = ({
    children,
    store
}): ReactElement => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStores = (): IStores => useContext(StoreContext);
