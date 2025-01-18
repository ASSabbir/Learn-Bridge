import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useTuitorSession = () => {
    const {data:sessions=[],isLoading,refetch }=useQuery({
        queryKey: ['tuitor-session'],
        queryFn: async () => {
            const res=await axios.get('http://localhost:5000/sessions');
            return res.data;
        }
    })
    
    return [sessions,isLoading,refetch]
};

export default useTuitorSession;