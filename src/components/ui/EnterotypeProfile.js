import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { Activity, Info, Check, ArrowRight, BookOpen } from 'lucide-react';

const EnterotypeProfile = ({ reportData }) => {
  const [showChange] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title fade-in after mount
    setTitleVisible(true);
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

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-blue-200">
      <div onClick={handleCardClick} className="cursor-pointer">
        <CardHeader>
          <CardTitle
            className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
            ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <Activity className="h-5 w-5 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Enterotype Profile
            </span>
          </CardTitle>
          <CardDescription>
            Your gut microbiome enterotype distribution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative w-full md:h-auto h-[200px] md:col-span-1">
              <svg viewBox="40 80 320 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
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

            <div className="space-y-2 md:col-span-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Enterotype Distribution
                </h3>
              </div>

              <div className="bg-white/80 rounded-lg border border-blue-200 shadow-md p-6">
                <div className="space-y-3">
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
                      <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
                        {showChange && (
                          <div className={`h-2 rounded-full opacity-30 absolute transition-all duration-700 ${color}`}
                               style={{ width: `${previous * 100}%` }} />
                        )}
                        <div className={`${color} rounded-full h-2 transition-all duration-700 relative`}
                             style={{ width: `${current * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {expanded && (
            <div className="mt-4 space-y-4 border-t pt-4 text-left">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Understanding Your Enterotype
                </h4>
                <p className="text-sm text-gray-700">
                  Your enterotype distribution indicates the relative abundance of different key bacterial groups in your gut microbiome. Monitoring changes over time can provide insights into your dietary habits and gut health.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                  Factors Influencing Changes
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Dietary shifts toward more fiber or certain food groups.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Introduction or reduction of probiotic foods.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Lifestyle changes such as stress management or exercise.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  Additional Context
                </h4>
                <p className="text-sm text-gray-700">
                  Enterotypes are broad categorizations, and changes reflect general shifts in microbial populations. They can guide you in tailoring dietary and lifestyle choices for improved gut health.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default EnterotypeProfile;
