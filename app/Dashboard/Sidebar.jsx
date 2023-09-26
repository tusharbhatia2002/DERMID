import React from 'react';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-55 bg-gray-800 text-white"> {/* Reduce the width by 25% */}
      <div className="flex items-center justify-between p-4 text-3xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          DERM-ID
        </span>
      </div>
      <nav className="mt-8">
        <div className="px-4">
          <h2 className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/Dashboard" className="flex items-center hover:text-black text-white hover:bg-gray-200 px-4 py-2 rounded">
                <FaHome className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/Diagnosis" className="flex items-center hover:text-black text-white hover:bg-gray-200 px-4 py-2 rounded">
                <FaFileAlt className="mr-2" />
                Diagnosis
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 px-4">
          <h2 className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
            Admin
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="flex items-center hover:text-black text-white hover:bg-gray-200 px-4 py-2 rounded">
                <FaUsers className="mr-2" />
                Members
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center hover:text-black text-white hover:bg-gray-200 px-4 py-2 rounded">
                <FaCog className="mr-2" />
                Settings
              </a>
            </li>
            <li>
            <a href="/" className="flex items-center hover:text-black text-white hover:bg-gray-200 px-4 py-2 rounded">
                <FaCog className="mr-2" />
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Add the "Book Consultation" button */}
      <div className="mt-8 px-4">
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:text-black active:bg-pink-500 px-4 py-2 rounded">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;