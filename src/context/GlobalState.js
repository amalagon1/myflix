import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


// initial state
const initialState = {
    list: []
};


//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const addToList = movie => {
        dispatch({ type: "ADD_TO_LIST", payload: movie })
    }

    const removeFromList = (id) => {
        dispatch({ type: "REMOVE_FROM_LIST", payload: id })
    }

    return (
        <GlobalContext.Provider
            value={{
                list: state.list,
                addToList,
                removeFromList,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
