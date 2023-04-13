import { RouterProvider } from "react-router-dom";
import routes from "./Components/routes";
import { createContext, useEffect, useState } from "react";
import ProductProvider from "./Components/Context/ProductProvider";
// const Context_Provider = createContext()

function App() {
/*   const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setData(data.products))
},[]) */
/* const value = {
  data
} */
  return (
    <div className="bg-neutral-950 text-white">
      <ProductProvider>
      <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
