import { types } from "./actiontype";

export const initialState = {
    loading: true,
    data: [],
    error: false,
    cart:[]
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case types.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case types.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case types.ADD_TO_CART:
            return {
                ...state,
                cart:[ ...state.cart,action.payload ]
            }

        default:
            return state
    }
}