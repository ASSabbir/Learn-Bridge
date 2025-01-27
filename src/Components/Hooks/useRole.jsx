import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useRole = () => {
    const email=localStorage.getItem('user')
    const {data:user,isLoading,refetch }=useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const res=await axios.get(`https://learnbridge-red.vercel.app/admin_private?email=${email}`);
            return res.data;
        }
    })
    console.log(user)
    return [user,isLoading,refetch]
};

export default useRole;