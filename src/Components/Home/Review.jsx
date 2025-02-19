import React from 'react';

const Review = () => {
    return (
        <div >
            <div className="bg-color1 text-white mt-20 py-4">
            <section className="my-12 mt-20 max-w-screen-2xl mx-auto">
                <div className=" mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-5xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className=" mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 md:grid-cols-2">
                    <div className="flex flex-col  items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">"I recently joined this study platform, and the experience has been fantastic! The session booking process was smooth, and the tutors were knowledgeable and engaging. The platform is well-organized, making it easy to access study materials and manage notes. Highly recommend for students looking for an efficient and collaborative learning experience!"</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-color3"></span>
                        <p>James Anderson</p>
                    </div>
                    <div className="flex flex-col  items-center  mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-300">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">"This platform has been a game-changer for my studies! Booking sessions was quick and hassle-free, and the tutors provided top-notch guidance. I love how easy it is to access study materials and manage my notes in one place. Definitely recommend it to anyone looking for an organized and interactive learning experience!"</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-300">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-color3"></span>
                        <p>Sophia Martinez</p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default Review;