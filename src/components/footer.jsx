import React from "react";

const Footer = () => {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white ">
            <footer className="container mx-auto font-raleway">
                <div className="w-full  mx-auto px-8 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="" className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap py-2 lg:py-0">Drone School</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Lessons</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-300 sm:text-center pb-5 md:pb-0">© 2023 <a href="" className="hover:underline">Drone School™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </section>
    );
};

export default Footer;