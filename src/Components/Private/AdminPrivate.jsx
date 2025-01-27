
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const AdminPrivate = ({children}) => {
    
    const email=localStorage.getItem('user')
    
    const {data:admin,isLoading }=useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const res=await axios.get(`https://learnbridge-red.vercel.app/admin_private?email=${email}`);
            return res.data;
        }
    })
    if(isLoading){
        return <div></div>
    }
    if(!admin){
        return <div></div>
    }
    if(admin.role==='Admin'){
        return children
    }
    
    
};

export default AdminPrivate;