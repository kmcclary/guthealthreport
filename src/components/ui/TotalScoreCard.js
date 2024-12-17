import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Gauge, Check, ArrowRight, BookOpen } from 'lucide-react';

const CreditScoreMeter = ({ value, levelTitle }) => {
  const meterRanges = [
    { label: 'Very Poor', color: '#f44336', min: 0, max: 20 },
    { label: 'Poor', color: '#ff9800', min: 20, max: 40 },
    { label: 'Fair', color: '#ffeb3b', min: 40, max: 60 },
    { label: 'Good', color: '#8bc34a', min: 60, max: 80 },
    { label: 'Excellent', color: '#4caf50', min: 80, max: 100 },
  ];

  const currentRange = meterRanges.find(range => value >= range.min && value < range.max) || meterRanges[meterRanges.length - 1];
  const finalRotation = (value / 100) * 180 + 180;

  const [rotation, setRotation] = useState(180);

  useEffect(() => {
    // Animate the needle rotation after component mounts
    const timer = setTimeout(() => {
      setRotation(finalRotation);
    }, 100);
    return () => clearTimeout(timer);
  }, [finalRotation]);

  const createArc = (startAngle, endAngle, radius) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const startX = 100 + radius * Math.cos(startRad);
    const startY = 100 + radius * Math.sin(startRad);
    const endX = 100 + radius * Math.cos(endRad);
    const endY = 100 + radius * Math.sin(endRad);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  return (
    <div className="relative w-48 sm:w-48 h-12 sm:h-12 scale-150 sm:scale-100 mx-auto">
      <svg viewBox="-60 0 300 200">
        {/* Gray background arc */}
        <path
          d={createArc(180, 360, 80)}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Colored ranges */}
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

        {/* Needle and center circle in a group to rotate */}
        <g 
          transform={`rotate(${rotation}, 100, 100)`}
          style={{ transition: 'transform 0.7s ease-in-out' }}
        >
          <line
            x1="100"
            y1="100"
            x2="160"
            y2="100"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="4" fill="black" />
        </g>
      </svg>
      <div className="absolute bottom-5 left-2 transform translate-x-5 text-center">
        <div className="text-[20px] font-bold" style={{ color: 'black', opacity: '80%' }}>
          {currentRange.label}
        </div>
      </div>
    </div>
  );
};

const TotalScoreCard = ({ reportData }) => {
  const [expanded, setExpanded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title fade-in after mount
    setTitleVisible(true);
  }, []);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="bg-gradient-to-br from-white to-green-100">
      <div onClick={handleCardClick} className="cursor-pointer">
        <CardHeader>
          <CardTitle
            className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
            ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <Gauge className="h-5 w-5 text-green-600" />
            <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Total Score
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-items-center gap-4">
            <div className="text-6xl font-bold text-center">
              {reportData.scores.total.toFixed(1)}
            </div>
            <div className="mt-1 space-y-0 sm:space-y-1 text-xs sm:text-sm font-bold text-center pr-4 sm:pr-0">
              <div className="flex justify-between w-40 sm:w-48 mx-auto py-0.5">
                <span>Base Score:</span>
                <span>{reportData.scores.base.toFixed(1)}</span>
              </div>
              <div className="flex justify-between w-40 sm:w-48 mx-auto py-0.5">
                <span>Action Points:</span>
                <span>+{reportData.scores.action_points.toFixed(1)}</span>
              </div>
              <div className="flex justify-between w-40 sm:w-48 mx-auto py-0.5">
                <span>Streak Bonus:</span>
                <span>+{reportData.scores.streak_bonus.toFixed(1)}</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 pb-12 sm:pb-4 mt-4 sm:mt-0">
              <CreditScoreMeter
                value={reportData.scores.total}
                levelTitle={reportData.level.title}
              />
            </div>
          </div>

          {expanded && (
            <div className="mt-4 space-y-4 border-t pt-4 text-left">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  In-Depth Breakdown
                </h4>
                <p className="text-sm text-gray-700">
                  Your total score is a reflection of your overall performance, taking into account your base score, action points, and streak bonuses over time.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                  Key Influencers
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Consistency in completing recommended actions.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Achieving regular streaks for bonus points.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Maintaining a healthy baseline through your core habits.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  Additional Context
                </h4>
                <p className="text-sm text-gray-700">
                  The total score serves as an overarching metric of your progress. Tracking these points helps ensure you remain on the right path, continually refining your daily routines and lifestyle habits.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default TotalScoreCard;