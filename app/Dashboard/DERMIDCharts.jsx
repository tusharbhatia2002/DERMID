"use client"
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  // Placeholder data for the skin disease bar chart
  const chartData = [
    {
      name: 'Acne',
      data: [32, 45, 52, 62, 38],
    },
    {
      name: 'Psoriasis',
      data: [22, 55, 41, 67, 32],
    },
    {
      name: 'Eczema',
      data: [45, 31, 49, 28, 54],
    },
    {
      name: 'Rosacea',
      data: [18, 34, 25, 46, 29],
    },
    {
      name: 'Melanoma',
      data: [12, 24, 19, 37, 16],
    },
  ];

  // Chart options
  const chartOptions = {
    chart: {
      type: 'bar',
      height: '350',
      background: '#f3f4f6',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yaxis: {
      title: {
        text: 'Number of Cases',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' cases';
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Skin Disease Cases (DERMID)</h2>
      <Chart options={chartOptions} series={chartData} type="bar" width="100%" height="350" />
    </div>
  );
};

export default BarChart;

