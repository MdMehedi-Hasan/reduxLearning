import { types } from "./actiontype";

export const initialState = {
    loading: false,
    data: [],
    error: false
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

        default:
            return state
    }
}