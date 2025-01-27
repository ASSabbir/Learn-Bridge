import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const SessionCard = () => {
    const today = new Date();

    const { data: sessions = [], isLoading, isError } = useQuery({
        queryKey: ['approve-session'],
        queryFn: async () => {
            const res = await axios.get('https://learnbridge-red.vercel.app/sessions/approve');
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className='flex items-center justify-center w-full pt-2 h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (isError || !Array.isArray(sessions)) {
        return (
            <div className="flex items-center justify-center w-full pt-2 h-screen">
                <p className="text-red-500">Failed to load sessions or invalid data format.</p>
            </div>
        );
    }

    return (
        <div className='py-10'>
            <h1 className='text-5xl font-bold text-center'>Our Session</h1>
            <div className="md:px-[10vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sessions.slice(0, 6).map((session) => {
                    const isOngoing = new Date(session.enddate) >= today;

                    return (
                        <div
                            key={session._id}
                            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                        >
                            <img
                                src={session.photo}
                                alt={session.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {session.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {session.description?.slice(0, 100)}...
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    className={`px-4 py-2 text-sm rounded ${isOngoing
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                        }`}
                                >
                                    {isOngoing ? "Ongoing" : "Closed"}
                                </button>
                                <Link to={`/session/${session._id}`} className="px-4 py-2 text-sm bg-blue-500 text-white rounded">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    );
                })}
                

            </div>
            <div className='flex justify-center w-full mt-7'>
                    <Link className='' to={'/allsessions'}><button className='px-6 py-2  text-lg bg-blue-500 text-white rounded'>View All</button></Link>
                </div>
        </div>
    );
};

export default SessionCard;
