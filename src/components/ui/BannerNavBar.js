import React, { useState, useEffect } from 'react';
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
  MdSettings,
  MdViewList, // Add this import
} from 'react-icons/md'; // Import necessary icons

const MainButton = ({ to, icon: Icon, label, isActive, isPrimary }) => (
  <li className="group relative">
    <Link
      to={to}
      className={`flex flex-col items-center justify-center w-6 sm:w-8 h-8 sm:h-8 rounded-lg shadow transition-colors
        ${isPrimary && isActive
          ? 'bg-black text-white'
          : isActive
            ? 'bg-white text-black'
            : 'bg-black/20 text-white hover:bg-white/30'}`}
    >
      <Icon 
        className="w-6 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-1.5 group-hover:scale-90"
      />
      <span 
        className={`relative mt-1 text-[8px] sm:text-[8px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold group-hover:text-[8px] group-hover:px-2 group-hover:py-1 group-hover:rounded z-50 whitespace-nowrap
          ${isPrimary && isActive
            ? 'group-hover:bg-black group-hover:text-white' 
            : 'group-hover:bg-white group-hover:text-gray-800'}`}
      >
        {label}
      </span>
    </Link>
  </li>
);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.querySelector('.bg-gradient-to-br').offsetHeight;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  }
};

const NavButton = ({ to, icon: Icon, label, isActive, onClick }) => (
  <li className="group relative">
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-6 sm:w-8 h-8 sm:h-8 rounded-lg shadow transition-colors
        ${isActive 
          ? 'bg-white text-black' 
          : 'bg-black/20 text-white hover:bg-white/30'}`}
    >
      <Icon 
        className="w-6 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-1.5 group-hover:scale-90"
      />
      <span 
        className="relative mt-1 text-[8px] sm:text-[8px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold group-hover:text-[8px] group-hover:bg-white group-hover:text-gray-800 group-hover:px-2 group-hover:py-1 group-hover:rounded z-50 whitespace-nowrap"
      >
        {label}
      </span>
    </button>
  </li>
);

const BannerNavBar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [lastActiveSubbutton, setLastActiveSubbutton] = useState(''); // Add state for last active subbutton

  // Add scroll event listener for Components Overview page
  useEffect(() => {
    if (location.pathname === '/components-overview') {
      const handleScroll = () => {
        const sections = document.querySelectorAll('.component-section');
        let topmostSection = '';
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 8) { // Adjusted condition
            topmostSection = section.id;
          }
        });
        if (topmostSection) {
          setActiveSection(topmostSection);
          setLastActiveSubbutton(topmostSection); // Update last active subbutton only when a new section is detected
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const resultsButtons = [
    { to: "overview", icon: MdDashboard, label: "Overview" },
    { to: "level-section", icon: MdTrendingUp, label: "Level" },
    { to: "achievements", icon: MdHealthAndSafety, label: "Achievements" },
    { to: "enterotype-profile", icon: MdBiotech, label: "Enterotype" },
    { to: "recommendations", icon: MdListAlt, label: "Actions" },
    { to: "health-metabolism", icon: MdMonitorHeart, label: "Health" },
    { to: "gut-personality", icon: MdPsychology, label: "Personality" },
    { to: "pathogen-detection", icon: MdBiotech, label: "Pathogens" },
    { to: "commensal-microbe-detection", icon: MdScience, label: "Commensals" },
    { to: "phyla-diversity", icon: MdContentPaste, label: "Diversity" },
    { to: "microbial-composition", icon: MdAssignment, label: "Composition" }
  ];

  const participateButtons = [
    { to: "/daily-quiz", icon: MdQuiz, label: "Daily Quiz" },
    { to: "/health-tracking", icon: MdHealthAndSafety, label: "Track Health" },
    { to: "/streak-status", icon: MdTrendingUp, label: "Streak" },
    { to: "/progress", icon: MdTrendingUp, label: "Progress" },
    { to: "/experiments", icon: MdScience, label: "Experiments" },
    { to: "/tasks", icon: MdAssignment, label: "Tasks" }
  ];

  // Modified condition to check for components overview
  const isComponentsOverview = location.pathname === '/components-overview' || !location.pathname.startsWith('/participate');
  const isParticipateSection = location.pathname.startsWith('/participate');

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between flex-nowrap">
        <Link to="/">
          <img src={Logo} alt="Zymo Logo with Banner" className="h-8 flex-shrink-0" />
        </Link>
        <nav className="flex-shrink-0 ml-auto overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-1.5 px-2">
            <MainButton 
              to="/components-overview"
              icon={MdViewList}
              label="Components" 
              isActive={isComponentsOverview}
              isPrimary={true}
            />
            <MainButton 
              to="/participate"
              icon={MdGroup}
              label="Participate" 
              isActive={isParticipateSection}
              isPrimary={true}
            />
            <li className="h-9 w-px bg-black/30 mx-2" />
            <div className="flex space-x-1.5 overflow-x-auto scrollbar-hide">
              {(isComponentsOverview ? resultsButtons : participateButtons).map((button, index) => (
                <NavButton 
                  key={index}
                  to={isComponentsOverview ? "#" : button.to}
                  icon={button.icon}
                  label={button.label}
                  isActive={isComponentsOverview ? activeSection === button.to || lastActiveSubbutton === button.to : location.pathname === button.to}
                  onClick={isComponentsOverview ? () => { scrollToSection(button.to); setLastActiveSubbutton(button.to); } : undefined}
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