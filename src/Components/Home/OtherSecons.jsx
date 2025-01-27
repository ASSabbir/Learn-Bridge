

const OtherSecons = () => {
    return (
        <section className=" text-gray-800 mt-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Our Tuitors</h2>
                <div className="flex flex-col md:flex-row gap-5 justify-center  sm:px-8 lg:px-12 xl:px-32 ">
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                        <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 object-cover aspect-square" />
                        <div className="space-y-4 text-center  ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Mr. James Lawson</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">High School Mathematics Teacher</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  bg-gray-50 text-gray-800">
                        <img src="https://t3.ftcdn.net/jpg/05/83/41/98/360_F_583419866_97XPxjHDJkQ2RKMmGWdgrbqJhEZeQb55.jpg" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square object-cover" />
                        <div className="space-y-4 text-center  ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Dr. Emily Carter</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">Physics Professor and Researcher</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                        <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square object-cover" />
                        <div className="space-y-4 text-center ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Mr. Ethan Harris</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">History Educator and Archivis</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherSecons;