import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-purple-600 p-4 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="logo flex text-white font-bold text-xl">
                    URL<span className="text-yellow-300 top-2">ite</span>
                    <div className="gap-4">
                        <Image className="text-4xl" width={30} height={30} src="/logo.gif" alt="Logo IMG" />
                    </div>
                </div>
                <div className="md:hidden">
                    <button id="hamburger" className="text-white cursor-pointer focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6 justify-center items-center cursor-pointer text-white text-lg">
                    <Link href="/"><li className="hover:text-yellow-300 transition duration-300">Home</li></Link>
                    <Link href="/about"><li className="hover:text-yellow-300 transition duration-300">About</li></Link>
                    <Link href="/shorten"><li className="hover:text-yellow-300 transition duration-300">Shorten</li></Link>
                    <Link href="/contact"><li className="hover:text-yellow-300 transition duration-300">Contact Us</li></Link>
                    <li className="flex gap-4 cursor-pointer">
                        <Link href="/shorten">
                            <button className="rounded-lg font-bold p-3 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-400 text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md hover:shadow-lg transition duration-300">
                                Try now
                            </button>
                        </Link>
                        <Link href="/support">
                            <button className="rounded-lg font-bold p-3 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-400 text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md hover:shadow-lg transition duration-300">
                                Support
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mobile-menu" className="hidden md:hidden">
                <ul className="flex flex-col space-y-4 mt-4 text-white">
                    <Link href="/"><li className="hover:text-yellow-300">Home</li></Link>
                    <Link href="/about"><li className="hover:text-yellow-300">About</li></Link>
                    <Link href="/shorten"><li className="hover:text-yellow-300">Shorten</li></Link>
                    <Link href="/contact"><li className="hover:text-yellow-300">Contact Us</li></Link>
                </ul>
            </div>
            <script>
                {`
                    document.getElementById('hamburger').addEventListener('click', () => {
                        const mobileMenu = document.getElementById('mobile-menu');
                        mobileMenu.classList.toggle('hidden');
                    });
                `}
            </script>
        </nav>
    );
};

export default Navbar;