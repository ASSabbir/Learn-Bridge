import { useContext } from "react";
import { AuthContext } from "../../../Main/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const StudentSession = () => {
    const { user } = useContext(AuthContext)
    const email = localStorage.getItem('user')
    
    const { data: sessions = [], isLoading, refetch } = useQuery({
        queryKey: ['Ssessions'],
        queryFn: async () => {
            const res = await axios.get(`https://learnbridge-red.vercel.app/student_session?StudentUser=${email}`);
            return res.data;
        }
    })
    
    if (!user || isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelReview=async(id)=>{
        const { value: review } = await Swal.fire({
            title: "Enter Review",
            input: "text",
            inputAttributes: {
                min: "0",
                placeholder: "Enter review",

            },
            showCancelButton: true,
            confirmButtonColor: "#4a7fce",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputValidator: (value) => {
                if (!value) {
                    return "Please enter a review";
                }

            },
        });
        if (review) {
            const data = { id, review }
            axios.post(`https://learnbridge-red.vercel.app/addreview/tostudent`, data)
                .then(res => {
                    if (res.data.acknowledged == true) {
                        Swal.fire({
                            title: "Done",
                            text: "The review is added",
                            icon: "success"
                        });
                        refetch()
                    }
                })

        }
    }
    return (
        <div className="p-6 bg-gray-200 space-y-4 w-full">
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left"> Student Notes</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                    {
                        sessions.map(session =>
                            <div
                                key={session._id}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={session.photo}
                                    alt={session.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{session.title}</h2>
                                    <p className="text-gray-600 mb-4">{session.description}</p>

                                    <div className="divider"></div>
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
                                                <strong>Status:</strong> <span className="text-green-500">{session.status}</span>
                                            </li>
                                            <li>
                                                <strong>Fee:</strong> ${session.fee}
                                            </li>
                                            <li>
                                                <strong>Tutor:</strong> {session.tuitorUsername} (
                                                {session.tuitorEmail})
                                            </li>
                                        </ul>
                                        <div className='flex mt-5 justify-between '>
                                         <button onClick={() => handelReview(session._id)} className="bg-color2 text-white px-3 py-1 rounded-sm">Review</button>
                                        
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default StudentSession;