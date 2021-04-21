import React from "react";
<<<<<<< Updated upstream:src/mobx/ProviderRootStore/ProviderRootStore.jsx
import { RootStore$ } from "../stores/RootStore$";
=======
import { RootStore$ } from "../stores/RootStore$.store";
import { IRoot$ } from "../interfaces";
>>>>>>> Stashed changes:src/mobx/ProviderRootStore/ProviderRootStore.tsx

const MainStore = RootStore$.create({})

const StoreContext = React.createContext({})

export const StoreProvider = (props) => {
    return <StoreContext.Provider value={ MainStore }> { props.children } </StoreContext.Provider>
}

export function useRootStore() {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }
    return store
}
