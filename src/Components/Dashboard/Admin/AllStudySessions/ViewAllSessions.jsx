import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Swal from "sweetalert2";
import './style.css'

const ViewAllSessions = () => {
    const [count, setCont] = useState(0);
    const [activePage, setActivePage] = useState(0);
    // count data brom database
    useEffect(() => {
        axios.get('http://localhost:5000/admin_sessions_count')
            .then(res => setCont(res.data.count))
    })


    const numberofPage = Math.ceil(count / 6);
    const pages = [...Array(numberofPage).keys()]

    // fetch data from database
    const { data: sessions = [], isLoading, refetch } = useQuery({
        queryKey: ['admin-session', activePage],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/admin_allsessons?limit=6&skip=${activePage}`);
            return res.data;
        }
    })

    // handel the rejected and approve
    const handelrejctandApprove = async (id, status) => {
        if (status === 'Approved') {
            const { value: fee } = await Swal.fire({
                title: "Enter Amount",
                input: "number",
                inputAttributes: {
                    min: "0",
                    placeholder: "If its free enter 0",

                },
                showCancelButton: true,
                confirmButtonColor: "#4a7fce",
                confirmButtonText: "Submit",
                cancelButtonText: "Cancel",
                inputValidator: (value) => {
                    if (!value) {
                        return "Please enter a amount!";
                    }
                    if (value < 0) {
                        return "Fee amount cannot be negative!";
                    }
                },
            });

            if (fee) {
                const data = { id, fee }
                axios.put(`http://localhost:5000/admin_approves/${data.id}`, data)
                    .then(res => {
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Done",
                                text: "The amount is added to the session",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }

        }
        else if (status === 'Rejected') {
            const { value: formValues } = await Swal.fire({
                title: "",
                html: `
                <div class="container">
                <label className="text-2xl">Rejection reason </label>
                  <input id="swal-input1" class="swal2-input">
                </div>
                <div class="container">
                <label className="text-sm">Feedback</label>
                  <input id="swal-input2" class="swal2-input">
                </div>
                `,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById("swal-input1").value,
                        document.getElementById("swal-input2").value
                    ];
                }
            });
            if (formValues) {
                axios.put(`http://localhost:5000/admin_rejected/${id}`, formValues)
                    .then(res => {
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Rejected",
                                text: "tuiton session has been Rejected",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
            console.log(formValues)

        }
        
    }
    const handelDelete = id => {
        Swal.fire({
            title: "Are you Sure ?",
            text: "Please Think once before Deleting",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Wait",
            confirmButtonColor: "#4a7fce",

            cancelButtonColor: "#262d53",
            confirmButtonText: "Yes, Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {


                axios.delete(`http://localhost:5000/session/${id}`)
                    .then(res => {
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Delete Done!",
                                text: "Session  has been Deleted",
                                icon: "success"
                            });
                            refetch()
                        }
                        
                    })
                    

            }
        });
    }
    const handelupdate= async(id)=>{
        const { value: fee } = await Swal.fire({
            title: "Enter Amount",
            input: "number",
            inputAttributes: {
                min: "0",
                placeholder: "If its free enter 0",

            },
            showCancelButton: true,
            confirmButtonColor: "#4a7fce",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputValidator: (value) => {
                if (!value) {
                    return "Please enter a amount!";
                }
                if (value < 0) {
                    return "Fee amount cannot be negative!";
                }
            },
        });

        if (fee) {
            const data = { id, fee }
            axios.put(`http://localhost:5000/admin_approves/${data.id}`, data)
                .then(res => {
                    if (res.data.acknowledged == true) {
                        Swal.fire({
                            title: "Done",
                            text: "The amount is added to the session",
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
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">All Study Sessions (<span className="text-color2">Current : {count}</span> )</h4>
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
                            <p className="text-gray-700 font-medium mb-2">
                                Status: <span className={`${course.status == 'Approved' && 'text-green-500' || course.status == 'Pending' && 'text-blue-500' ||
                                    course.status == 'Rejected' && 'text-red-500'
                                    } `}>{course.status}</span>
                            </p>
                            <p className="text-gray-500 text-sm">
                                Instructor: {course.tuitorUsername} (
                                {course.tuitorEmail})
                            </p>
                            <div className="divider"></div>
                            {
                                course.status == 'Approved' ?
                                    <div className='flex justify-between '>
                                        <button onClick={()=>handelupdate(course._id)} className="bg-green-500 text-white px-3 py-1 rounded-sm">Update</button>
                                        <button onClick={() => handelDelete(course._id)} className="bg-red-500  text-white px-3 py-1 rounded-sm"> Delete</button>
                                    </div>
                                    :
                                    <div className='flex justify-between '>
                                        <button onClick={() => handelrejctandApprove(course._id, 'Approved')} className="bg-color2 text-white px-3 py-1 rounded-sm">Approve</button>
                                        <button onClick={() => handelrejctandApprove(course._id, 'Rejected')} className="bg-red-500  text-white px-3 py-1 rounded-sm"> Reject</button>
                                    </div>
                            }


                        </div>
                    </div>
                ))}

            </div>
            <div className="p-6 sm:p-12 bg-gray-50 flex justify-center items-center gap-6">
                <div className="join">
                    {
                        pages.map((page) => (
                            <button key={page} onClick={() => setActivePage(page)} className={`join-item btn btn-md ${activePage === page && 'bg-color2 text-white'}`}>{page}</button>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default ViewAllSessions;