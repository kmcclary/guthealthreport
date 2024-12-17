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
  return (
    <div className="card">
      <h2>Total Score: {reportData.scores.total}</h2>
      {/* Add more content as needed */}
    </div>
  );
};

export default TotalScoreCard;
