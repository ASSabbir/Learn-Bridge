import axios from "axios";
import useTuitorSession from "../../../Hooks/useTuitorSession";
import Swal from "sweetalert2";
import { IoWarningOutline } from "react-icons/io5";
import { useEffect, useState } from "react";


const TuitorSessions = () => {
    const [sessions, isLoading, refetch] = useTuitorSession();
    const [reject,setreject]=useState([]);
    
    useEffect(()=>{
        axios.get('https://learnbridge-red.vercel.app/rejected_reason')
        .then(res=>{
            setreject(res.data)
        })
    },[])
    if (isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelrejected = async (id) => {
        await axios.put(`https://learnbridge-red.vercel.app/session_approves_request/${id}`,)
            .then(res => {
                if (res.data.acknowledged == true) {
                    Swal.fire({
                        title: "Request Send!",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            })
    }
    
    return (
        <div className="p-6 bg-gray-200 space-y-4">
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">My all Study Sessions</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sessions.map((course) => (
                    <div
                        key={course._id}
                        className="bg-white rounded-lg shadow-md "
                    >
                        <img
                            src={course.photo}
                            alt={course.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <p className="text-gray-700 font-medium mb-2">
                                Duration: {course.duration}
                            </p>
                            <p className="text-gray-700 font-medium mb-2">
                                Start Date: {course.startdate}
                            </p>
                            <p className="text-gray-700 font-medium mb-2">
                                Fee: {course.fee === "0" ? "Free" : `$${course.fee}`}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Instructor: {course.tuitorUsername} (
                                {course.tuitorEmail})
                            </p>
                            <div className="divider"></div>
                            {
                                course.status === "Pending" ? <button className="bg-color2 text-white px-2 py-1 rounded-sm">{course.status}</button> : course.status === "Approved" ? <button className="bg-green-400 text-white px-2 py-1 rounded-sm">{course.status}</button> : <div className="flex items-center justify-between">
                                    <button onClick={() => handelrejected(course._id)} className="bg-red-500 text-white px-2 py-1 rounded-sm">{course.status}</button>
                                    <div className="lg:tooltip cursor-pointer" data-tip={`Reason : ${reject.find(p => p.sessionId === course._id)?.reason || "No reason available"}`}>
                                        <IoWarningOutline className="text-2xl text-red-500" />
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TuitorSessions;