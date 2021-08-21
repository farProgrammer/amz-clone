import React,{ createContext,useContext,useReducer } from "react";

//Prepare the data layer 
export const StateContext = createContext();
//wrap app and provide data
export const StateProvider = ({ reducer,initialState,children }) => (
    <StateContext.Provider value = { useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);