import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const CreditScoreMeter = ({ value, levelTitle }) => {
  const meterRanges = [
    { label: 'Very Poor', color: '#f44336', min: 0, max: 20 },
    { label: 'Poor', color: '#ff9800', min: 20, max: 40 },
    { label: 'Fair', color: '#ffeb3b', min: 40, max: 60 },
    { label: 'Good', color: '#8bc34a', min: 60, max: 80 },
    { label: 'Excellent', color: '#4caf50', min: 80, max: 100 },
  ];

  const currentRange = meterRanges.find(range => value >= range.min && value < range.max) || meterRanges[meterRanges.length - 1];
  const rotation = (value / 100) * 180 + 180;

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
    <div className="relative w-48 h-12 mx-auto">
      <svg viewBox="-60 0 300 200">
        <path
          d={createArc(180, 360, 80)}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="12"
          strokeLinecap="round"
        />
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

const TotalScoreCard = ({ reportData }) => {
  return (
    <Card className="bg-gradient-to-br from-white to-green-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Total Score
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center md:space-x-16 gap-4">
          <div className="text-6xl font-bold text-center">
            {reportData.scores.total.toFixed(1)}
          </div>
          <div className="mt-2 space-y-1 text-sm font-bold text-center">
            <div className="flex justify-between w-48 mx-auto">
              <span>Base Score:</span>
              <span>{reportData.scores.base.toFixed(1)}</span>
            </div>
            <div className="flex justify-between w-48 mx-auto">
              <span>Action Points:</span>
              <span>+{reportData.scores.action_points.toFixed(1)}</span>
            </div>
            <div className="flex justify-between w-48 mx-auto">
              <span>Streak Bonus:</span>
              <span>+{reportData.scores.streak_bonus.toFixed(1)}</span>
            </div>
          </div>
          <div className="pb-4">
            <CreditScoreMeter
              value={reportData.scores.total}
              levelTitle={reportData.level.title}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalScoreCard;
