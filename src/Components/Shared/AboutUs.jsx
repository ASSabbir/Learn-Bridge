

const AboutUs = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center ">
      <div className="   p-8 md:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-8">
              About <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Welcome to <span className="text-color2">**LearnBridge**</span>, a space where
              students and tutors connect to make learning more effective and
              engaging. Our mission is to provide a seamless learning experience
              with structured study sessions, easy resource sharing, and a
              user-friendly dashboard.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mt-6">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              <li>📚 Access high-quality study sessions from expert tutors.</li>
              <li>🔗 Easy booking and seamless session management.</li>
              <li>📂 Organized study materials for efficient learning.</li>
              <li>💬 Interactive discussions and collaborative features.</li>
              <li>🔒 Secure and role-based access for all users.</li>
              <li>📅 Track upcoming and past study sessions with ease.</li>
              <li>🌎 Learn anytime, anywhere with our responsive platform.</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Study Collaboration"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
