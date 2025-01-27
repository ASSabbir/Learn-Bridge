import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Main/AuthProvider";

const StudentNotes = () => {
    const { user } = useContext(AuthContext)
    const email = localStorage.getItem('user')
    console.log(email)
    const { data: notes = [], isLoading, refetch } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await axios.get(`https://learnbridge-red.vercel.app/students_notes?email=${email}`);
            return res.data;
        }
    })
    if (!user) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    console.log(notes)
    const handelUpdate = async (id) => {
        const { value: description } = await Swal.fire({
            title: "Enter Amount",
            input: "text",
            inputAttributes: {
                min: "0",
                placeholder: "Enter description",

            },
            showCancelButton: true,
            confirmButtonColor: "#4a7fce",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
            inputValidator: (value) => {
                if (!value) {
                    return "Please enter a description";
                }

            },
        });
        if (description) {
            const data = { id, description }
            axios.put(`https://learnbridge-red.vercel.app/student_notes/${data.id}`, data)
                .then(res => {
                    if (res.data.acknowledged == true) {
                        Swal.fire({
                            title: "Done",
                            text: "The description is added",
                            icon: "success"
                        });
                        refetch()
                    }
                })

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


                axios.delete(`https://learnbridge-red.vercel.app/student_notes/${id}`)
                    .then(res => {
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Delete Done!",
                                text: "Your file has been Deleted",
                                icon: "success"
                            });
                            refetch()
                        }

                    })


            }
        });
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        notes.map(note =>
                            <div
                                key={note._id}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={note.photo}
                                    alt={note.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                                    <p className="text-gray-600 mb-4">{note.description}</p>

                                    <div className="divider"></div>
                                    <div className='flex justify-between '>
                                        <button onClick={() => handelUpdate(note._id)} className="bg-color2 text-white px-3 py-1 rounded-sm">Update</button>
                                        <button onClick={() => handelDelete(note._id)} className="bg-red-500  text-white px-3 py-1 rounded-sm">Delete</button>
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

export default StudentNotes;