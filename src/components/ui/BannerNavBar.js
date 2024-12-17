import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../zl.png'; // Ensure this path is correct
import { 
  MdDashboard, 
  MdListAlt,
  MdMonitorHeart,
  MdPsychology,
  MdBiotech,
  MdAssignment,
  MdQuiz,
  MdHealthAndSafety,
  MdTrendingUp,
  MdScience,
  MdContentPaste,
  MdGroup,
  MdSettings
} from 'react-icons/md'; // Import necessary icons

const MainButton = ({ to, icon: Icon, label, isActive, isPrimary }) => (
  <li className="group relative">
    <Link
      to={to}
      className={`flex flex-col items-center justify-center w-8 sm:w-12 h-10 sm:h-9 rounded-lg shadow transition-colors
        ${isPrimary && isActive
          ? 'bg-black text-white'
          : isActive
            ? 'bg-white text-black'
            : 'bg-black/20 text-white hover:bg-white/30'}`}
    >
      <Icon 
        className="w-6 h-5 sm:w-10 sm:h-8 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-1.5 group-hover:scale-90"
      />
      <span 
        className={`relative mt-1 text-[8px] sm:text-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold group-hover:text-[10px] group-hover:px-2 group-hover:py-1 group-hover:rounded z-50 whitespace-nowrap
          ${isPrimary && isActive
            ? 'group-hover:bg-black group-hover:text-white' 
            : 'group-hover:bg-white group-hover:text-gray-800'}`}
      >
        {label}
      </span>
    </Link>
  </li>
);

const NavButton = ({ to, icon: Icon, label, isActive }) => (
  <li className="group relative">
    <Link 
      to={to}
      className={`flex flex-col items-center justify-center w-8 sm:w-12 h-10 sm:h-9 rounded-lg shadow transition-colors
        ${isActive 
          ? 'bg-white text-black' 
          : 'bg-black/20 text-white hover:bg-white/30'}`}
    >
      <Icon 
        className="w-6 h-5 sm:w-10 sm:h-8 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-1.5 group-hover:scale-90"
      />
      <span 
        className="relative mt-1 text-[8px] sm:text-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold group-hover:text-[10px] group-hover:bg-white group-hover:text-gray-800 group-hover:px-2 group-hover:py-1 group-hover:rounded z-50 whitespace-nowrap"
      >
        {label}
      </span>
    </Link>
  </li>
);

const BannerNavBar = () => {
  const location = useLocation();

  const resultsButtons = [
    { to: "/overview", icon: MdDashboard, label: "Overview" },
    { to: "/level-section", icon: MdTrendingUp, label: "Level" },
    { to: "/achievements", icon: MdHealthAndSafety, label: "Achievements" },
    { to: "/enterotype-profile", icon: MdBiotech, label: "Enterotype" },
    { to: "/recommendations", icon: MdListAlt, label: "Actions" },
    { to: "/health-metabolism", icon: MdMonitorHeart, label: "Health" },
    { to: "/gut-personality", icon: MdPsychology, label: "Personality" },
    { to: "/pathogen-detection", icon: MdBiotech, label: "Pathogens" },
    { to: "/commensal-microbe-detection", icon: MdScience, label: "Commensals" },
    { to: "/phyla-diversity", icon: MdContentPaste, label: "Diversity" },
    { to: "/microbial-composition", icon: MdAssignment, label: "Composition" }
  ];

  const participateButtons = [
    { to: "/daily-quiz", icon: MdQuiz, label: "Daily Quiz" },
    { to: "/health-tracking", icon: MdHealthAndSafety, label: "Track Health" },
    { to: "/streak-status", icon: MdTrendingUp, label: "Streak" },
    { to: "/progress", icon: MdTrendingUp, label: "Progress" },
    { to: "/experiments", icon: MdScience, label: "Experiments" },
    { to: "/tasks", icon: MdAssignment, label: "Tasks" }
  ];

  // Modified condition to default to results section
  const isResultsSection = !location.pathname.startsWith('/participate');

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between flex-nowrap">
        <Link to="/">
          <img src={Logo} alt="Zymo Logo with Banner" className="h-8 flex-shrink-0" />
        </Link>
        <nav className="flex-shrink-0 ml-auto overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-1.5 px-2">
            <MainButton 
              to="/results"
              icon={MdContentPaste}
              label="Results" 
              isActive={isResultsSection}
              isPrimary={true}
            />
            <MainButton 
              to="/participate"
              icon={MdGroup}
              label="Participate" 
              isActive={!isResultsSection}
              isPrimary={true}
            />
            <li className="h-9 w-px bg-black/30 mx-2" />
            <div className="flex space-x-1.5 overflow-x-auto scrollbar-hide">
              {(isResultsSection ? resultsButtons : participateButtons).map((button, index) => (
                <NavButton 
                  key={index}
                  to={button.to}
                  icon={button.icon}
                  label={button.label}
                  isActive={location.pathname === button.to}
                />
              ))}
            </div>
            <li className="h-9 w-px bg-black/30 mx-2" />
            <MainButton 
              to="/settings"
              icon={MdSettings}
              label="Settings" 
              isActive={location.pathname === '/settings'}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BannerNavBar;