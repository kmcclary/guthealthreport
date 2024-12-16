import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';

const TotalScoreCard = ({ reportData, CreditScoreMeter }) => {
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
