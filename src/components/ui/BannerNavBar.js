// src/components/ui/BannerNavBar.js
import React from 'react';
import Logo from '../zl.png';

const BannerNavBar = () => (
  <div className="bg-yellow-300 p-4 w-full">

    <div className="flex justify-between items-center">
      <img src={Logo} alt="Zymo Logo with Banner" className="h-8" />
      <h1 className="text-2xl font-bold text-gray-800">Microbiome Health Report</h1>
      <p className="text-gray-600">{"Jane Doe"} {"11/12/24"}</p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a 
              href="#home" 
              className="text-black bg-white rounded px-4 py-2 shadow hover:bg-gray-100 outline-green-500 outline-2 outline"
            >
              Summary
            </a>
          </li>
          <li>
            <a 
              href="#details" 
              className="text-black bg-white rounded px-4 py-2 shadow hover:bg-gray-100"
            >
              In-Depth
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default BannerNavBar;