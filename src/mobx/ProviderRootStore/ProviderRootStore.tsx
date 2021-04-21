import React from "react";
import { RootStore$ } from "../stores/RootStore$";
import { IRoot$ } from "../interfaces";

const MainStore = RootStore$.create({})

const StoreContext = React.createContext<IRoot$ | null>(null)

export const StoreProvider = (props) => {
    return <StoreContext.Provider value={ MainStore }> { props.children } </StoreContext.Provider>
}

export function useRootStore(): IRoot$ {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }
    return store
}
