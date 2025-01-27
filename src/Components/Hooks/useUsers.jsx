import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Main/AuthProvider';

const useUsers = () => {
    const {user}=useContext(AuthContext);
    const {data:users=[],isLoading,refetch }=useQuery({
        queryKey: ['tuitor-session'],
        queryFn: async () => {
            const res=await axios.get(`https://learnbridge-red.vercel.app/users?email=${user.email?user.email:''}`);
            return res.data;
        }
    })
    return [users,isLoading,refetch]
};

export default useUsers;