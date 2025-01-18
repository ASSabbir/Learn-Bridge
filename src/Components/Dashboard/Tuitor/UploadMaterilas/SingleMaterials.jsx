import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Main/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const SingleMaterials = () => {
    const { id } = useParams();
    console.log(id)
    const { user } = useContext(AuthContext)
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
        const driveLink = e.target.duration.value;
        const sessionId = e.target.status.value;
        const tuitorEmail = user.email;
        const tuitorUsername = user.displayName;
        const photoFile = e.target.photo.files[0];
        // Logging the values to the console for testing
        const material = {
            title,
            description,
            driveLink,
            sessionId,
            tuitorEmail,
            tuitorUsername

        }
        console.log(material)
        Swal.fire({
            title: "Are you Sure ?",
            text: "Please check once before submitting",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Check",
            confirmButtonColor: "#4a7fce",
            cancelButtonColor: "#262d53",
            confirmButtonText: "Yes, Done it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                formData.append('image', photoFile);
                const response = await axios.post('https://api.imgbb.com/1/upload?key=7184d4d0cc210ac09f545d7688fa5876', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                const url = response.data.data.display_url;
                
                const newMaterial = { ...material, photo: url }
                
                axios.post('http://localhost:5000/materials', newMaterial)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: " Done!",
                                text: "Now your student can see your materials. ",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    };
    return (
        <div className="p-6 bg-gray-200 space-y-4 w-full">
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left"> Provide Sessions Materials</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-gray-50 ">
                <form onSubmit={handelSerssion} className="container flex flex-col mx-auto space-y-12 w-full">
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-xl font-Noto">Materials Information</p>
                            <p className="text-xs text-gray-500 font-Noto"> Provide them with well-structured study materials and a clear roadmap to achieve their goals. Tailored sessions ensure every student gets the support they need to succeed.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Material Title</label>
                                <input name="title" type="text" placeholder="Title" className="w-full rounded-md p-2 border-[1px] text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Material Description</label>
                                <input name="description" type="text" placeholder="Description" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                            </div>
                            
                            
                            <div className="col-span-full sm:col-span-4">
                                <label className="text-sm">Google Drive link</label>
                                <input name="duration" type="text" placeholder="http://" className="w-full rounded-md text-gray-900 p-2 border-[1px]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Study session ID</label>
                                <input name="status" type="text" disabled defaultValue={id} className="w-full rounded-md text-gray-500 p-2 border-[1px]" />
                            </div>
                           
                            <div className="space-y-1 text-sm col-span-full sm:col-span-3">
                                <label  className="block ">Provide a photo</label>
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
                            Give Material
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SingleMaterials;