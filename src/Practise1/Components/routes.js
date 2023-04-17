import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Shapes from './Shapes';
import Redux from './Redux';
import UseReducerPro from './UseReducerPro';
import ReducerContextProject from './ReducerContextProject';
import TopRated from './TopRated';
import AllProducts from './AllProducts';
import Cart from './Cart';
import Wishlist from './Wishlist';


import Main from '../../Practise2/Components/Main';
import Toprated2 from '../../Practise2/Components/Toprated2';
import Wishlist2 from '../../Practise2/Components/Wishlist2';
import Cart2 from '../../Practise2/Components/Cart2';
import AllProducts2 from '../../Practise2/Components/AllProducts2';

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
            path: "wishlist",
            element: <Wishlist/>,
          },
          {
            path: "cart",
            element: <Cart/>,
          },
        ]
    },
    {
      path:"practise",
      element:<Main/>,
      children:[
        {
          path:"",
          element:<AllProducts2/>
        },
        {
          path:"toprated2",
          element:<Toprated2/>
        },
        {
          path:"wishlist2",
          element:<Wishlist2/>
        },
        {
          path:"cart2",
          element:<Cart2/>
        },
      ]
    }
  ]);

export default routes;