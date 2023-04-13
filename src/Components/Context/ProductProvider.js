import React, { createContext, useContext, useEffect, useState } from 'react';

const CONTEXT_PROVIDER = createContext()



const ProductProvider = ({children}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setData(data.products))
  },[])
  const value = {
    data
  }
    return (<CONTEXT_PROVIDER.Provider value={value}>{children}</CONTEXT_PROVIDER.Provider>);
};
export const useProducts = () =>{
    const context = useContext(CONTEXT_PROVIDER)
    return context
} 
export default ProductProvider;