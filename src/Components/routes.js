import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Shapes from './Shapes';
import Redux from './Redux';
import UseReducerPro from './UseReducerPro';
import ReducerContextProject from './ReducerContextProject';
import TopRated from './TopRated';
import AllProducts from './AllProducts';
import Cart from './Cart';

const routes = createBrowserRouter([
    {
      path: "/1",
      element: <Shapes/>,
    },
    {
      path: "/2",
      element:<Redux/>,
    },
    {
      path: "/3",
      element: <UseReducerPro/>,
    },
    {
        path: "/products",
        element: <ReducerContextProject/>,
        children:[
          {
            path: "",
            element: <AllProducts/>,
          },
          {
            path: "toprated",
            element: <TopRated/>,
          },
          {
            path: "cart",
            element: <Cart/>,
          }
        ]
    }
  ]);

export default routes;