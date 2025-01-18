import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Login from "../Log/Login";
import Register from "../Log/Register";
import Dashboard from "../Dashboard/Dashboard";
import CreateSession from "../Dashboard/Tuitor/Create/CreateSession";
import TuitorSessions from "../Dashboard/Tuitor/Tuitorsessions/TuitorSessions";
import UploadMaterials from "../Dashboard/Tuitor/UploadMaterilas/UploadMaterials";
import AllMaterials from "../Dashboard/Tuitor/ViewAll/AllMaterials";
import SingleMaterials from "../Dashboard/Tuitor/UploadMaterilas/SingleMaterials";

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
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'create_session',
          element:<CreateSession></CreateSession> 
        },{
          path:'tuitor_sessions',
          element:<TuitorSessions></TuitorSessions>
        },{
          path:'tuitor_materials',
          element:<UploadMaterials></UploadMaterials>
        },{
          path:'all_materials',
          element:<AllMaterials></AllMaterials>
        },{
          path:'tuitor_materials/:id',
          element:<SingleMaterials></SingleMaterials>
        },
      ]
    }
  ]);

export default Routes;