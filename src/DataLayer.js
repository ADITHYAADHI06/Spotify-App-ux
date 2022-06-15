import React,{createContext,useContext,useReducer} from "react";

// this is esseital we are prepareing the DataLayer
export const DataLayerContext = createContext();

export const DataLayer= ({ initailSate ,reducer, children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initailSate)}>
    {children}
 </DataLayerContext.Provider>
);
 
// we can use now
export const useDataLayerValue=()=> useContext(DataLayerContext);






// chidren means all componets inside the DataLayer. 