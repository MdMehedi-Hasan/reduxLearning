import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState2, reducer } from "./Reducer2";
import { actionTypes } from "./ActionTypes2";

export const GLOBAL_CONTEXT = createContext()

const Context = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState2)
    // console.log(state);
    useEffect(() => {
        fetch("https://themealdb.com/api/json/v1/1/search.php?s")
            .then(res => res.json())
            .then(data => dispatch({type:actionTypes.ALL_ITEMS, payload:data.meals}))
    }, [])
    const value = {
        state,dispatch
    }
    return(<GLOBAL_CONTEXT.Provider value={value}>{children}</GLOBAL_CONTEXT.Provider>)
};
export const useItems = ()=>{
    const context = useContext(GLOBAL_CONTEXT)
    return context
}
export default Context