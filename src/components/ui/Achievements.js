import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Award, ArrowRight, Check, BookOpen } from 'lucide-react';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(
    [false, false, false] // Track visibility for each achievement card
  );

  const achievements = [
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
  ];

  const handleAchievementClick = (index) => {
    setSelectedAchievement(selectedAchievement === index ? null : index);
  };

  useEffect(() => {
    // Trigger title fade-in after mount
    setTitleVisible(true);

    // Animate the cards appearing one by one
    let delays = [200, 400, 600]; // ms delays for each card
    delays.forEach((delay, idx) => {
      setTimeout(() => {
        setCardVisibility(prev => {
          const newVis = [...prev];
          newVis[idx] = true;
          return newVis;
        });
      }, delay);
    });
  }, []);

  return (
    <Card className="bg-gradient-to-br from-white to-purple-100">
      <CardHeader className="p-4">
        <CardTitle
          className={`flex items-center gap-2 transition-all duration-700 ease-out transform 
          ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <Award className="h-5 w-5 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent responsive-text-md">
            Achievements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer 
              ${selectedAchievement === index ? 'bg-gray-100' : ''}
              transform 
              ${cardVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              duration-700 ease-out`}
              onClick={() => handleAchievementClick(index)}
            >
              {/* Top section with icon, title, and subtitle always at top */}
              <div className="flex items-center md:block gap-3">
                <div className="text-4xl md:text-4xl md:mb-1 achievement-icon flex-shrink-0 flex items-center">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-bold responsive-text-sm">{achievement.name}</h3>
                  <p className="responsive-text-xs text-gray-600">{achievement.description}</p>
                </div>
              </div>

              {selectedAchievement === index && (
                <div className="mt-4 space-y-4 border-t pt-4 text-left">
                  {/* Expanded content section - Example details */}
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      How You Earned This Achievement
                    </h4>
                    <p className="text-sm text-gray-700">
                      This achievement was unlocked due to your consistent positive actions related to your goals. Keep up the great work!
                    </p>
                  </div>
                  
                  {/* Implementation / Steps (example) */}
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                      Key Steps You Took
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                        Maintained a healthy routine over several weeks.
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                        Followed recommended guidelines consistently.
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 text-gray-400 mt-1" />
                        Improved your habits and tracked your progress.
                      </li>
                    </ul>
                  </div>

                  {/* References / Context (example) */}
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gray-500" />
                      Additional Context
                    </h4>
                    <p className="text-sm text-gray-700">
                      Your persistent efforts have measurable impacts on your overall goals. Achievements like this reflect steady and long-term progress.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
