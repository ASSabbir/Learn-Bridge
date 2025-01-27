
import { FaChalkboardTeacher } from 'react-icons/fa';
import { HiMiniAcademicCap } from 'react-icons/hi2';
import { IoIosStar } from 'react-icons/io';

import { TiSocialFacebook } from 'react-icons/ti';

const SecondSection = () => {
    return (
        <section className="p-8 bg-color1 text-white">
            <div className=" mx-auto grid justify-center grid-cols-2 text-center md:grid-cols-4">
                <div className="flex flex-col justify-center items-center space-y-3  lg:m-6">
                    <HiMiniAcademicCap className='text-3xl md:text-5xl text-color3 ' />
                    <p className="text-2xl md:text-4xl font-bold leading-none lg:text-6xl">500+</p>
                    <p className="text-sm md:text-xl">Students Enrolled</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3  lg:m-6">
                    <TiSocialFacebook className='text-3xl md:text-5xl text-color3 ' />
                    <p className="text-2xl md:text-4xl font-bold leading-none lg:text-6xl">89K</p>
                    <p className="text-sm md:text-xl">Followers on social media</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3  lg:m-6">
                    <IoIosStar className='text-3xl md:text-5xl text-color3 ' />
                    <p className="text-2xl md:text-4xl font-bold leading-none lg:text-6xl">4.8</p>
                    <p className="text-sm md:text-xl">Academic Review</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3  lg:m-6">
                    <FaChalkboardTeacher className='text-3xl md:text-5xl text-color3 ' />
                    <p className="text-2xl md:text-4xl font-bold leading-none lg:text-6xl">15+</p>
                    <p className="text-sm md:text-xl">Online Programs</p>
                </div>


            </div>
        </section>
    );
};

export default SecondSection;