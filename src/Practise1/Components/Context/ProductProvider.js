import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { types } from '../States/ProductsState/actiontype';
import { initialState, productReducer } from '../States/ProductsState/productReducer';

const CONTEXT_PROVIDER = createContext()



const ProductProvider = ({children}) => {
    const [state,dispatch] = useReducer(productReducer,initialState)
    // console.log(state);
    useEffect(()=>{
        dispatch({type:types.FETCHING_START})
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => dispatch({
        type:types.FETCHING_SUCCESS,
        payload:data.products
    }))
    .catch(()=>dispatch({type:types.FETCHING_ERROR}))
  },[])
  const value = {
    state,dispatch
  }
    return (<CONTEXT_PROVIDER.Provider value={value}>{children}</CONTEXT_PROVIDER.Provider>);
};
export const useProducts = () =>{
    const context = useContext(CONTEXT_PROVIDER)
    return context
} 
export default ProductProvider;