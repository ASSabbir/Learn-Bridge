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
import AllUSer from "../Dashboard/Admin/AllUser/AllUSer";
import ViewAllSessions from "../Dashboard/Admin/AllStudySessions/ViewAllSessions";
import ViewAllMaterilas from "../Dashboard/Admin/All Materials/ViewAllMaterilas";
import AdminPrivate from "../Private/AdminPrivate";
import StudentSession from "../Dashboard/Student/StudentSession/StudentSession";
import StudentCreate from "../Dashboard/Student/StudentNote/StudentCreate";
import StudentNav from "../Dashboard/Student/StudentNav";
import StudentNotes from "../Dashboard/Student/ManageNote/StudentNotes";
import StudentStudyMaterilas from "../Dashboard/Student/StudyMaterials/StudentStudyMaterilas";
import Details from "../Home/Details";
import UserPrivate from "../Private/UserPrivate";
import AllSessions from "../Home/AllSessions";


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
          path:'/session/:id',
          element:<UserPrivate><Details></Details></UserPrivate>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/allsessions',
            element:<AllSessions></AllSessions>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
        ,
        // {
        //     path:'/session/payment/:id',
        //     element:<Payment></Payment>
        // }
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
        },{
          path:'admin_allusers',
          element:<AdminPrivate><AllUSer></AllUSer></AdminPrivate>
        },{
          path:'admin_allsessions',
          element:<AdminPrivate><ViewAllSessions></ViewAllSessions></AdminPrivate>
        },{
          path:'admin_allmaterials',
          element:<AdminPrivate><ViewAllMaterilas></ViewAllMaterilas></AdminPrivate>
        }
        ,{
          path:'student_booked_sessions',
          element:<StudentSession></StudentSession>
        }
        ,{
          path:'student_create_note',
          element:<StudentCreate></StudentCreate>
        }
        ,{
          path:'student_personal_notes',
          element:<StudentNotes></StudentNotes>
        }
        ,{
          path:'student_materials',
          element:<StudentStudyMaterilas></StudentStudyMaterilas>
        }
      ]
    }
  ]);

export default Routes;