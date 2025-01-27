

const Others = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Question 1: How can I access my study notes after the session?</summary>
                        <div className="px-4 pb-4">
                            <p>After each session, your study notes will be uploaded to your dashboard. Simply log in, navigate to "My Notes," and download the materials you need.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Question 2: Are the study sessions tailored to my learning needs?</summary>
                        <div className="px-4 pb-4">
                            <p>Absolutely! Each session is customized based on your goals and pace to ensure optimal learning outcomes.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Question 3: Can I get support outside of the sessions?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Yes! We provide 24/7 support via chat and email to assist you with any questions or additional help you might need.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Others;