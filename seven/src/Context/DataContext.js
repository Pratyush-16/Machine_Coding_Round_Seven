import { createContext, useReducer } from "react";
import {data} from "../Data/Data"

const initialState = {
    continents : data,

}

const reducer = (state, action) => {

    
    switch (action.type) {
       
      
      default:
        return state;
    }
  };

export const DataContext = createContext();

export const DataContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(reducer , initialState)


    return(

        <DataContext.Provider values={{state,dispatch}}>{children}</DataContext.Provider> 
    )
}