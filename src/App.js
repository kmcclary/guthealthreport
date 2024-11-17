import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/Card';
import { Award, Trophy, Star, Flame, Activity, Info, Filter, Beaker, ArrowRight, Clock, BookOpen, Check, AlertCircle, TrendingUp } from 'lucide-react';
import BannerNavBar from './components/ui/BannerNavBar';

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
        <svg viewBox="-80 0 300 200">
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
  const [showChange, setShowChange] = useState(true);

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

  // Calculate midpoint for arrow
  const midpoint = {
    x: (offsetCurrentCoords.x + offsetPreviousCoords.x) / 2,
    y: (offsetCurrentCoords.y + offsetPreviousCoords.y) / 2
  };

  // Calculate arrow rotation angle
  const arrowAngle = (Math.atan2(
    offsetCurrentCoords.y - offsetPreviousCoords.y,
    offsetCurrentCoords.x - offsetPreviousCoords.x
  ) * 180 / Math.PI);




  const RecommendationsSection = () => {
    const [selectedAction, setSelectedAction] = useState(null);
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [showAll, setShowAll] = useState(false);
  
    const filteredRecommendations = priorityFilter === 'all'
      ? reportData.recommendations
      : reportData.recommendations.filter(rec => rec.priority.toLowerCase() === priorityFilter.toLowerCase());
  
    const displayedRecommendations = showAll ? filteredRecommendations : filteredRecommendations.slice(0, 3);
  
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Recommended Actions
            </CardTitle>
            <CardDescription>
              Personalized actions to improve your gut microbiome composition
            </CardDescription>
            

          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              {displayedRecommendations.map(rec => (
                <div key={rec.id}>
                  <div 
                    className={`p-4 rounded-lg border transition-all cursor-pointer
                      ${selectedAction === rec.id ? 
                        'bg-blue-50 border-blue-200' : 
                        'bg-gray-50 border-gray-200 hover:bg-blue-50'}`}
                    onClick={() => setSelectedAction(selectedAction === rec.id ? null : rec.id)}
                  >
                    {/* Action Header */}
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium flex items-center gap-2">
                          {rec.name}
                          <span className={`px-2 py-1 rounded-full text-xs
                            ${rec.priority === 'High' ? 'bg-red-100 text-red-700' : 
                              rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-gray-100 text-gray-600'}`}>
                            {rec.priority}
                          </span>
                        </h3>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">+{rec.points} pts</div>
                      </div>
                    </div>
  
                    {/* Expanded Content */}
                    {selectedAction === rec.id && (
                      <div className="mt-4 space-y-4 border-t pt-4">
                        {/* Impact */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            Microbiome Impact
                          </h4>
                          <ul className="ml-6 space-y-1">
                            {rec.impact.map((impact, idx) => (
                              <li key={idx} className="text-sm flex items-center gap-2">
                                <ArrowRight className="h-3 w-3 text-gray-400" />
                                {impact}
                              </li>
                            ))}
                          </ul>
                        </div>
  
                        {/* Scientific Context */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <Beaker className="h-4 w-4 text-purple-500" />
                            Scientific Evidence
                          </h4>
                          <div className="ml-6 space-y-2">
                            <div className="text-sm space-y-1">
                              {rec.scientificContext.keyFindings.map((finding, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span>{finding}</span>
                                </div>
                              ))}
                            </div>
                            <div className="text-sm text-gray-600">
                              Impact Factor: {rec.scientificContext.impactFactor}/5
                            </div>
                          </div>
                        </div>
  
                        {/* Implementation Steps */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            Implementation Guide
                          </h4>
                          <ul className="ml-6 space-y-1">
                            {rec.implementation.map((step, idx) => (
                              <li key={idx} className="text-sm flex items-center gap-2">
                                <ArrowRight className="h-3 w-3 text-gray-400" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
  
                        {/* Timeframe */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            Expected Timeframe
                          </h4>
                          <p className="ml-6 text-sm">{rec.timeframe}</p>
                        </div>
  
                        {/* References */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-gray-500" />
                            Scientific References
                          </h4>
                          <div className="ml-6 space-y-2">
                            {rec.scientificContext.references.map((ref, idx) => (
                              <div key={idx} className="text-sm space-y-1">
                                <div className="font-medium">DOI: {ref.doi}</div>
                                <div className="text-gray-600">{ref.key_point}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Show More/Less Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  










  
  return (
    
    <div className="w-full max-w-4xl mx-auto bg-white p-8 space-y-6">
      <BannerNavBar />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">






      </div>


      <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Level {reportData.level.current}: {reportData.level.title}
              </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-0">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-blue-600 rounded-full h-4"
                  style={{ width: `${(reportData.scores.total % 50) * 2}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                {reportData.level.points_to_next} points to next level
              </p>
            

            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h- w-5 text-green-700" />
              Total Score
            </CardTitle>
          </CardHeader>


          <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pl-[30px]">

            <div className="text-6xl font-bold pl-[5px]">


              {reportData.scores.total.toFixed(1)}
            </div>
            <div className="mt-2 space-y-1 text-sm pl-[0px] pr-[80px] font-bold">
              <div className="flex justify-between text-green-1000">
                <span>Base Score:</span>
                <span>{reportData.scores.base.toFixed(1)}</span>
              </div>
              <div className="flex justify-between text-green-800">
                <span>Action Points:</span>
                <span>+{reportData.scores.action_points.toFixed(1)}</span>
              </div>
              <div className="flex justify-between text-green-800">
                <span>Streak Bonus:</span>
                <span>+{reportData.scores.streak_bonus.toFixed(1)}</span>
              </div>
              </div>
              <CreditScoreMeter value={reportData.scores.total} levelTitle={reportData.level.title} />

            </div>

          </CardContent>

        </Card>


      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reportData.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
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
      <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-500" />
          Enterotype Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">




            <svg viewBox="-30 150 550 160" className="w-full h-full">
              <defs>
                <radialGradient id="firmicutesGradient" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </radialGradient>
                <radialGradient id="bacteroidesGradient" cx="70%" cy="70%" r="70%">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                </radialGradient>
                <radialGradient id="prevotellaGradient" cx="30%" cy="70%" r="70%">
                  <stop offset="0%" stopColor="rgba(249, 115, 22, 0.5)" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                </radialGradient>

                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="gray"/>
                </marker>
              </defs>

              <path d="M200,100 Q300,150 250,250 Q200,350 150,250 Q100,150 200,100"
                    fill="url(#firmicutesGradient)"
                    className="opacity-70" />
              <path d="M250,250 Q350,200 300,350 Q200,400 150,350 Q200,300 250,250"
                    fill="url(#bacteroidesGradient)"
                    className="opacity-70" />
              <path d="M150,250 Q100,300 50,350 Q150,400 200,350 Q200,300 150,250"
                    fill="url(#prevotellaGradient)"
                    className="opacity-70" />

              <text x="200" y="100" textAnchor="middle" className="fill-blue-600 font-bold">
                Firmicutes ET
              </text>
              <text x="300" y="350" textAnchor="middle" className="fill-green-600 font-bold">
                Bacteroides ET
              </text>
              <text x="100" y="350" textAnchor="middle" className="fill-orange-600 font-bold">
                Prevotella ET
              </text>

              {showChange && (
                <>
                  {/* Connection line with animated dots */}
                  <line
                    x1={offsetPreviousCoords.x}
                    y1={offsetPreviousCoords.y}
                    x2={offsetCurrentCoords.x}
                    y2={offsetCurrentCoords.y}
                    stroke="gray"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrowhead)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="8"
                      to="0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>

                  {/* Previous position */}
                  <g transform={`translate(${offsetPreviousCoords.x},${offsetPreviousCoords.y})`}>
                    <circle r="20" fill="rgba(0, 0, 255, 0.1)" className="animate-ping" />
                    <g transform="translate(-12, -25) scale(0.8)">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24c0-6.6-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                            fill="blue" />
                      <circle cx="12" cy="12" r="4" fill="white" />
                    </g>
                    <text y="15" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Previous</text>
                  </g>
                </>
              )}

              {/* Current position */}
              <g transform={`translate(${offsetCurrentCoords.x},${offsetCurrentCoords.y})`}>
                <circle r="20" fill="rgba(255, 0, 0, 0.1)" className="animate-ping" />
                <g transform="translate(-12, -25) scale(0.8)">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24c0-6.6-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                        fill="red" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                </g>
                <text y="15" textAnchor="middle" className="text-xs fill-red-600 font-medium">Current</text>
              </g>
            </svg>
          </div>

          <div className="space-y-6">
            {/* Rest of the component remains the same */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <Info className="h-4 w-4" />
                Enterotype Distribution
              </h3>

            </div>

            <div className="space-y-3 pr-[30px]">
              {[
                { label: 'Firmicutes', color: 'bg-blue-600', current: reportData.current_profile.ETF, previous: reportData.previous_profile.ETF },
                { label: 'Bacteroides', color: 'bg-green-600', current: reportData.current_profile.ETB, previous: reportData.previous_profile.ETB },
                { label: 'Prevotella', color: 'bg-orange-600', current: reportData.current_profile.ETP, previous: reportData.previous_profile.ETP },
                { label: 'Other/Mixed', color: 'bg-gray-600', current: reportData.current_profile.ETX, previous: reportData.previous_profile.ETX }
              ].map(({ label, color, current, previous }, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <div className="flex items-center gap-2">
                      <span>{(current * 100).toFixed(1)}%</span>
                      {showChange && (
                        <span className={`text-xs ${
                          current > previous ? 'text-green-600' : 
                          current < previous ? 'text-red-600' : 
                          'text-gray-600'
                        }`}>
                          {getChangeText(current, previous)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    {showChange && (
                      <div className={`h-2 rounded-full opacity-30 transition-all duration-500 ${color}`}
                           style={{ width: `${previous * 100}%` }} />
                    )}
                    <div className={`${color} rounded-full h-2 transition-all duration-500 relative -mt-2`}
                         style={{ width: `${current * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
      {/* Recommendations Section */}
      <RecommendationsSection />

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Recent Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.past_recommendations.map((action, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
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
      <Card>
        <CardContent>
          <div className="text-center py-4">
            <div className="text-2xl mb-2">🔥</div>
            <div className="font-bold">{reportData.streak.days} Day Streak</div>
            <div className="text-sm text-gray-600">{reportData.streak.message}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MicrobiomeReport;
