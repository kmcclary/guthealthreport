import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Trophy } from 'lucide-react';

const LevelSection = ({ level, scores }) => (
  <Card className="bg-gradient-to-br from-white to-yellow-100">
    <CardHeader className="p-4">
      <CardTitle className="flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent responsive-text-md">
          Level {level.current}: {level.title}
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-0">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full h-4"
            style={{ width: `${(scores.total % 50) * 5}%` }}
          />
        </div>
        <p className="responsive-text-sm text-gray-600">
          {level.points_to_next} points to next level
        </p>
      </div>
    </CardContent>
  </Card>
);

export default LevelSection;
