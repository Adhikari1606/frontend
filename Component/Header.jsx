import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="w-full px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 mt-5 container flex items-center justify-between flex-wrap">
                    <div className="flex items-center h-12 md:order-1">
                        <img src='../Images/logo.jpeg' alt="Logo" className="h-full" />
                        <h3 className="mt-5 ml-2 font-semibold text-gray-500">BrightSpark</h3>
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 hover:text-indigo-400 transition duration-300"><a href="/">Home</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400 transition duration-300"><a href="#">Blogs</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400 transition duration-300"><a href="#">About Us</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400 transition duration-300"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-x-6 order-4 md:order-3">
                        
                    </div>
                </div>
            </nav>
        </header>
    );
}
