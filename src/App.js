import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/Card';
import { 
  Award, Trophy, Star, Flame, Activity, Info, Filter, Beaker, ArrowRight, Clock, BookOpen, 
  Check, AlertCircle, TrendingUp, Fingerprint, Heart, TreePine, BadgeAlert, SlidersHorizontal, 
  Scale, Waves, Timer, GitBranch
} from 'lucide-react';
import MicrobiomePersonalityV2 from './MicrobiomePersonality'; // Import the personality component
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
        description: "Completed 5+ actions that distance from Firmicutes"
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
    recommendations: [
      // High Priority Items (previous ones remain)
      {
        id: 1,
        name: "Increase Fiber-Rich Diet",
        points: 2,
        priority: "High",
        impact: ["Distances from ETF", "Approaches ETB, ETP"],
        description: "A high-fiber diet promotes beneficial bacteria growth and helps maintain healthy gut composition.",
        scientificContext: {
          keyFindings: [
            "Increases Bacillota (Akkermansia, Bacteroides, Bifidobacterium, Prevotella, Roseburia)",
            "Decreases Proteobacteria, Firmicutes, Ruminococcus, Salmonella"
          ],
          impactFactor: 5,
          references: [
            {
              doi: "10.1038/nature12820",
              key_point: "High-fiber diet promotes microbiome diversity and reduces obesity-associated bacteria"
            }
          ]
        },
        implementation: [
          "Start with 25-30g of fiber daily",
          "Include diverse sources: vegetables, fruits, legumes, whole grains",
          "Increase intake gradually to minimize digestive discomfort",
          "Maintain adequate water intake"
        ],
        timeframe: "2-4 weeks for initial microbiome changes"
      },
      // Medium Priority Items (new)
      {
        id: 4,
        name: "Drink Oolong Tea",
        points: 1,
        priority: "Medium",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Oolong tea contains compounds that can beneficially modify gut bacteria composition.",
        scientificContext: {
          keyFindings: [
            "Increases Bacteroidetes",
            "Decreases Firmicutes"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1039/C7FO01570D",
              key_point: "Oolong tea polyphenols influence gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Start with 1-2 cups daily",
          "Best consumed between meals",
          "Choose high-quality tea leaves",
          "Avoid adding artificial sweeteners"
        ],
        timeframe: "3-4 weeks for observable changes"
      },
      {
        id: 5,
        name: "Eat Allium Products",
        points: 1,
        priority: "Medium",
        impact: ["Distances from ETP"],
        description: "Garlic, onions, and other allium vegetables support beneficial gut bacteria.",
        scientificContext: {
          keyFindings: [
            "Increases Lachnospiraceae, Bifidobacterium, Faecalibacterium",
            "Decreases Akkermansia, Clostridium difficile, Escherichia coli"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1016/j.vetmic.2009.12.025",
              key_point: "Allium products demonstrate prebiotic effects"
            }
          ]
        },
        implementation: [
          "Add 1-2 cloves of garlic or half an onion daily",
          "Include in cooking rather than raw consumption",
          "Combine with other vegetables for synergistic effects",
          "Consider fermented alternatives like black garlic"
        ],
        timeframe: "2-3 weeks for microbiome adaptation"
      },
      // Low Priority Items (new)
      {
        id: 6,
        name: "Drink Rice Wine",
        points: 0.5,
        priority: "Low",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Traditional rice wine can contribute to beneficial gut bacteria composition.",
        scientificContext: {
          keyFindings: [
            "Increases Bacteroidetes, Lactobacillaceae, Muribaculum intestinale",
            "Decreases Firmicutes"
          ],
          impactFactor: 3,
          references: [
            {
              doi: "10.1016/j.lwt.2024.116152",
              key_point: "Rice wine consumption associated with beneficial microbiota changes"
            }
          ]
        },
        implementation: [
          "Limited consumption (1 small serving daily)",
          "Preferably with meals",
          "Choose traditional preparation methods",
          "Monitor overall alcohol intake"
        ],
        timeframe: "4-6 weeks for gradual changes"
      },
      {
        id: 7,
        name: "Eat Black Currant",
        points: 0.5,
        priority: "Low",
        impact: ["Distances from ETB"],
        description: "Black currants contain compounds that may modulate gut bacteria populations.",
        scientificContext: {
          keyFindings: [
            "Increases Bifidobacterium, Lactobacillus",
            "Decreases Bacteroides, Clostridium"
          ],
          impactFactor: 3,
          references: [
            {
              doi: "10.1002/ptr.5009",
              key_point: "Black currant anthocyanins influence gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Add 1/4 cup fresh berries daily",
          "Consider supplements in off-season",
          "Combine with other berries",
          "Store properly to maintain active compounds"
        ],
        timeframe: "3-4 weeks for subtle changes"
      },
      {
        id: 8,
        name: "Chew Thoroughly",
        points: 0.5,
        priority: "Low",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Thorough chewing improves digestion and nutrient absorption, indirectly affecting gut bacteria.",
        scientificContext: {
          keyFindings: [
            "Increases Bacteroidota, Bacteroides, Prevotella",
            "Decreases Actinomycetota, Bacillota, Blautia, Eubacterium"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1038/S41598-022-18095-X",
              key_point: "Chewing behavior influences gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Chew each bite 20-30 times",
          "Eat slowly and mindfully",
          "Put utensils down between bites",
          "Focus on texture changes during chewing"
        ],
        timeframe: "2-3 weeks for digestive adaptation"
      }
      // Add other recommendations here...
    ],
    past_recommendations: [
      {
        action: "Drink herbal/flavonoid teas",
        points: 24,
        completions: 12,
        impact: "Distances ETF"
      },
      {
        action: "Fiber-rich diet",
        points: 14,
        completions: 7,
        impact: "Distances ETF"
      },
      {
        action: "Avoid artificial sweeteners",
        points: 8,
        completions: 8,
        impact: "Approaches ETB"
      }
    ],

  };

  
  const CreditScoreMeter = ({ value, levelTitle }) => {
    const meterRanges = [
      { label: 'Very Poor', color: '#f44336', min: 0, max: 20 },
      { label: 'Poor', color: '#ff9800', min: 20, max: 40 },
      { label: 'Fair', color: '#ffeb3b', min: 40, max: 60 },
      { label: 'Good', color: '#8bc34a', min: 60, max: 80 },
      { label: 'Excellent', color: '#4caf50', min: 80, max: 100 },
    ];
  
    const currentRange = meterRanges.find(range => value >= range.min && value < range.max) || meterRanges[meterRanges.length - 1];
    const rotation = (value / 100) * 180 + 180; // Adjust rotation to start from bottom
  
    // Helper function to create SVG arc path
    const createArc = (startAngle, endAngle, radius) => {
      // Convert angles from degrees to radians
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
  
      // Calculate start and end points
      const startX = 100 + radius * Math.cos(startRad);
      const startY = 100 + radius * Math.sin(startRad);
      const endX = 100 + radius * Math.cos(endRad);
      const endY = 100 + radius * Math.sin(endRad);
  
      // Determine if the arc should be drawn the long way around
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
    };
  
    return (
      <div className="relative w-48 h-12 mx-auto">
        <svg viewBox="-60 0 300 200">
          {/* Background arc */}
          <path
            d={createArc(180, 360, 80)}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Colored range arcs */}
          {meterRanges.map((range, index) => {
            const startAngle = (range.min / 100) * 180 + 180;
            const endAngle = (range.max / 100) * 180 + 180;
            return (
              <path
                key={index}
                d={createArc(startAngle, endAngle, 80)}
                fill="none"
                stroke={range.color}
                strokeWidth="12"
                strokeLinecap="round"
              />
            );
          })}
          {/* Pointer */}
          <line
            x1="100"
            y1="100"
            x2={100 + 60 * Math.cos((rotation * Math.PI) / 180)}
            y2={100 + 60 * Math.sin((rotation * Math.PI) / 180)}
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="4" fill="black" />
        </svg>
        <div className="absolute bottom-5 left-2 transform translate-x-5 text-center">
          <div className="text-[20px] font-bold" style={{ color: 'black', opacity: '80%'}}>
            {currentRange.label}
          </div>
        </div>
      </div>
    );
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
    
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }} className="pt-24 md:pt-16 w-full max-w-4xl mx-auto bg-white p-8 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      </div>
        <TotalScoreCard reportData={reportData} CreditScoreMeter={CreditScoreMeter} /> {/* Use the new component */}

        <Card className="bg-gradient-to-br from-white to-yellow-100">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
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
        <p className="text-sm text-gray-600">
          {reportData.level.points_to_next} points to next level
        </p>
      

      </div>
    </CardContent>
  </Card>


      {/* Achievements */}
      <Card className="bg-gradient-to-br from-white to-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reportData.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h3 className="font-bold text-sm">{achievement.name}</h3>
                <p className="text-xs text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>



      {/* Profile Change */}
      <EnterotypeProfile reportData={reportData} /> {/* Use the new component */}
      {/* Recommendations Section */}
      <RecommendationsSection reportData={reportData} />

      {/* Recent Actions */}
      <Card className="bg-gradient-to-br from-white to-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Recent Actions
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.past_recommendations.map((action, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{action.action}</h3>
                    <p className="text-sm text-gray-600">{action.impact}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+{action.points} pts</div>
                    <div className="text-sm text-gray-600">{action.completions}x completed</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Status */}

        <Card className="bg-gradient-to-br from-cyan-100 via-pink-100 to-orange-100">
          <CardContent>
            <div className="text-center py-4">
              <div className="text-2xl mb-2">🔥</div>
              <div className="font-bold text-orange-600">{reportData.streak.days} Day Streak</div>
              <div className="text-sm text-gray-600">{reportData.streak.message}</div>
            </div>
          </CardContent>
        </Card>


            {/* Add the MEPSVisual component here */}
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
