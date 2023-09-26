// Dashboard.js
import React from 'react';
import DashboardNavbar from './DashboardNav';
import Sidebar from './Sidebar';

const MyDashboard = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'white'} h-screen text-${darkMode ? 'white' : 'black'} transition-colors duration-500`}>
      <DashboardNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default MyDashboard;
