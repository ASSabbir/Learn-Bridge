
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/icons8-book-96.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Main/AuthProvider';
import Swal from 'sweetalert2';  
import { RxHamburgerMenu } from 'react-icons/rx';
const StudentNav = () => {
    const { user, loading, logout } = useContext(AuthContext)
    const [show, setShow] = useState(true)
    const nvg = useNavigate()
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    
    const handelLogout = () => {
        logout()
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: `Bye See You Again`
                });
                localStorage.removeItem('user')
                nvg('/')

            })
            .catch(error => {
                console.log(error)

            })
    }
    return (
        <div className='flex flex-col'>
            <div className='z-20 relative flex justify-between w-full items-center py-2 px-2 md:hidden'>
                <h1 className="font-bold  text-xl md:text-3xl">LearnBridge</h1>
                <RxHamburgerMenu onClick={() => setShow(!show)} />

            </div>

            {
                show &&
                <div className={`bg-color2 z-10 md:hidden relative `}>
                    <ul className="menu  w-full  text-white  p-0 [&_li>*]:rounded-none">
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_booked_sessions'}>View booked session</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_create_note'}>Create note</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_personal_notes'}>Manage personal notes</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_materials'}>study materials</Link></li>
                    </ul>
                </div>
            }

            <div className="h-screen sticky top-0 bg-color3  hidden md:flex flex-col justify-between py-5 ">
                <div className='flex flex-col px-3 items-center'>
                    <div className='flex md:gap-4 py-5 items-center'>
                        <img src={logo} className='w-7 md:w-12 ' alt="" />
                        <h1 className="font-bold  text-xl md:text-3xl">LearnBridge</h1>
                    </div>
                    <div className="divider"></div>
                    <ul className="menu  w-full  text-color1  p-0 [&_li>*]:rounded-none">
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_booked_sessions'}>View booked session</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_create_note'}>Create note</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_personal_notes'}>Manage personal notes</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'student_materials'}>study materials</Link></li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="menu  w-full  text-color1  p-0 [&_li>*]:rounded-none">
                    <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'/'}>Home</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'https://docs.google.com/document/d/1bv6breYKF_AkR2YCMGSnHaMg6jr82bIF_TI5H9gbNpg/edit?tab=t.0'}>About Us</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'https://www.facebook.com/'}
                        >Our Facebook</Link></li>
                        <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'https://x.com/?lang=en'}>Our  Twiter</Link></li>

                    </ul>
                </div>
                <ul className="menu px-3  w-full  text-  p-0 [&_li>*]:rounded-none">
                <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'user_profile'}>Profile</Link></li>
                    <div className="divider"></div>
                    {
                        loading ?
                            <div className='flex items-center justify-center pt-2 w-[247px] h-12'>
                                <span className="loading loading-bars loading-md"></span>
                            </div>
                            :
                            <div className='flex w-[247px] items-center gap-4 px-2'>
                                <div className="w-12  rounded-full">
                                    <img className='w-full rounded-full'
                                        alt={user && user.displayName}
                                        src={user && user.photoURL} />
                                </div>
                                <div>
                                    <h1>{user && user.displayName}</h1>
                                    <h1>{user && user.email}</h1>
                                </div>
                            </div>
                    }
                    <div className="divider"></div>
                    {
                        user ?
                            <li onClick={handelLogout} className='hover:bg-color1 hover:text-white active:bg-color1'><Link>Log Out</Link></li>
                            :
                            <li className='hover:bg-color1 hover:text-white active:bg-color1'><Link to={'/login'}>Log In</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default StudentNav;