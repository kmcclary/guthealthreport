import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { Flame, TrendingUp, Beaker, Check, AlertCircle, ArrowRight, Clock, BookOpen } from 'lucide-react';

const RecommendationsSection = ({ reportData }) => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [priorityFilter, /* setPriorityFilter */] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredRecommendations = priorityFilter === 'all'
    ? reportData.recommendations
    : reportData.recommendations.filter(rec => rec.priority.toLowerCase() === priorityFilter.toLowerCase());

  const displayedRecommendations = showAll ? filteredRecommendations : filteredRecommendations.slice(0, 3);

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-white to-rose-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-rose-500" />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Recommended Actions
            </span>
          </CardTitle>
          <CardDescription>
            Personalized actions to improve your gut microbiome composition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {displayedRecommendations.map(rec => (
              <div key={rec.id}>
                <div 
                  className={`p-4 rounded-lg border transition-all cursor-pointer shadow-sm hover:shadow-md
                    ${selectedAction === rec.id ? 
                      'bg-gradient-to-br from-gray-50 to-gray-250 border-gray-200' : 
                      'bg-gradient-to-br from-gray-50 to-white border-rose-200 hover:from-gray-250 hover:to-white'}`}
                  onClick={() => setSelectedAction(selectedAction === rec.id ? null : rec.id)}
                >
                  {/* Action Header */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium flex items-center gap-2">
                        {rec.name}
                        <span className={`px-2 py-1 rounded-full text-xs
                          ${rec.priority === 'High' ? 'bg-red-100 text-red-700' : 
                            rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-gray-100 text-gray-600'}`}>
                          {rec.priority}
                        </span>
                      </h3>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+{rec.points} pts</div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedAction === rec.id && (
                    <div className="mt-4 space-y-4 border-t pt-4">
                      {/* Impact */}
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          Microbiome Impact
                        </h4>
                        <ul className="ml-6 space-y-1">
                          {rec.impact.map((impact, idx) => (
                            <li key={idx} className="text-sm flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-gray-400" />
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Scientific Context */}
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Beaker className="h-4 w-4 text-purple-500" />
                          Scientific Evidence
                        </h4>
                        <div className="ml-6 space-y-2">
                          <div className="text-sm space-y-1">
                            {rec.scientificContext.keyFindings.map((finding, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                <span>{finding}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">
                            Impact Factor: {rec.scientificContext.impactFactor}/5
                          </div>
                        </div>
                      </div>

                      {/* Implementation Steps */}
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          Implementation Guide
                        </h4>
                        <ul className="ml-6 space-y-1">
                          {rec.implementation.map((step, idx) => (
                            <li key={idx} className="text-sm flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-gray-400" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeframe */}
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          Expected Timeframe
                        </h4>
                        <p className="ml-6 text-sm">{rec.timeframe}</p>
                      </div>

                      {/* References */}
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-gray-500" />
                          Scientific References
                        </h4>
                        <div className="ml-6 space-y-2">
                          {rec.scientificContext.references.map((ref, idx) => (
                            <div key={idx} className="text-sm space-y-1">
                              <div className="font-medium">DOI: {ref.doi}</div>
                              <div className="text-gray-600">{ref.key_point}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-md hover:from-rose-600 hover:to-pink-700 transition-all duration-200"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationsSection;
