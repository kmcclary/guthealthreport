import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Award } from 'lucide-react';

const Achievements = ({ achievements }) => {
  return (
    <Card className="bg-gradient-to-br from-white to-purple-100">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2">
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
  );
};

export default Achievements;
