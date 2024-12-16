import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Trophy, Check, ArrowRight, BookOpen } from 'lucide-react';

const LevelSection = ({ level, scores }) => {
  const [expanded, setExpanded] = useState(false);
  const [progressWidth, setProgressWidth] = useState('0%');
  const [titleVisible, setTitleVisible] = useState(false);

  const finalWidth = `${(scores.total % 50) * 5}%`;

  useEffect(() => {
    // Animate progress bar fill after component mounts
    const timer = setTimeout(() => {
      setProgressWidth(finalWidth);
    }, 100);
    // Trigger the title fade-in
    setTitleVisible(true);
    return () => clearTimeout(timer);
  }, [finalWidth]);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="bg-gradient-to-br from-white to-yellow-100">
      <div onClick={handleCardClick} className="cursor-pointer">
        <CardHeader className="p-4">
          <CardTitle
            className={`flex items-center gap-2 transition-all duration-700 ease-out 
            transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent responsive-text-md">
              Level {level.current}: {level.title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-600 to-amber-600 h-4 transition-all duration-700 ease-in-out"
                style={{ width: progressWidth }}
              />
            </div>
            <p className="responsive-text-sm text-gray-600">
              {level.points_to_next} points to next level
            </p>
          </div>

          {expanded && (
            <div className="mt-4 space-y-4 border-t pt-4 text-left">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  How You Reached This Level
                </h4>
                <p className="text-sm text-gray-700">
                  You’ve steadily earned points through various actions and improved habits.
                  Your consistent efforts have contributed to your progress.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                  Key Milestones
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Completed multiple recommended actions.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Accumulated points steadily over time.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                    Maintained consistent engagement and improvement.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  Additional Context
                </h4>
                <p className="text-sm text-gray-700">
                  Reaching new levels reflects your ongoing journey.
                  Each milestone represents tangible growth in your habits and well-being.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default LevelSection;
