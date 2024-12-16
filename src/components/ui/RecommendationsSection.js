import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { Flame, TrendingUp, Beaker, Check, AlertCircle, ArrowRight, Clock, BookOpen } from 'lucide-react';

const RecommendationsSection = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [priorityFilter, /* setPriorityFilter */] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedRecentAction, setSelectedRecentAction] = useState(null);

  const recommendationsData = {
    recommendations: [
      {
        id: 1,
        name: "Increase Fiber-Rich Diet",
        points: 2,
        priority: "High",
        impact: ["Distances from ETF", "Approaches ETB, ETP"],
        description: "A high-fiber diet promotes beneficial bacteria growth and helps maintain healthy gut composition.",
        scientificContext: {
          keyFindings: [
            "Increases Bacillota (Akkermansia, Bacteroides, Bifidobacterium, Prevotella, Roseburia)",
            "Decreases Proteobacteria, Firmicutes, Ruminococcus, Salmonella"
          ],
          impactFactor: 5,
          references: [
            {
              doi: "10.1038/nature12820",
              key_point: "High-fiber diet promotes microbiome diversity and reduces obesity-associated bacteria"
            }
          ]
        },
        implementation: [
          "Start with 25-30g of fiber daily",
          "Include diverse sources: vegetables, fruits, legumes, whole grains",
          "Increase intake gradually to minimize digestive discomfort",
          "Maintain adequate water intake"
        ],
        timeframe: "2-4 weeks for initial microbiome changes"
      },
      {
        id: 4,
        name: "Drink Oolong Tea",
        points: 1,
        priority: "Medium",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Oolong tea contains compounds that can beneficially modify gut bacteria composition.",
        scientificContext: {
          keyFindings: [
            "Increases Bacteroidetes",
            "Decreases Firmicutes"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1039/C7FO01570D",
              key_point: "Oolong tea polyphenols influence gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Start with 1-2 cups daily",
          "Best consumed between meals",
          "Choose high-quality tea leaves",
          "Avoid adding artificial sweeteners"
        ],
        timeframe: "3-4 weeks for observable changes"
      },
      {
        id: 5,
        name: "Eat Allium Products",
        points: 1,
        priority: "Medium",
        impact: ["Distances from ETP"],
        description: "Garlic, onions, and other allium vegetables support beneficial gut bacteria.",
        scientificContext: {
          keyFindings: [
            "Increases Lachnospiraceae, Bifidobacterium, Faecalibacterium",
            "Decreases Akkermansia, Clostridium difficile, Escherichia coli"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1016/j.vetmic.2009.12.025",
              key_point: "Allium products demonstrate prebiotic effects"
            }
          ]
        },
        implementation: [
          "Add 1-2 cloves of garlic or half an onion daily",
          "Include in cooking rather than raw consumption",
          "Combine with other vegetables for synergistic effects",
          "Consider fermented alternatives like black garlic"
        ],
        timeframe: "2-3 weeks for microbiome adaptation"
      },
      {
        id: 6,
        name: "Drink Rice Wine",
        points: 0.5,
        priority: "Low",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Rice wine contains beneficial compounds that can positively influence gut bacteria.",
        scientificContext: {
          keyFindings: [
            "Increases Lactobacillus, Bifidobacterium",
            "Decreases Clostridium, Enterococcus"
          ],
          impactFactor: 1,
          references: [
            {
              doi: "10.1016/j.jff.2015.11.005",
              key_point: "Rice wine consumption alters gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Consume in moderation, 1-2 small glasses per week",
          "Choose high-quality, traditionally brewed rice wine",
          "Avoid excessive consumption to prevent negative effects",
          "Pair with meals for better absorption"
        ],
        timeframe: "4-6 weeks for noticeable changes"
      },
      {
        id: 7,
        name: "Eat Black Currant",
        points: 0.5,
        priority: "Low",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Black currants are rich in antioxidants and can support gut health.",
        scientificContext: {
          keyFindings: [
            "Increases Bifidobacterium, Lactobacillus",
            "Decreases Clostridium, Enterococcus"
          ],
          impactFactor: 1,
          references: [
            {
              doi: "10.1016/j.jff.2015.11.005",
              key_point: "Black currant consumption positively affects gut microbiota"
            }
          ]
        },
        implementation: [
          "Consume a handful of black currants daily",
          "Include in smoothies, salads, or as a snack",
          "Opt for fresh or frozen black currants",
          "Avoid added sugars or sweeteners"
        ],
        timeframe: "3-4 weeks for observable changes"
      },
      {
        id: 8,
        name: "Chew Thoroughly",
        points: 0.5,
        priority: "Low",
        impact: ["Approaches ETB, ETP", "Distances from ETF"],
        description: "Thorough chewing improves digestion and nutrient absorption, indirectly affecting gut bacteria.",
        scientificContext: {
          keyFindings: [
            "Increases Bacteroidota, Bacteroides, Prevotella",
            "Decreases Actinomycetota, Bacillota, Blautia, Eubacterium"
          ],
          impactFactor: 2,
          references: [
            {
              doi: "10.1038/S41598-022-18095-X",
              key_point: "Chewing behavior influences gut microbiota composition"
            }
          ]
        },
        implementation: [
          "Chew each bite 20-30 times",
          "Eat slowly and mindfully",
          "Put utensils down between bites",
          "Focus on texture changes during chewing"
        ],
        timeframe: "2-3 weeks for digestive adaptation"
      }
    ],
    past_recommendations: [
      {
        action: "Drink herbal/flavonoid teas",
        points: 24,
        completions: 12,
        impact: "Distances ETF",
        timeframe: "Implemented over 6 weeks",
        details: {
          overview: "Consistently drank 2-3 cups of herbal/flavonoid-rich teas daily.",
          improvements: [
            "Steadily decreased presence of Firmicutes",
            "Boosted beneficial Akkermansia species",
            "Noticed improved digestive comfort and reduced bloating"
          ],
          references: [
            {
              doi: "10.1016/j.jfda.2019.09.003",
              note: "Herbal teas have been shown to modulate gut microbiota composition, improving metabolic profiles."
            }
          ],
          completionTimeline: [
            { week: 1, completions: 2 },
            { week: 2, completions: 3 },
            { week: 3, completions: 2 },
            { week: 4, completions: 2 },
            { week: 5, completions: 1 },
            { week: 6, completions: 2 }
          ]
        }
      },
      {
        action: "Fiber-rich diet",
        points: 14,
        completions: 7,
        impact: "Distances ETF",
        timeframe: "Adopted over 4 weeks",
        details: {
          overview: "Increased daily fiber intake to ~30g through fruits, veggies, and whole grains.",
          improvements: [
            "Reduced intestinal inflammation markers",
            "Increased abundance of Bifidobacterium and Faecalibacterium prausnitzii",
            "Improved stool consistency and regularity"
          ],
          references: [
            {
              doi: "10.1111/nyas.13153",
              note: "Dietary fiber is associated with a healthier gut microbial community and improved metabolic health."
            }
          ],
          completionTimeline: [
            { week: 1, completions: 2 },
            { week: 2, completions: 2 },
            { week: 3, completions: 1 },
            { week: 4, completions: 2 }
          ]
        }
      },
      {
        action: "Avoid artificial sweeteners",
        points: 8,
        completions: 8,
        impact: "Approaches ETB",
        timeframe: "Maintained for 3 weeks",
        details: {
          overview: "Eliminated artificial sweeteners (aspartame, sucralose, saccharin) from the diet.",
          improvements: [
            "Stabilized gut microbial diversity",
            "Reduced fluctuations in blood glucose levels",
            "More stable energy throughout the day"
          ],
          references: [
            {
              doi: "10.1038/nature13793",
              note: "Artificial sweeteners may induce glucose intolerance by altering the gut microbiota."
            }
          ],
          completionTimeline: [
            { week: 1, completions: 3 },
            { week: 2, completions: 3 },
            { week: 3, completions: 2 }
          ]
        }
      }
    ]
  };

  const filteredRecommendations = priorityFilter === 'all'
    ? recommendationsData.recommendations
    : recommendationsData.recommendations.filter(rec => rec.priority.toLowerCase() === priorityFilter.toLowerCase());

  const displayedRecommendations = showAll ? filteredRecommendations : filteredRecommendations.slice(0, 3);

  return (
    <>
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
              Personalized actions to improve your gut microbiome
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
                      <div className="flex-1">
                        <h3 className="font-medium flex items-center gap-2">
                          {rec.name}
                          <span className={`px-2 py-1 rounded-full text-xs
                            ${rec.priority === 'High' ? 'bg-red-100 text-red-700' : 
                              rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-gray-100 text-gray-600'}`}>
                            {rec.priority}
                          </span>
                        </h3>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bold text-green-600">+{rec.points} pts</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{rec.description}</p>

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
      
      {/* Recent Actions Card */}
      <Card className="bg-gradient-to-br from-white to-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Recent Actions
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendationsData.past_recommendations.map((action, index) => (
              <div 
                key={index}
                className={`p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer
                ${selectedRecentAction === index ? 'bg-gray-100' : ''}`}
                onClick={() => setSelectedRecentAction(selectedRecentAction === index ? null : index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{action.action}</h3>
                    <p className="text-sm text-gray-600">{action.impact}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+{action.points} pts</div>
                    <div className="text-sm text-gray-600">{action.completions}x completed</div>
                  </div>
                </div>

                {selectedRecentAction === index && (
                  <div className="mt-4 space-y-4 border-t pt-4">
                    {/* Timeframe */}
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        Timeframe of Implementation
                      </h4>
                      <p className="ml-6 text-sm">{action.timeframe}</p>
                    </div>

                    {/* Detailed Overview */}
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500" />
                        Detailed Overview
                      </h4>
                      <p className="ml-6 text-sm">{action.details.overview}</p>
                    </div>

                    {/* Improvements */}
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Observed Improvements
                      </h4>
                      <ul className="ml-6 space-y-1">
                        {action.details.improvements.map((imp, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Completion Timeline */}
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        Completion Timeline
                      </h4>
                      <ul className="ml-6 space-y-1 text-sm">
                        {action.details.completionTimeline.map((entry, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                            Week {entry.week}: {entry.completions} completions
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* References */}
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        Scientific References
                      </h4>
                      <div className="ml-6 space-y-2">
                        {action.details.references.map((ref, idx) => (
                          <div key={idx} className="text-sm space-y-1">
                            <div className="font-medium">DOI: {ref.doi}</div>
                            <div className="text-gray-600">{ref.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RecommendationsSection;
