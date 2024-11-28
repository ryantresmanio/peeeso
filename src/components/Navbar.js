import React, { useState, useEffect } from "react";
import pesoLogo from "../assets/peso-logo.png";
import { CgProfile } from "react-icons/cg";
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header
                className={`bg-white shadow-md px-6 py-2 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/80 backdrop-blur-md py-2 text-gray-900" : "bg-transparent py-3"
                    }`}
            >
                <img className="w-16 h-16 rounded-full" src={pesoLogo} alt="logo" />

                {/* Hamburger Menu Button */}
                <button className="lg:hidden text-3xl text-black" onClick={() => setIsDrawerOpen(true)}>
                    <RiMenu3Line />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-center items-center w-full space-x-6">
                    <a href="/" className="text-black nav-effects">
                        Home
                    </a>
                    <a href="/about-us" className="text-black nav-effects">
                        About us
                    </a>
                    <a href="/announcement" className="text-black nav-effects">
                        Announcement
                    </a>
                    <a href="/job-listing" className="text-black nav-effects">
                        Job listing
                    </a>
                    <a href="/contact-us" className="text-black nav-effects">
                        Contact us
                    </a>
                </nav>

                {/* Login Dropdown (Hover) */}
                <div className="relative hidden lg:block group">
                    <button className="flex items-center text-black hover:text-darkblue">
                        <CgProfile className="text-xl mx-2" /> Login
                        <RiArrowDropDownLine className="text-4xl transform transition-transform duration-300 group-hover:rotate-180"/>
                    </button>
                    <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg border transition-opacity duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <ul className="py-2">
                            <li className="px-4 py-2 nav-effects flex items-center space-x-2 cursor-pointer">
                                <CgProfile className="text-2xl" />
                                <span>Login</span>
                            </li>
                            <li className="px-4 py-2 nav-effects flex items-center space-x-2 cursor-pointer">
                                <FaUserEdit className="text-2xl" />
                                <span>Sign Up</span>
                            </li>
                            <li className="px-4 py-2 nav-effects flex items-center space-x-2 cursor-pointer">
                                <CiCircleQuestion className="text-2xl font-semibold" />
                                <span>User Guide</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Drawer */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}>
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button className="text-2xl" onClick={() => setIsDrawerOpen(false)}>
                        <RiCloseLine />
                    </button>
                </div>
                <nav className="flex flex-col p-5 h-full space-y-4">
                    <a href="/" className="text-black nav-effects">
                        Home
                    </a>
                    <a href="/about-us" className="text-black nav-effects">
                        About us
                    </a>
                    <a href="/announcement" className="text-black nav-effects">
                        Announcement
                    </a>
                    <a href="/job-listing" className="text-black nav-effects">
                        Job listing
                    </a>
                    <a href="/contact-us" className="text-black nav-effects">
                        Contact us
                    </a>
                    {/* Login Dropdown Inside Drawer */}
                    <div className="relative group">
                        <button className="flex items-center text-black w-full">
                            <CgProfile className="text-xl mr-2" /> Login
                            <RiArrowDropDownLine className="text-4xl" />
                        </button>
                        <div
                            className="absolute left-full mt-2 w-full bg-white rounded-lg shadow-lg border transition-opacity duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                        >
                            <ul className="py-2">
                                <li className="px-4 py-2 nav-effects flex items-center space-x-2">
                                    <CgProfile className="text-2xl" />
                                    <span>Login</span>
                                </li>
                                <li className="px-4 py-2 nav-effects flex items-center space-x-2">
                                    <FaUserEdit className="text-2xl" />
                                    <span>Sign Up</span>
                                </li>
                                <li className="px-4 py-2 nav-effects flex items-center space-x-2">
                                    <CiCircleQuestion className="text-2xl font-semibold" />
                                    <span>User Guide</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Overlay */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsDrawerOpen(false)}></div>
            )}
        </div>
    );
};

export default Navbar;
