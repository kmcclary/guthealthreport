import React from 'react';
import Logo from '../zl.png';
import { 
  MdDashboard, 
  MdListAlt,
  MdMonitorHeart,
  MdPsychology,
  MdBiotech
} from 'react-icons/md';

const NavButton = ({ href, icon: Icon, label }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 70; // Changed to 70 - slightly more offset than before
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <li className="group relative">
      <a 
        href={href}
        onClick={handleClick}
        className="flex flex-col items-center justify-center bg-white text-black w-10 sm:w-16 h-12 sm:h-11 rounded-lg shadow transition-colors hover:bg-gray-100"
      >
        <Icon 
          className="w-8 h-6 sm:w-12 sm:h-10 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-1.5 group-hover:scale-90"
        />
        <span 
          className="relative mt-1 text-[10px] sm:text-xs text-gray-800 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold group-hover:text-xs group-hover:bg-white group-hover:px-2 group-hover:py-1 group-hover:rounded z-50 whitespace-nowrap"
        >
          {label}
        </span>
      </a>
    </li>
  );
};

const BannerNavBar = () => (
  <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1.5 w-full fixed top-0 left-0 z-50">
    <div className="flex items-center flex-nowrap">
      <img src={Logo} alt="Zymo Logo with Banner" className="h-10 flex-shrink-0 mr-2" />
      <div className="flex-shrink min-w-0 flex-1">
      </div>
      <nav className="flex-shrink-0">
        <ul className="flex space-x-2">
          <NavButton href="#overview" icon={MdDashboard} label="Overview" />
          <NavButton href="#recommendations" icon={MdListAlt} label="Actions" />
          <NavButton href="#health-metabolism" icon={MdMonitorHeart} label="Health" />
          <NavButton href="#gut-personality" icon={MdPsychology} label="Personality" />
          <NavButton href="#pathogen-detection" icon={MdBiotech} label="Pathogens" />
        </ul>
      </nav>
    </div>
  </div>
);

export default BannerNavBar;
