import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { 
  Fingerprint, TreePine, BadgeAlert, Heart, SlidersHorizontal, Waves, Scale, Info, 
  Utensils, Trees, Wheat, Beaker, TestTube, Timer, Wind, Droplets, Thermometer, Container 
} from 'lucide-react';

const MEPSVisual = ({ currentProfile = {
  ETF: 0.25,
  ETB: 0.25,
  ETP: 0.25,
  ETX: 0.25
} }) => {
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
      explanation: 'Higher diversity typically indicates a more resilient gut ecosystem',
      gradientClass: 'bg-gradient-to-r from-orange-400 via-yellow-300 to-green-600',
      startColor: 'orange-600',
      endColor: 'green-800'
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
      explanation: 'A functional microbiome supports immune health and nutrient processing',
      gradientClass: 'bg-gradient-to-r from-rose-400 via-yellow-300 to-teal-600',
      startColor: 'red-600',
      endColor: 'emerald-800'
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
      explanation: 'A stable microbiome maintains consistent beneficial functions',
      gradientClass: 'bg-gradient-to-r from-fuchsia-400 via-yellow-300 to-emerald-600',
      startColor: 'purple-600',
      endColor: 'emerald-600'
    }
  ];

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
      icon: Beaker,
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
      icon: TestTube,
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
      icon: Container,
      leftLabel: 'Non-Halophilic',
      leftDesc: 'Low salt preference',
      rightLabel: 'Halophilic',
      rightDesc: 'High salt tolerance',
      score: (scores.metabolic * 0.45 + 0.55),
      gradientFrom: 'from-lime-100',
      gradientTo: 'to-green-100'
    }
  ];

  const renderIndicator = (score) => {
    const percentage = Math.round(score * 100);
    return (
      <div className="relative w-full h-full">
        {/* Position the circle exactly at the score percentage, both horizontally and vertically centered */}
        <div 
          className="absolute"
          style={{
            left: `${score * 100}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)' 
          }}
        >
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white text-[12px] font-bold rounded-full h-10 w-7 flex items-center justify-center border border-black">
          {percentage}
            </div>
            {/* Pointer triangle below the circle */}
            <div className="bg-white absolute w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-black -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-gradient-to-br from-white via-teal-50 to-teal-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="h-5 w-5 text-teal-500" />
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Health & Metabolism Profile
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
            <div className="flex items-center gap-1 mb-4">
              <Heart className="h-5 w-5 text-green-500" />
              <h3 className="font-bold text-black text-lg">Health Indicators</h3>
            </div>
            
            <div className="space-y-6 bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
              {healthDimensions.map((dim, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-black text-lg">{dim.name}</h4>

                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 opacity-90">
                      <dim.leftIcon className={`h-5 w-5 text-${dim.startColor}`} />
                      <div>
                        <div className="font-medium text-sm text-black">{dim.leftLabel}</div>
                        <div className="text-[10px] text-gray-500">{dim.leftDesc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="font-medium text-sm text-black">{dim.rightLabel}</div>
                        <div className="text-[10px] text-gray-500">{dim.rightDesc}</div>
                      </div>
                      <dim.rightIcon className={`h-5 w-5 text-${dim.endColor}`} />
                    </div>
                  </div>

                  <div className={`relative ${dim.gradientClass} h-8 rounded-full`}>
                    {renderIndicator(dim.score)}
                  </div>

                  <div className="flex items-center gap-1 mt-1">
                    <Info className="h-3 w-3 text-gray-400 flex-shrink-0" />
                    <span className="text-[8px] text-gray-500">{dim.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metabolic Characteristics */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-5 w-5 text-orange-500" />
              <h3 className="font-bold text-black text-lg">Metabolic Profile</h3>
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
                        <div className="font-medium text-sm text-black">{char.leftLabel}</div>
                        <div className="text-[10px] text-gray-500">{char.leftDesc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="font-medium text-sm text-black">{char.rightLabel}</div>
                        <div className="text-[10px] text-gray-500">{char.rightDesc}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`relative bg-gradient-to-r ${char.gradientFrom} via-gray-100 ${char.gradientTo} h-8 rounded-full overflow-visible`}>
                    {renderIndicator(char.score)}
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
