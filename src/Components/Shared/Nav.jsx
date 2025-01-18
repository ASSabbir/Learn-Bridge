
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/icons8-book-96.png"
import { Link } from 'react-router-dom';
import { AuthContext } from "../Main/AuthProvider";
import Swal from "sweetalert2";
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
    <li><Link to={'/login'}>Log In</Link></li>
  </>

  const handelLogout = () => {
    logout()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `Bye See You Again`
        });
      })
      .catch(error => {
        console.log(error)
      })
  }
  // console.log(user)
  return (

    <div className="navbar bg-base-100 max-w-screen-2xl mx-auto">
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
              
              <button className=" text-lg">About us</button>
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
                  className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52  shadow">
                  <li className="pt-1 hover:bg-gray-200 p-1">Profile</li>
                  <li className="pt-1 hover:bg-gray-200 p-1">Settings</li>
                  <li className="pt-1 hover:bg-gray-200 p-1" onClick={handelLogout}>Logout</li>
                </ul>
              </div>
            </div>
            :
            <Link to={'/login'}>Log In</Link>
        }

      </div>
    </div>
  );
};

export default Nav;