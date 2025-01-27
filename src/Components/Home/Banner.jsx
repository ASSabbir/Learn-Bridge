
import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <section className="bg-[#E1F4F6] text-color1">
            <div className="md:px-[9vw] flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Find The Best 
                        <span className="text-color2"> Course </span>To Grow Your Skills
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">LearnBridge connects students, tutors, and administrators to streamline learning and resource sharing.
                        <br className="hidden md:inline lg:hidden" /> Empowering education through collaboration and innovation.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-color2 text-gray-50">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;