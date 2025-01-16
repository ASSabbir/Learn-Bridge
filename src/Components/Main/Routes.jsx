import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Login from "../Log/Login";
import Register from "../Log/Register";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default Routes;