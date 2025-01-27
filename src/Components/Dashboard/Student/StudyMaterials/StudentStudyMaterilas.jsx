import { useContext } from "react";
import { AuthContext } from "../../../Main/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StudentStudyMaterilas = () => {
    const { user } = useContext(AuthContext)
    const email = localStorage.getItem('user')
    
    const { data: studentMaterials = [], isLoading, refetch } = useQuery({
        queryKey: ['Ssessions'],
        queryFn: async () => {
            const res = await axios.get(`https://learnbridge-red.vercel.app/student_sessions/materials?StudentUser=${email}`);
            return res.data;
        }
    })
    console.log(studentMaterials)
    
    if (!user || isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handleDownload = (imageUrl) => {
        const link = document.createElement("a");
        link.href = imageUrl;
    
        // Extract file name from the URL or use a default name
        const fileName = imageUrl.split("/").pop() || "downloaded-image.jpg";
    
        link.download = fileName;
        link.click();
      };
    return (
        <div className="p-6 bg-gray-200 space-y-4 w-full">
            <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">My all Study Materials</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentMaterials.map((course) => (
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
                                Sessions Title: <span className='text-color2'>{course.title}</span>
                            </p>
                            <p className="text-gray-700 font-medium mb-2">
                                Drive Link: {course.driveLink}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Instructor: {course.tuitorUsername} (
                                {course.tuitorEmail})
                            </p>
                            <div className="divider"></div>
                            <div className='flex justify-between '>
                                <button onClick={()=>handleDownload(course.photo)} className="bg-color2 text-white px-3 py-1 rounded-sm">Download Image</button>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default StudentStudyMaterilas;