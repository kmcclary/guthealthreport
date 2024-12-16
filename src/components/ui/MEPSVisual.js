import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { Fingerprint, TreePine, BadgeAlert, Heart, SlidersHorizontal, Waves, Scale, Info, Utensils, Trees, Wheat, Beaker, TestTube, Timer, Wind, Droplets, Thermometer, Container } from 'lucide-react';

const MEPSVisual = ({ currentProfile = {
  ETF: 0.25,
  ETB: 0.25,
  ETP: 0.25,
  ETX: 0.25
} }) => {
  // Calculate scores (same as before)
  const calculateDimensionScores = (profile) => {
    const p = {
      ETF: Number(profile.ETF) || 0.25,
      ETB: Number(profile.ETB) || 0.25,
      ETP: Number(profile.ETP) || 0.25,
      ETX: Number(profile.ETX) || 0.25
    };

    const calculateEvenness = (proportions) => {
      const sum = proportions.reduce((a, b) => a + b, 0);
      if (sum === 0) return 0;
      const normalized = proportions.map(p => p / sum);
      const shannon = normalized.reduce((acc, p) => {
        if (p === 0) return acc;
        return acc - (p * Math.log(p));
      }, 0);
      const maxShannon = Math.log(proportions.length);
      return maxShannon === 0 ? 0 : shannon / maxShannon;
    };

    return {
      diversity: Math.min(1, Math.max(0, calculateEvenness([p.ETF, p.ETB, p.ETP, p.ETX]))),
      functionality: Math.min(1, Math.max(0, (p.ETB + p.ETP) / (p.ETF + p.ETX + 0.001) / 2)),
      metabolic: Math.min(1, Math.max(0, (p.ETB + p.ETP) / (p.ETF + 0.001) / 2)),
      stability: 0.7 // Placeholder
    };
  };

  const scores = calculateDimensionScores(currentProfile);

  // Health indicator dimensions
  const healthDimensions = [
    {
      name: 'Diversity',
      score: scores.diversity,
      leftIcon: Fingerprint,
      leftLabel: 'Uniform',
      leftDesc: 'Limited variety',
      rightIcon: TreePine,
      rightLabel: 'Diverse',
      rightDesc: 'Rich variety of bacteria',
      color: 'bg-blue-500',
      explanation: 'Higher diversity typically indicates a more resilient gut ecosystem'
    },
    {
      name: 'Functionality',
      score: scores.functionality,
      leftIcon: BadgeAlert,
      leftLabel: 'Dysbiosis',
      leftDesc: 'Potential imbalance',
      rightIcon: Heart,
      rightLabel: 'Functional',
      rightDesc: 'Health-supporting bacteria',
      color: 'bg-green-500',
      explanation: 'A functional microbiome supports immune health and nutrient processing'
    },
    {
      name: 'Stability',
      score: scores.stability,
      leftIcon: SlidersHorizontal,
      leftLabel: 'Transient',
      leftDesc: 'Changes frequently',
      rightIcon: Waves,
      rightLabel: 'Stable',
      rightDesc: 'Consistent over time',
      color: 'bg-purple-500',
      explanation: 'A stable microbiome maintains consistent beneficial functions'
    }
  ];

  // Neutral metabolic characteristics
  const metabolicCharacteristics = [
    {
      name: 'Primary Nutrient Processing',
      icon: Utensils,
      leftLabel: 'Carbohydrate-Focused',
      leftDesc: 'Fiber & complex carbs',
      rightLabel: 'Protein-Focused',
      rightDesc: 'Protein & amino acids',
      score: scores.metabolic,
      gradientFrom: 'from-blue-100',
      gradientTo: 'to-orange-100'
    },
    {
      name: 'Carbon Source Range',
      icon: Trees,
      leftLabel: 'Specialist',
      leftDesc: 'Limited substrate range',
      rightLabel: 'Generalist',
      rightDesc: 'Broad substrate range',
      score: (scores.metabolic * 0.8 + 0.2),
      gradientFrom: 'from-purple-100',
      gradientTo: 'to-teal-100'
    },
    {
      name: 'Fiber Utilization',
      icon: Wheat,
      leftLabel: 'Soluble-Preferring',
      leftDesc: 'Readily fermentable fiber',
      rightLabel: 'Insoluble-Preferring',
      rightDesc: 'Complex structural fiber',
      score: (scores.metabolic * 0.75 + 0.25),
      gradientFrom: 'from-green-100',
      gradientTo: 'to-emerald-100'
    },
    {
      name: 'Fermentation Pattern',
      icon: Beaker,  // Changed from Flask
      leftLabel: 'Saccharolytic',
      leftDesc: 'Carbohydrate fermentation',
      rightLabel: 'Proteolytic',
      rightDesc: 'Protein fermentation',
      score: (scores.metabolic * 0.7 + 0.3),
      gradientFrom: 'from-sky-100',
      gradientTo: 'to-indigo-100'
    },
    {
      name: 'Primary Metabolites',
      icon: TestTube,  // Changed from Flask2
      leftLabel: 'SCFA-Dominant',
      leftDesc: 'Short-chain fatty acids',
      rightLabel: 'BCFA-Dominant',
      rightDesc: 'Branched-chain fatty acids',
      score: (scores.metabolic * 0.85 + 0.15),
      gradientFrom: 'from-yellow-100',
      gradientTo: 'to-amber-100'
    },
    {
      name: 'Growth Rate Pattern',
      icon: Timer,
      leftLabel: 'Fast-Growing',
      leftDesc: 'Rapid nutrient turnover',
      rightLabel: 'Slow-Growing',
      rightDesc: 'Gradual nutrient processing',
      score: (scores.metabolic * 0.6 + 0.4),
      gradientFrom: 'from-rose-100',
      gradientTo: 'to-pink-100'
    },
    {
      name: 'Oxygen Tolerance',
      icon: Wind,
      leftLabel: 'Aerotolerant',
      leftDesc: 'Can survive oxygen exposure',
      rightLabel: 'Strictly Anaerobic',
      rightDesc: 'Requires oxygen-free environment',
      score: (scores.metabolic * 0.65 + 0.35),
      gradientFrom: 'from-cyan-100',
      gradientTo: 'to-blue-100'
    },
    {
      name: 'pH Environment',
      icon: Droplets,
      leftLabel: 'Acidophilic',
      leftDesc: 'Prefers acidic conditions',
      rightLabel: 'Alkaliphilic',
      rightDesc: 'Prefers alkaline conditions',
      score: (scores.metabolic * 0.55 + 0.45),
      gradientFrom: 'from-violet-100',
      gradientTo: 'to-purple-100'
    },
    {
      name: 'Temperature Range',
      icon: Thermometer,
      leftLabel: 'Mesophilic',
      leftDesc: 'Moderate temperature (20-45°C)',
      rightLabel: 'Thermophilic',
      rightDesc: 'Higher temperature (45-122°C)',
      score: (scores.metabolic * 0.5 + 0.5),
      gradientFrom: 'from-red-100',
      gradientTo: 'to-orange-100'
    },
    {
      name: 'Salt Tolerance',
      icon: Container,  // Changed from Salt
      leftLabel: 'Non-Halophilic',
      leftDesc: 'Low salt preference',
      rightLabel: 'Halophilic',
      rightDesc: 'High salt tolerance',
      score: (scores.metabolic * 0.45 + 0.55),
      gradientFrom: 'from-lime-100',
      gradientTo: 'to-green-100'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-white via-teal-50 to-teal-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="h-5 w-5 text-teal-500" />
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Your MEPS Profile
          </span>
        </CardTitle>
        <CardDescription>
          Understanding your microbiome's key characteristics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Health Indicator Dimensions */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-green-500" />
              <h3 className="font-medium">Health Indicators</h3>
              <span className="text-xs text-gray-500 ml-2">(Movement to the right indicates improvement)</span>
            </div>
            
            <div className="space-y-6 bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
              {healthDimensions.map((dim, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 opacity-75">
                      <dim.leftIcon className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-sm">{dim.leftLabel}</div>
                        <div className="text-xs text-gray-500">{dim.leftDesc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="font-medium text-sm">{dim.rightLabel}</div>
                        <div className="text-xs text-gray-500">{dim.rightDesc}</div>
                      </div>
                      <dim.rightIcon className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>

                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${dim.color}`}
                      style={{ width: `${dim.score * 100}%` }}
                    />
                    <div 
                      className="absolute top-0 h-full w-1 bg-white transform -translate-x-1/2 transition-all duration-500"
                      style={{ left: `${dim.score * 100}%` }}
                    />
                  </div>

                  <div className="flex items-start gap-1 mt-1">
                    <Info className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{dim.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metabolic Characteristics */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-5 w-5 text-orange-500" />
              <h3 className="font-medium">Metabolic Profile</h3>
              <span className="text-xs text-gray-500 ml-2">(Characteristics, not measures of health)</span>
            </div>

            <div className="space-y-6 bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
              {metabolicCharacteristics.map((char, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 text-base font-semibold mb-3 text-gray-800">
                    <char.icon className="h-5 w-5 text-gray-600" />
                    {char.name}
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="font-medium text-sm">{char.leftLabel}</div>
                        <div className="text-xs text-gray-500">{char.leftDesc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="font-medium text-sm">{char.rightLabel}</div>
                        <div className="text-xs text-gray-500">{char.rightDesc}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`relative h-4 bg-gradient-to-r ${char.gradientFrom} via-gray-100 ${char.gradientTo} rounded-full overflow-hidden`}>
                    <div 
                      className="absolute top-0 h-full w-1 bg-gray-800 transform -translate-x-1/2 transition-all duration-500"
                      style={{ left: `${char.score * 100}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Your metabolic profile shows the dominant nutrient processing patterns in your gut microbiome. These characteristics reflect your dietary patterns and microbial adaptations rather than measures of health.</p>
                    <p>Different dietary patterns around the world can lead to different but equally healthy metabolic profiles. The key is maintaining consistency with your dietary choices and ensuring adequate nutrition within your preferred eating pattern.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MEPSVisual;
