import React from 'react';
import HeaderProfileNav from './HeaderProfileNav';

const DashboardNavbar = () => {
  return (
    <div className="bg-gray-800">
          <div className="flex items-center justify-between px-4 py-2">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            {/* Profile button */}
            <HeaderProfileNav />
          </div>
        </div>
  );
};

export default DashboardNavbar;
