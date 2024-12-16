import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Flame, Check, ArrowRight, BookOpen } from 'lucide-react';

const StreakStatus = ({ streak }) => {
  const [expanded, setExpanded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
<Card className="bg-gradient-to-br from-cyan-100 via-pink-100 to-orange-100">
  <div onClick={handleCardClick} className="cursor-pointer">
    {/* Apply equal padding to CardHeader */}
    <CardHeader className="py-1 px-4">
      <CardTitle
        className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
        ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
      >
        <Flame className="h-5 w-5 text-orange-600" />
        <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Streak Status
        </span>
      </CardTitle>
    </CardHeader>
    
    {/* Use matching padding on CardContent */}
    <CardContent className="py-4 px-4">
      <div className="text-center">
        <div className="text-6xl mb-1">🔥</div>
        <div className="font-bold text-orange-600">{streak.days} Day Streak</div>
        <div className="responsive-text-xs text-gray-600">{streak.message}</div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4 border-t pt-4 text-left">
          {/* Additional content sections remain unchanged */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              How You Achieved This Streak
            </h4>
            <p className="text-sm text-gray-700">
              Your consistent efforts and daily actions have contributed to maintaining this streak.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-gray-500" />
              Key Benefits
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                Increased motivation and consistency.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                Improved habits and routines.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                Enhanced overall well-being.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gray-500" />
              Additional Context
            </h4>
            <p className="text-sm text-gray-700">
              Maintaining a streak can be a powerful motivator. It reflects your dedication and commitment to your goals.
            </p>
          </div>
        </div>
      )}
    </CardContent>
  </div>
</Card>

  );
};

export default StreakStatus;
