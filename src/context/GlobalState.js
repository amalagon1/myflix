import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


// initial state
const initialState = {
    list: [],
    video: []
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

    const addVideo = movie => {
        dispatch({ type: "ADD_VIDEO", payload: movie })
    }

    return (
        <GlobalContext.Provider
            value={{
                list: state.list,
                video: state.video,
                addToList,
                removeFromList,
                addVideo,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
