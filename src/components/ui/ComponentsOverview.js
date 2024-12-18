import React from 'react';
import TotalScoreCard from './TotalScoreCard';
import LevelSection from './LevelSection';
import Achievements from './Achievements';
import EnterotypeProfile from './EnterotypeProfile';
import RecommendationsSection from './RecommendationsSection';
import MEPSVisual from './MEPSVisual';
import MicrobiomePersonalityV2 from './MicrobiomePersonality';
import PathogenDetection from './PathogenDetection';
import CommensalMicrobeDetection from './CommensalMicrobeDetection';
import PhylaAndDiversityAnalysis from './PhylaAndDiversityAnalysis';
import MicrobialCompositionOverview from './MicrobialCompositionOverview';
import StreakStatus from './StreakStatus';

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
      base: 18.5,
      action_points: 26,
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

export default ComponentsOverview;
