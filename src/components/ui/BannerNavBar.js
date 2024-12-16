// src/components/ui/BannerNavBar.js
import React from 'react';
import Logo from '../zl.png';
import { 
  MdDashboard, 
  MdPersonOutline, 
  MdListAlt,
  MdScience,
  MdDescription,
  MdGroup,
  MdHistory,
  MdSettings 
} from 'react-icons/md';

const NavButton = ({ href, icon: Icon, label }) => (
  <li className="relative group">
    <a href={href} 
       className="text-black bg-white rounded-full p-2 shadow hover:bg-gray-100 inline-flex items-center justify-center">
      <Icon className="w-5 h-5" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                     bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </a>
  </li>
);

const BannerNavBar = () => (
  <div className="bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-500 p-4 w-full fixed top-0 left-0 z-50">
    <div className="flex justify-between items-center">
      <img src={Logo} alt="Zymo Logo with Banner" className="h-8" />
      <h1 className="text-2xl font-bold text-gray-800">Microbiome Health Report</h1>
      <p className="text-gray-600">{"Jane Doe"} {"11/12/24"}</p>
      <nav>
        <ul className="flex space-x-3">
          <NavButton href="#overview" icon={MdDashboard} label="Overview" />
          <NavButton href="#gut-personality" icon={MdPersonOutline} label="Gut Personality" />
          <NavButton href="#recommendations" icon={MdListAlt} label="Action Recommendations" />
          <NavButton href="#latest-science" icon={MdScience} label="Latest Science" />
          <NavButton href="#methods" icon={MdDescription} label="Detailed Methods" />
          <NavButton href="#participate" icon={MdGroup} label="Participate" />
          <NavButton href="#history" icon={MdHistory} label="My History" />
          <NavButton href="#settings" icon={MdSettings} label="Account Settings" />
        </ul>
      </nav>
    </div>
  </div>
);

export default BannerNavBar;