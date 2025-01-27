
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav';
import Footer from '../Home/Footer';

const Root = () => {
    return (
        <div className='font-lato'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;