import { Outlet } from "react-router-dom";
import StudentNav from "./Student/StudentNav";
import TuitorNav from "./Tuitor/TuitorNav";


const Dashboard = () => {
    return (
        <div className='font-lato flex'>
            {/* <StudentNav></StudentNav> */}
            <TuitorNav></TuitorNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;