import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/Card';
import { 
  Award, Trophy, Star, Flame, Activity, Info, Filter, Beaker, ArrowRight, Clock, BookOpen, 
  Check, AlertCircle, TrendingUp, Fingerprint, Heart, TreePine, BadgeAlert, SlidersHorizontal, 
  Scale, Waves, Timer, GitBranch
} from 'lucide-react';
import MicrobiomePersonalityV2 from './components/ui/MicrobiomePersonality'; // Import the personality component
import TotalScoreCard from './components/ui/TotalScoreCard'; // Import the new component
import RecommendationsSection from './components/ui/RecommendationsSection'; // Import the new component
import EnterotypeProfile from './components/ui/EnterotypeProfile'; // Import the new component
import MEPSVisual from './components/ui/MEPSVisual'; // Import the new component
import Achievements from './components/ui/Achievements'; // Import the new component
import PathogenDetection from './components/ui/PathogenDetection'; // Import the new component
import CommensalMicrobeDetection from './components/ui/CommensalMicrobeDetection'; // Import the new component
import LevelSection from './components/ui/LevelSection'; // Import the new component
import StreakStatus from './components/ui/StreakStatus'; // Import the new component
import Settings from './components/ui/Settings';

const MicrobiomeReport = () => {
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

  
  const [showChange] = useState(true);
  const [currentSection, setCurrentSection] = useState('report');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'settings') {
        setCurrentSection('settings');
      } else {
        setCurrentSection('report');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const profileToCoordinates = (profile) => {
    const firmicutesCenter = { x: 200, y: 100 };
    const bacteroidesCenter = { x: 300, y: 300 };
    const prevotellaCenter = { x: 100, y: 300 };

    const x = (firmicutesCenter.x * profile.ETF + 
               bacteroidesCenter.x * profile.ETB + 
               prevotellaCenter.x * profile.ETP) / 
              (profile.ETF + profile.ETB + profile.ETP);

    const y = (firmicutesCenter.y * profile.ETF + 
               bacteroidesCenter.y * profile.ETB + 
               prevotellaCenter.y * profile.ETP) / 
              (profile.ETF + profile.ETB + profile.ETP);

    return { x, y };
  };

  const currentCoords = profileToCoordinates(reportData.current_profile);
  const previousCoords = profileToCoordinates(reportData.previous_profile);

  // Add slight offset to prevent overlap
  const offset = 20; // pixels
  const angle = Math.atan2(currentCoords.y - previousCoords.y, currentCoords.x - previousCoords.x);
  
  const offsetCurrentCoords = {
    x: currentCoords.x + offset * Math.cos(angle),
    y: currentCoords.y + offset * Math.sin(angle)
  };
  
  const offsetPreviousCoords = {
    x: previousCoords.x - offset * Math.cos(angle),
    y: previousCoords.y - offset * Math.sin(angle)
  };

  const getChangeText = (current, previous) => {
    const diff = ((current - previous) * 100).toFixed(1);
    const sign = diff > 0 ? '+' : '';
    return `${sign}${diff}%`;
  };

  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }} className="pt-16 md:pt-16 w-full max-w-4xl mx-auto bg-white p-4 md:p-8 space-y-6 md:space-y-8">
      {currentSection === 'settings' ? (
        <Settings />
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Microbiome Health Report</h2>
            <div className="text-sm text-gray-100">
            </div>
          </div>

          <section id="overview">
            <TotalScoreCard reportData={reportData} />
          </section>

          <section id="level-section">
            <LevelSection level={reportData.level} scores={reportData.scores} />
          </section>

          <Achievements />
          
          <EnterotypeProfile reportData={reportData} />
          
          <section id="recommendations">
            <RecommendationsSection />
          </section>

          <StreakStatus streak={reportData.streak} />
          
          <section id="health-metabolism">
            <MEPSVisual currentProfile={reportData.current_profile} />
          </section>

          <section id="gut-personality">
            <MicrobiomePersonalityV2 
              currentProfile={reportData.current_profile} 
              previousProfile={reportData.previous_profile} 
            />
          </section>

          <section id="pathogen-detection">
            <PathogenDetection />
          </section>

          <CommensalMicrobeDetection />
        </>
      )}
    </div>
  );
};

export default MicrobiomeReport;
