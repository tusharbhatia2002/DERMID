'use client'
import React, { useState } from 'react';
import DashboardNavbar from '../DashboardNav';
import Sidebar from '../Sidebar';
import SkinDiseasePrediction from '../SkinDiseasePrediction';


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
<div className="flex-1 p-4 overflow-auto">
{/* Render the SkinDiseasePrediction component */}
<SkinDiseasePrediction />
</div>
</div>
</div>
);
};


export default DashboardPage;



