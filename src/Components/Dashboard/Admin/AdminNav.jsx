import  { useContext } from 'react';
import logo from '../../../Assets/icons8-book-96.png';
import { AuthContext } from '../../Main/AuthProvider';
import { Link } from 'react-router-dom';


const AdminNav = () => {
    const { user,loading } = useContext(AuthContext)
    return (
        <div className="h-screen sticky top-0 bg-color2 text-white  flex flex-col justify-between py-5 ">
        <div className='flex flex-col px-3 items-center'>
            <div className='flex md:gap-4 py-5 items-center'>
                <img src={logo} className='w-7 md:w-12 ' alt="" />
                <h1 className="font-bold  text-xl md:text-3xl">LearnBridge</h1>
            </div>
            <div className="divider"></div>
           
            <ul className="menu  w-full  text-white  p-0 [&_li>*]:rounded-none">
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'admin_allusers'}>View all users
                </Link></li>
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'admin_allsessions'}>View all study session 
                </Link></li>
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'admin_allmaterials'}>View all materials
                </Link></li>
               
            </ul>
            <div className="divider"></div>
            <ul className="menu  w-full  text-white  p-0 [&_li>*]:rounded-none">
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'/'}>Home</Link></li>
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>About Us</Link></li>
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Our Facebook</Link></li>
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Our  Twiter</Link></li>

            </ul>
        </div>
        <ul className="menu px-3  w-full  text-white  p-0 [&_li>*]:rounded-none">
            <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Settings</Link></li>
            <div className="divider"></div>
            {
                loading ? 
                <div className='flex items-center justify-center pt-2 w-[247px] h-12'>
                    <span className="loading loading-bars loading-md"></span>
                </div>
                :
                <div className='flex items-center gap-4 px-2'>
                <div className="w-12  rounded-full">
                    <img className='w-full rounded-full'
                        alt={user.displayName}
                        src={user.photoURL} />
                </div>
                <div>
                    <h1>{user.displayName}</h1>
                    <h1>{user.email}</h1>
                </div>
            </div>
            }
            <div className="divider"></div>
            <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Log Out</Link></li>
        </ul>
    </div>
    );
};

export default AdminNav;