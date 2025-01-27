import  { useEffect, useState } from 'react';
import useTuitorSession from '../../../Hooks/useTuitorSession';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const UploadMaterials = () => {
    
    const {data:sessions=[],isLoading,refetch }=useQuery({
        queryKey: ['approve-session'],
        queryFn: async () => {
            const res=await axios.get('https://learnbridge-red.vercel.app/sessions/approve');
            return res.data;
        }
    })
    return (
        <div>
            <div className="p-6 bg-gray-200 space-y-4">
                <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold font-Noto text-center md:text-left"> Study Sessions Materials</h4>
                            <p className="text-gray-600"></p>
                        </div>
                    </div>

                </div>
                <div className="p-6 sm:p-12 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sessions.map((course) => (
                        <div
                            key={course._id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={course.photo}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                <div className="divider"></div>
                                <Link to={`${course._id}`} className="bg-color2 text-white px-2 py-1 rounded-sm">Provide Materials</Link >

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default UploadMaterials;