
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/icons8-book-96.png"
import { Link } from 'react-router-dom';
import { AuthContext } from "../Main/AuthProvider";
import Swal from "sweetalert2";
import Headroom from "react-headroom";
import { div } from "motion/react-client";
import DarkModeToggle from "./DarkModeToggle";
const Nav = () => {

  const { user, logout } = useContext(AuthContext)


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

  const navLink = <>
    
    <Link className=" text-lg" to={'/about_us'}>About us</Link>
    <Link to={'/allsessions'}>All Sessions</Link>
    <Link to={'/login'}>Log In</Link>
  </>
  

  const handelLogout = () => {
    logout()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `Bye See You Again`
        });
        localStorage.removeItem('user')
      })
      .catch(error => {
        console.log(error)
      })
  }
  // console.log(user)
  return (
    <Headroom>
      <div className=" bg-base-100 dark:bg-zinc-800 dark:text-white  ">
        <div className="navbar  max-w-screen-2xl mx-auto">
          <div className="flex-1">
            <div className='flex md:gap-4  items-center'>
              <img src={logo} className='w-7 md:w-12 ' alt="" />
              <h1 className="font-bold  text-xl md:text-3xl">LearnBridge</h1>
            </div>
          </div>
          <div className="flex-none gap-2">
            {
              user ?
                <div className="flex items-center gap-4">
                  <Link className=" text-lg" to={'/allsessions'}>All Sessions</Link>
                  <Link className=" text-lg" to={'/about_us'}>About us</Link>
                  <Link to={'/dashboard'} className=" text-lg">DashBoard</Link>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt={user.displayName}
                          src={user.photoURL} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-white  z-[1] mt-3 w-52  shadow">
                      
                      <li className="pt-1 hover:bg-gray-200 p-1" onClick={handelLogout}>Logout</li>
                    </ul>
                  </div>
                  <DarkModeToggle></DarkModeToggle>
                </div>
                :
                <div  className="flex items-center gap-4">
                  {navLink}
                </div>
            }

          </div>
        </div>
      </div>
    </Headroom>


  );
};

export default Nav;