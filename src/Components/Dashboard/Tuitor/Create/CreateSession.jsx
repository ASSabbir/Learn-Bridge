import React, { useContext } from 'react';
import { AuthContext } from '../../../Main/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const CreateSession = () => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelSerssion = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const startdate = e.target.startdate.value;
        const enddate = e.target.enddate.value;
        const classstart = e.target.classstart.value;
        const classend = e.target.classend.value;
        const duration = e.target.duration.value;
        const status = e.target.status.value;
        const fee = e.target.fee.value;
        const tuitorEmail = user.email;
        const tuitorUsername = user.displayName;
        const photoFile = e.target.photo.files[0];
        // Logging the values to the console for testing
        const session = {
            title,
            description,
            startdate,
            enddate,
            classstart,
            classend,
            duration,
            status,
            fee,
            tuitorEmail,
            tuitorUsername

        }
        Swal.fire({
            title: "Are you Sure ?",
            text: "Please check once before submitting",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Check",
            confirmButtonColor: "#4a7fce",

            cancelButtonColor: "#262d53",
            confirmButtonText: "Yes, Post it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                formData.append('image', photoFile);
                const response = await axios.post('https://api.imgbb.com/1/upload?key=7184d4d0cc210ac09f545d7688fa5876', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                const url = response.data.data.display_url;
                
                const newSession = { ...session, photo: url }
                
                axios.post('https://learnbridge-red.vercel.app/sessions', newSession)
                    .then(res => {

                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Post Done!",
                                text: "Your file has been Saved. Wait for approval",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    };

    return (
        <section className="p-6 bg-gray-100 ">
            <form onSubmit={handelSerssion} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-xl font-Noto">Session Information</p>
                        <p className="text-xs text-gray-500 font-Noto">Plan and organize study sessions effortlessly. Set the agenda, date, and time to help students excel.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Session Title</label>
                            <input name="title" type="text" placeholder="Title" className="w-full rounded-md p-2 border-[1px] text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Session Description</label>
                            <input name="description" type="text" placeholder="Description" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Registration Start Date</label>
                            <input name="startdate" type="date" className="w-full rounded-md p-2 border-[1px] text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Registration End Date</label>
                            <input name="enddate" type="date" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Class Start Date</label>
                            <input name="classstart" type="date" className="w-full rounded-md p-2 border-[1px] text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Class End Date</label>
                            <input name="classend" type="date" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Session Duration</label>
                            <input name="duration" type="text" placeholder="Month" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Status</label>
                            <input name="status" type="text" disabled defaultValue="Pending" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Registration Fee</label>
                            <input name="fee" type="text" defaultValue="0" disabled className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="space-y-1 text-sm col-span-full sm:col-span-3">
                            <label htmlFor="photo" className="block ">Provide a photo</label>
                            <input type="file" name="photo" className="file-input file-input-[#2d3c44] file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-xl font-Noto">Personal Information</p>
                        <p className="text-xs font-Noto text-gray-500">As a tutor, this section showcases your personal information to help students know you better.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Username</label>
                            <input disabled type="text" name="username" defaultValue={user ? user.displayName : 'Username'} className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input disabled type="email" defaultValue={user ? user.email : 'Email'} className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-md shadow-sm bg-gray-50">
                    <button type="submit" className="px-4 text-xl font-Noto py-2 w-full hover:bg-color1 hover:text-white rounded-md border-gray-800">
                        Post this
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateSession;
