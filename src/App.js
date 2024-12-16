import React, { useState } from 'react';
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
      message: "🔥 14+ day streak! Maximum bonus achieved!"
    },
    enterotype_profile: {
      ETF: 0.6,
      ETB: 0.2,
      ETP: 0.1,
      ETX: 0.1
    },
    achievements: [
      {
        icon: "🏆",
        name: "Firmicutes Fighter",
        description: "5+ F-type distancing actions"
      },
      {
        icon: "🌱",
        name: "Gut Guardian",
        description: "Reached Level 3"
      },
      {
        icon: "🔄",
        name: "Consistency Champion",
        description: "Maintained a 14-day streak"
      }
    ]
  };

  
  const [showChange] = useState(true);

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
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }} className="pt-16 w-full max-w-4xl mx-auto bg-white p-4 md:p-8 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      </div>
        <TotalScoreCard reportData={reportData} /> {/* Remove CreditScoreMeter prop */}

        <LevelSection level={reportData.level} scores={reportData.scores} /> {/* Use the new component */}

      {/* Achievements */}
      <Achievements achievements={reportData.achievements} /> {/* Use the new component */}
      
      {/* Profile Change */}
      <EnterotypeProfile reportData={reportData} />
      
      {/* Recommendations Section */}
      <RecommendationsSection />

      {/* Streak Status */}
      <Card className="bg-gradient-to-br from-cyan-100 via-pink-100 to-orange-100">
        <CardContent>
          <div className="text-center py-3">
            <div className="text-xl md:text-2xl mb-1">🔥</div>
            <div className="font-bold text-orange-600 responsive-text-md">{reportData.streak.days} Day Streak</div>
            <div className="responsive-text-xs text-gray-600">{reportData.streak.message}</div>
          </div>
        </CardContent>
      </Card>

      {/* MEPSVisual */}
      <MEPSVisual currentProfile={reportData.current_profile} />

      {/* Personality Profile Section */}
      <MicrobiomePersonalityV2 
        currentProfile={reportData.current_profile} 
        previousProfile={reportData.previous_profile} 
      />

      {/* Pathogen Detection Section */}
      <PathogenDetection /> {/* Remove pathogenData prop */}

      {/* Commensal Microbe Detection Section */}
      <CommensalMicrobeDetection /> {/* Add the new section */}
    </div>
  );
};

export default MicrobiomeReport;
