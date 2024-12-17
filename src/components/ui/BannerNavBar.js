import React, { useState, useEffect } from 'react';
import Logo from '../zl.png';
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
} from 'react-icons/md';

const MainButton = ({ icon: Icon, label, isActive, onClick, isPrimary }) => (
  <li className="group relative">
    <button
      onClick={onClick}
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
    </button>
  </li>
);

const NavButton = ({ href, icon: Icon, label, isActive }) => {
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
      </a>
    </li>
  );
};

const BannerNavBar = () => {
  const [activeSection, setActiveSection] = useState('results');
  const [activeSubSection, setActiveSubSection] = useState('');

  const resultsButtons = [
    { href: "#overview", icon: MdDashboard, label: "Overview" },
    { href: "#recommendations", icon: MdListAlt, label: "Actions" },
    { href: "#health-metabolism", icon: MdMonitorHeart, label: "Health" },
    { href: "#gut-personality", icon: MdPsychology, label: "Personality" },
    { href: "#pathogen-detection", icon: MdBiotech, label: "Pathogens" }
  ];

  const participateButtons = [
    { href: "#daily-quiz", icon: MdQuiz, label: "Daily Quiz" },
    { href: "#health-tracking", icon: MdHealthAndSafety, label: "Track Health" },
    { href: "#progress", icon: MdTrendingUp, label: "Progress" },
    { href: "#experiments", icon: MdScience, label: "Experiments" },
    { href: "#tasks", icon: MdAssignment, label: "Tasks" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 80;
      let newActiveSection = activeSubSection; // Start with current active section

      // Sort sections by their position on the page
      const visibleSections = resultsButtons
        .map(button => {
          const section = document.getElementById(button.href.replace('#', ''));
          if (section) {
            return {
              href: button.href,
              top: section.offsetTop
            };
          }
          return null;
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      // Find the last section that we've scrolled past
      for (const section of visibleSections) {
        if (scrollPosition >= section.top) {
          newActiveSection = section.href;
        }
      }

      if (newActiveSection !== activeSubSection) {
        setActiveSubSection(newActiveSection);
      }
    };

    if (activeSection === 'results') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      setActiveSubSection('');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, activeSubSection]); // Added activeSubSection to dependencies

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-500 p-1 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between flex-nowrap"> {/* Added justify-between */}
        <img src={Logo} alt="Zymo Logo with Banner" className="h-8 flex-shrink-0" /> {/* Removed mr-2 */}
        
        <nav className="flex-shrink-0 ml-auto"> {/* Added ml-auto */}
          <ul className="flex space-x-1.5">
            <MainButton 
              icon={MdContentPaste}
              label="Results" 
              isActive={activeSection === 'results'}
              onClick={() => {
                setActiveSection('results');
                window.location.hash = ''; // Clear hash to exit settings
              }}
              isPrimary={true}
            />
            <MainButton 
              icon={MdGroup}
              label="Participate" 
              isActive={activeSection === 'participate'}
              onClick={() => {
                setActiveSection('participate');
                window.location.hash = ''; // Clear hash to exit settings
              }}
              isPrimary={true}
            />
            <li className="h-9 w-px bg-black/30 mx-2" /> {/* Vertical divider */}
            {(activeSection === 'results' ? resultsButtons : participateButtons).map((button, index) => (
              <NavButton 
                key={index}
                href={button.href}
                icon={button.icon}
                label={button.label}
                isActive={activeSubSection === button.href}
              />
            ))}
            <li className="h-9 w-px bg-black/30 mx-2" />
            <MainButton 
              icon={MdSettings}
              label="Settings" 
              isActive={activeSection === 'settings'}
              onClick={() => {
                setActiveSection('settings');
                window.location.hash = '#settings';
              }}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BannerNavBar;
