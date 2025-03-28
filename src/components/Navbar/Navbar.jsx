import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/users"
                            className="flex items-center justify-center gap-2 text-white font-bold"
                        >
                            <GrUserWorker className="w-8 h-8 dark:text-gray-200" />
                            Global Groupware
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 cursor-pointer"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Navigation menu */}
                    <div
                        className={`
                            absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out 
                            bg-white dark:bg-gray-800 
                            lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto 
                            ${
                                isOpen
                                    ? "translate-x-0 opacity-100"
                                    : "opacity-0 -translate-x-full"
                            }
                            lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center
                        `}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link
                                to="/"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Users
                            </Link>
                            <Link
                                to="/"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                About us
                            </Link>
                            <Link
                                to="/"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Services
                            </Link>
                            <Link
                                to="/"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Testimonials
                            </Link>
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <AccountMenu />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
