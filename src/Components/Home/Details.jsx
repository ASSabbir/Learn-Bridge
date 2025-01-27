import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import useRole from '../Hooks/useRole';
import Swal from 'sweetalert2';

const Details = () => {
    const { id } = useParams()
    const nvg = useNavigate()
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const [user, isLoading] = useRole()
    const { data: session, isLoading: loading2 } = useQuery({
        queryKey: ['approve-session'],
        queryFn: async () => {
            const res = await axios.get(`https://learnbridge-red.vercel.app/session/apprrove/${id}`);
            return res.data;
        }
    })
    if (loading2 || isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelSubmit = (session) => {
        const data = { ...session, StudentUser: user.email }
        console.log(data)
        axios.post('https://learnbridge-red.vercel.app/student_session', data)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Toast.fire({
                        icon: "success",
                        title: "added successfully"
                    });
                    nvg('/')
                }
            })

    }



    console.log(user)
    const isOngoing = new Date(session.enddate) >= new Date();
    return (
        <div className="p-6 bg-gray-200 space-y-4">
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">{session.title}</h4>
                        {user.role}
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="max-w-4xl mx-auto p-6">
                {/* Image and Title */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={session.photo}
                        alt={session.title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">

                        <p className="text-gray-700">Description: {session.description}</p>
                    </div>
                </div>

                {/* Session Details */}
                <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Session Details</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>Start Date:</strong> {session.startdate}
                        </li>
                        <li>
                            <strong>End Date:</strong> {session.enddate}
                        </li>
                        <li>
                            <strong>Class Start:</strong> {session.classstart}
                        </li>
                        <li>
                            <strong>Class End:</strong> {session.classend}
                        </li>
                        <li>
                            <strong>Duration:</strong> {session.duration} Month
                        </li>
                        <li>
                            <strong>Status:</strong> {session.status}
                        </li>
                        <li>
                            <strong>Fee:</strong> ${session.fee}
                        </li>
                        <li>
                            <strong>Tutor:</strong> {session.tuitorUsername} (
                            {session.tuitorEmail})
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        className={`px-6 py-2 rounded ${isOngoing
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                            }`}
                    >
                        {isOngoing ? "Ongoing" : "Closed"}
                    </button>
                    {
                        user.role === 'Student' ? <button onClick={() => handelSubmit(session)} className="px-6 py-2 bg-color2 text-white rounded">Book Now</button> : <button className="px-6 py-2 bg-gray-400 cursor-not-allowed text-white rounded">Book Now</button>
                    }


                </div>
                {/* // todo : reviews added   */}
            </div>
        </div>
    );
};

export default Details;