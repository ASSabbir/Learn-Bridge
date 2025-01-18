
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons8-book-96.png'
import { useContext } from 'react';
import { AuthContext } from '../../Main/AuthProvider';
const StudentNav = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="h-screen bg-color3 w-96 flex flex-col justify-between py-5 ">
            <div className='flex flex-col px-3 items-center'>
                <div className='flex md:gap-4 py-5 items-center'>
                    <img src={logo} className='w-7 md:w-12 ' alt="" />
                    <h1 className="font-bold  text-xl md:text-3xl">LearnBridge</h1>
                </div>
                <div className="divider"></div>
                <ul className="menu  w-full  text-color1  p-0 [&_li>*]:rounded-none">
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>View booked session</Link></li>
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Create note</Link></li>
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Manage personal notes</Link></li>
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>study materials</Link></li>
                </ul>
                <div className="divider"></div>
                <ul className="menu  w-full  text-color1  p-0 [&_li>*]:rounded-none">
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>About Us</Link></li>
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Our Facebook</Link></li>
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Our  Twiter</Link></li>

                </ul>
            </div>
            <ul className="menu px-3  w-full  text-color1  p-0 [&_li>*]:rounded-none">
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Settings</Link></li>
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
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Log Out</Link></li>
            </ul>
        </div>
    );
};

export default StudentNav;