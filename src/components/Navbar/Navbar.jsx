import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import AccountMenu from "./AccountMenu";
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-white shadow dark:bg-neutral-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/users"
                            className="flex items-center justify-center gap-2 text-white font-bold"
                        >
                            <GrUserWorker className="w-8 h-8 dark:text-neutral-200" />
                            Global Groupware
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-neutral-500 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 focus:outline-none focus:text-neutral-600 dark:focus:text-neutral-400 cursor-pointer"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <IoReorderTwoOutline className="text-3xl" />
                                ) : (
                                    <IoClose className="text-3xl" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Navigation menu */}
                    <div
                        className={`
                            absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out 
                            bg-white dark:bg-neutral-800 
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
                            {[
                                "Users",
                                "About us",
                                "Services",
                                "Testimonials",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    to="/users"
                                    className="px-3 py-2 mx-3 mt-2 text-neutral-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                >
                                    {item}
                                </Link>
                            ))}
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
