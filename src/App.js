import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import BannerNavBar from './components/ui/BannerNavBar';
import MicrobiomePersonalityV2 from './components/ui/MicrobiomePersonality';
import TotalScoreCard from './components/ui/TotalScoreCard';
import RecommendationsSection from './components/ui/RecommendationsSection';
import EnterotypeProfile from './components/ui/EnterotypeProfile';
import MEPSVisual from './components/ui/MEPSVisual';
import Achievements from './components/ui/Achievements';
import PathogenDetection from './components/ui/PathogenDetection';
import CommensalMicrobeDetection from './components/ui/CommensalMicrobeDetection';
import LevelSection from './components/ui/LevelSection';
import StreakStatus from './components/ui/StreakStatus';
import Settings from './components/ui/Settings';
import PhylaAndDiversityAnalysis from './components/ui/PhylaAndDiversityAnalysis';
import MicrobialCompositionOverview from './components/ui/MicrobialCompositionOverview';
import GutHealthSurvey from './components/ui/GutHealthSurvey'; // Import GutHealthSurvey component

const ComponentsOverview = () => {
  const reportData = {
    user_name: "Jane Smith",
    report_date: "November 10, 2024",
    level: {
      current: 3,
      title: "Health Challenger",
      points_to_next: 16
    },
    scores: {
      total: 54.5,
      base: 18.5,      action_points: 26,
      streak_bonus: 10
    },
    current_profile: {
      ETF: 0.6,
      ETB: 0.2,
      ETP: 0.1,
      ETX: 0.1,
      date: "November 10, 2024"
    },
    previous_profile: {
      ETF: 0.7,
      ETB: 0.15,
      ETP: 0.1,
      ETX: 0.05,
      date: "October 10, 2024"
    },
    streak: {
      days: 14,
      message: "🔥 Maximum bonus achieved!"
    },
    enterotype_profile: {
      ETF: 0.6,
      ETB: 0.2,
      ETP: 0.1,
      ETX: 0.1
    }
  };

  return (
    <div className="space-y-8">
      <div id="overview" className="component-section">
        <TotalScoreCard reportData={reportData} />
      </div>
      <div id="level-section" className="component-section">
        <LevelSection level={reportData.level} scores={reportData.scores} />
      </div>
      <div id="achievements" className="component-section">
        <Achievements />
      </div>
      <div id="enterotype-profile" className="component-section">
        <EnterotypeProfile reportData={reportData} />
      </div>
      <div id="recommendations" className="component-section">
        <RecommendationsSection />
      </div>
      <div id="health-metabolism" className="component-section">
        <MEPSVisual currentProfile={reportData.current_profile} />
      </div>
      <div id="gut-personality" className="component-section">
        <MicrobiomePersonalityV2 
          currentProfile={reportData.current_profile} 
          previousProfile={reportData.previous_profile} 
        />
      </div>
      <div id="pathogen-detection" className="component-section">
        <PathogenDetection />
      </div>
      <div id="commensal-microbe-detection" className="component-section">
        <CommensalMicrobeDetection />
      </div>
      <div id="phyla-diversity" className="component-section">
        <PhylaAndDiversityAnalysis />
      </div>
      <div id="microbial-composition" className="component-section">
        <MicrobialCompositionOverview />
      </div>
      <div id="streak-status" className="component-section">
        <StreakStatus streak={reportData.streak} />
      </div>
    </div>
  );
};

const MicrobiomeReport = () => {
  const location = useLocation(); // Use useLocation hook
  const reportData = {
    user_name: "Jane Smith",
    report_date: "November 10, 2024",
    level: {
      current: 3,
      title: "Health Challenger",
      points_to_next: 16
    },
    scores: {
      total: 54.5,
      base: 18.5,      action_points: 26,
      streak_bonus: 10
    },
    current_profile: {
      ETF: 0.6,
      ETB: 0.2,
      ETP: 0.1,
      ETX: 0.1,
      date: "November 10, 2024"
    },
    previous_profile: {
      ETF: 0.7,
      ETB: 0.15,
      ETP: 0.1,
      ETX: 0.05,
      date: "October 10, 2024"
    },
    streak: {
      days: 14,
      message: "🔥 Maximum bonus achieved!"
    },
    enterotype_profile: {
      ETF: 0.6,
      ETB: 0.2,
      ETP: 0.1,
      ETX: 0.1
    }
  };


  return (
    <div className="bg-transparent min-h-screen pt-16 md:pt-16 w-full max-w-4xl mx-auto bg-white p-4 md:p-8 space-y-6 md:space-y-8">
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/overview" element={<TotalScoreCard reportData={reportData} />} />
        <Route path="/level-section" element={<LevelSection level={reportData.level} scores={reportData.scores} />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/enterotype-profile" element={<EnterotypeProfile reportData={reportData} />} />
        <Route path="/recommendations" element={<RecommendationsSection />} />
        <Route path="/streak-status" element={<StreakStatus streak={reportData.streak} />} />
        <Route path="/health-metabolism" element={<MEPSVisual currentProfile={reportData.current_profile} />} />
        <Route path="/gut-personality" element={
          <MicrobiomePersonalityV2 
            currentProfile={reportData.current_profile} 
            previousProfile={reportData.previous_profile} 
          />
        } />
        <Route path="/pathogen-detection" element={<PathogenDetection />} />
        <Route path="/commensal-microbe-detection" element={<CommensalMicrobeDetection />} />
        <Route path="/phyla-diversity" element={<PhylaAndDiversityAnalysis />} />
        <Route path="/microbial-composition" element={<MicrobialCompositionOverview />} />
        <Route path="/components-overview" element={<ComponentsOverview />} />
        <Route path="/gut-health-survey" element={<GutHealthSurvey />} /> {/* Add new route */}
        <Route path="/" element={
          <>
            <TotalScoreCard reportData={reportData} />
            <LevelSection level={reportData.level} scores={reportData.scores} />
            {/* ...other components... */}
          </>
        } />
      </Routes>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <BannerNavBar />
    <Routes>
      {/* ...existing routes... */}
      <Route path="/gut-health-survey" element={<GutHealthSurvey />} /> {/* Add new route */}
    </Routes>
    <MicrobiomeReport />
  </BrowserRouter>
);

export default App;