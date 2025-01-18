import useTuitorSession from "../../../Hooks/useTuitorSession";


const TuitorSessions = () => {
    const [sessions, isLoading, refetch] = useTuitorSession();

    console.log(sessions)
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
                            <p className="text-gray-500 text-sm">
                                Instructor: {course.tuitorUsername} (
                                {course.tuitorEmail})
                            </p>
                            <button className="bg-color2 text-white px-2 py-1 rounded-sm">{course.status}</button>
                            <button className="bg-green-400 text-white px-2 py-1 rounded-sm">{course.status}</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TuitorSessions;