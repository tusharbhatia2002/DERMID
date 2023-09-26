'use client'
// DashboardPage.js
// DashboardPage.js
import React, { useState } from 'react';
import DashboardNavbar from './DashboardNav';
import Sidebar from './Sidebar';
import SkinDiseasePrediction from './SkinDiseasePrediction'; // Import the SkinDiseasePrediction component
import MixedChart from './DERMIDCharts';
import { Bar } from 'react-chartjs-2';
import BarChart from './DERMIDCharts';

const DashboardPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      <Sidebar darkMode={darkMode} />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <div className="p-4">
          <BarChart /> {/* Use the DERMIDCharts component here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
