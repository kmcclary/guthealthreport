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
        description: "Completed 5+ F-type distancing actions"
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
    ],
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

        <Card className="bg-gradient-to-br from-white to-yellow-100">
    <CardHeader className="p-4">
      <CardTitle className="flex items-center gap-2">
        <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
        <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent responsive-text-md">
          Level {reportData.level.current}: {reportData.level.title}
        </span>
        </CardTitle>
    </CardHeader>
    <CardContent>
    <div className="space-y-0">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full h-4"
            style={{ width: `${(reportData.scores.total % 50) * 5}%` }}
          />
        </div>
        <p className="responsive-text-sm text-gray-600">
          {reportData.level.points_to_next} points to next level
        </p>
      

      </div>
    </CardContent>
  </Card>


      {/* Achievements */}
      <Card className="bg-gradient-to-br from-white to-purple-100">
        <CardHeader className="p-4">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent responsive-text-md">
              Achievements
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {reportData.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center md:block gap-3"
              >
                <div className="text-4xl md:text-4xl md:mb-1 achievement-icon flex-shrink-0 flex items-center">{achievement.icon}</div>
                <div>
                  <h3 className="font-bold responsive-text-sm">{achievement.name}</h3>
                  <p className="responsive-text-xs text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
    </div>
  );
};

export default MicrobiomeReport;
