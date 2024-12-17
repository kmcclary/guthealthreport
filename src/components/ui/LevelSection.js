import React from 'react';

const LevelSection = ({ level, scores }) => {
  return (
    <div className="level-section card">
      <h3 className="text-xl font-semibold">{level.title}</h3>
      <p>Current Level: {level.current}</p>
      <p>Points to Next Level: {level.points_to_next}</p>
      <div className="scores mt-4">
        <h4 className="text-lg font-medium">Scores</h4>
        <p>Total: {scores.total}</p>
        <p>Base: {scores.base}</p>
        <p>Action Points: {scores.action_points}</p>
        <p>Streak Bonus: {scores.streak_bonus}</p>
      </div>
    </div>
  );
};

export default LevelSection;
