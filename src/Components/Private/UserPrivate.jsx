import React, { useContext } from 'react';
import { AuthContext } from '../Main/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const UserPrivate = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
    
    if (loading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
    }
    if (user) {
        return children
    }
    else {
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        )
    }
    // if(loading){
    //     return <div className='flex items-center justify-center w-full pt-2 h-screen'>
    //         <span className="loading loading-bars loading-lg"></span>
    //     </div>
    // }
    // if(user){ 
    //     children
    // } 
      
    // return  <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default UserPrivate;