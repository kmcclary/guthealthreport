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
       className="text-black bg-white rounded-full p-1.5 shadow hover:bg-gray-100 inline-flex items-center justify-center">
      <Icon className="w-4 h-4" />
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 
                     bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </a>
  </li>
);

const BannerNavBar = () => (
  <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1.5 w-full fixed top-0 left-0 z-50">
    <div className="flex items-center flex-nowrap">
      <img src={Logo} alt="Zymo Logo with Banner" className="h-10 flex-shrink-0 mr-2" />
      <div className="flex flex-col flex-shrink min-w-0 flex-1">
        <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
          Microbiome Health Report
        </h1>
        <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
          {"Jane Doe"} {"11/12/24"}
        </p>
      </div>
      <nav className="flex-shrink-0">
        <ul className="flex space-x-2">
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