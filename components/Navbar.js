"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define image sources for the logo
  const logoSrc = isScrolled ? 'DERMID_light.png' : 'DERMID_dark.png';

  return (
    <nav
      className={`${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } p-4 fixed top-0 w-full transition-all duration-300 ease-in-out z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Use the logo with dynamic src */}
        <img
          src={logoSrc}
          alt="DERMID Logo"
          className="w-40 h-auto object-contain"
        />
        <div>
          <Link
            href="/login"
            className={`bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-100 px-4 py-2 rounded mr-4 transition-all duration-300 ${
              isScrolled
                ? 'hover:bg-white hover:text-blue-500'
                : 'hover:bg-blue-700 hover:text-white'
            }`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-100 px-4 py-2 rounded transition-all duration-300 ${
              isScrolled
                ? 'hover:bg-white hover:text-blue-500'
                : 'hover:bg-blue-700 hover:text-white'
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
