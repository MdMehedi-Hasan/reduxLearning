import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Shapes from './Shapes';
import Redux from './Redux';
import UseReducerPro from './UseReducerPro';
import ReducerContextProject from './ReducerContextProject';

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
        path: "/4",
        element: <ReducerContextProject/>
    }
  ]);

export default routes;