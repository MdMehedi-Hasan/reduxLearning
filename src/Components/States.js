import { actionTypes } from "./ActionTypes"

export const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    education:"",
    number:0,
    gender:"",
    feedback:""
}
export const reducer = (state,action)=>{
    switch (action.type) {
        case actionTypes.INPUT:
        return{
            ...state,
            [action.payload.name] : action.payload.value,
        }
        case actionTypes.RADIO:
        return{
            ...state,
            [action.payload.name] : action.payload.value,
        }
    
        default:
            return(state)
    }
}