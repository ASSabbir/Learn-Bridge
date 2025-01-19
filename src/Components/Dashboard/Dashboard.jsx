import { Outlet } from "react-router-dom";
import StudentNav from "./Student/StudentNav";
import TuitorNav from "./Tuitor/TuitorNav";
import AdminNav from "./Admin/AdminNav";


const Dashboard = () => {
    return (
        <div className='font-lato flex'>
            {/* <StudentNav></StudentNav> */}
            {/* <TuitorNav></TuitorNav> */}
            <AdminNav></AdminNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;