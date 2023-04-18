import { actionTypes } from "./ActionTypes2";

export const initialState2 = {
    allItems: [],
    cart2:[],
    wishlist2:[],
}
export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ALL_ITEMS:
            return {
                ...state,
                allItems:action.payload
            }
            case actionTypes.ADD_TO_CART2:
                return {
                    ...state,
                    cart2:[...state.cart2,action.payload.product]
                }
                case actionTypes.REMOVE_CART:
                    return {
                        ...state,
                        cart2:[...state.cart2.filter(items=> items !== action.payload)],
                    }
                    default:
                        return state
    }
}