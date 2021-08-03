import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/bcm.jpeg";

const Header = () => {
  const [navBar, setNavbar] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 50) setNavbar(true);
    else if (window.scrollY <= 50) setNavbar(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`${navBar ? "py-5 lg:bg-opacity-90 shadow-md" : "lg:bg-opacity-50 py-8"} bg-white flex justify-center fixed z-50 inset-x-0 top-0 transition-all duration-500`}>
      <div className={`max-w-screen-lg flex items-center justify-between flex-wrap flex-grow `}>
        <Link href='/'>
          <a className='flex items-center flex-no-shrink text-white mr-6 '>
            <span className='font-semibold text-xl ml-4 text-black hover:text-gray-800 mr-4 transition-all'>Caregroup Name</span>
          </a>
        </Link>
        <div className='w-full block lg:flex lg:items-center lg:w-auto w-50 lg:pl-0 pl-4'>
          <div className='lg:text-lg lg:flex-grow text-sm lg:space-x-16'>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 mr-4 transition-all'>Home</a>
            </Link>
            <Link href='/events'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 mr-4 transition-all'>Events</a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 transition-all'>Gallery</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
