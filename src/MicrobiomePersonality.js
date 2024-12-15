import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/Card';
import { 
  Fingerprint, ChevronDown, ChevronRight, Info, 
  Beaker, Waves, Timer, GitBranch, Scale,
  GraduationCap, Lightbulb, BrainCircuit, CircleDotDashed
} from 'lucide-react';

// Mock data for demonstration
const defaultProfile = {
  ETF: 0.4,
  ETB: 0.3,
  ETP: 0.2,
  ETX: 0.1
};

const MicrobiomePersonalityV2 = ({ 
  currentProfile = defaultProfile, 
  previousProfile = defaultProfile 
}) => {
  const [showExplainer, setShowExplainer] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const calculateType = (current, previous) => {
    const curr = {
      ETF: current?.ETF || 0,
      ETB: current?.ETB || 0,
      ETP: current?.ETP || 0,
      ETX: current?.ETX || 0
    };
    
    const prev = {
      ETF: previous?.ETF || 0,
      ETB: previous?.ETB || 0,
      ETP: previous?.ETP || 0,
      ETX: previous?.ETX || 0
    };

    const S = curr.ETB / (curr.ETF + 0.1) > 0.4 ? 'C' : 'P';
    const E = Math.abs(curr.ETF - prev.ETF) > 0.1 ? 'R' : 'S';
    const M = (curr.ETB + curr.ETP) > 0.5 ? 'F' : 'D';
    const P = curr.ETX > 0.15 ? 'G' : 'F';
    
    return `${S}${E}${M}${P}`;
  };

  const typeDescriptions = {
    substrate: {
      C: {
        title: 'Carbohydrate Optimized',
        desc: 'Specialized in complex carbohydrate metabolism',
        trait: 'Primary pathways focused on polysaccharide processing',
        pathways: ['Glycoside hydrolases', 'Carbohydrate transporters'],
        products: ['Acetate', 'Butyrate'],
        diet: 'Focus on complex carbohydrates and fiber-rich foods',
        color: 'text-indigo-600'
      },
      P: {
        title: 'Protein Optimized',
        desc: 'Enhanced protein and amino acid utilization',
        trait: 'Specialized in protein metabolism',
        pathways: ['Proteolytic enzymes', 'Peptide transporters'],
        products: ['Branched-chain fatty acids', 'Ammonia'],
        diet: 'Balance protein intake with diverse amino acid sources',
        color: 'text-indigo-600'
      }
    },
    environmental: {
      R: {
        title: 'Responsive Adaptation',
        desc: 'Quick environmental adaptation',
        trait: 'Rapid gene expression changes',
        pathways: ['Stress response', 'Dynamic enzyme induction'],
        features: ['Variable dynamics', 'Quick adaptation'],
        diet: 'Can handle varied diet with frequent changes',
        color: 'text-emerald-600'
      },
      S: {
        title: 'Stable Adaptation',
        desc: 'Consistent performance across conditions',
        trait: 'Strong homeostatic maintenance',
        pathways: ['Constitutive expression', 'Homeostatic regulation'],
        features: ['Stable dynamics', 'High resilience'],
        diet: 'Benefits from consistent dietary patterns',
        color: 'text-emerald-600'
      }
    },
    tempo: {
      F: {
        title: 'Fast Metabolism',
        desc: 'Rapid nutrient processing',
        trait: 'High-throughput processing',
        pathways: ['Rapid ATP generation', 'Quick conversion'],
        features: ['Short retention', 'High throughput'],
        diet: 'Consider smaller, more frequent meals',
        color: 'text-amber-600'
      },
      D: {
        title: 'Deliberate Metabolism',
        desc: 'Measured, efficient processing',
        trait: 'Optimized for efficiency',
        pathways: ['Efficient ATP use', 'Complete utilization'],
        features: ['Long retention', 'High efficiency'],
        diet: 'Focus on regular, well-spaced meals',
        color: 'text-amber-600'
      }
    },
    processing: {
      F: {
        title: 'Focused Processing',
        desc: 'Sequential, specialized processing',
        trait: 'Deep metabolic capacity',
        pathways: ['Specialized enzymes', 'Sequential processing'],
        features: ['High specificity', 'Deep specialization'],
        diet: 'Focus on specific food groups in each meal',
        color: 'text-violet-600'
      },
      G: {
        title: 'Generalist Processing',
        desc: 'Parallel diverse processing',
        trait: 'Broad utilization capacity',
        pathways: ['Diverse enzymes', 'Parallel processing'],
        features: ['Broad range', 'Multi-substrate'],
        diet: 'Incorporate diverse nutrients in each meal',
        color: 'text-violet-600'
      }
    }
  };

  const personalityType = calculateType(currentProfile, previousProfile);

  const TypeDimensionCard = ({ dimension, icon: Icon, options }) => {
    const isActive = activeCard === dimension;
    
    // Get the correct dimension mapping
    const dimensionMap = {
      0: 'substrate',
      1: 'environmental',
      2: 'tempo',
      3: 'processing'
    };
    
    // Get the type letter for this dimension from personalityType string
    const dimensionType = personalityType[dimension];
    const dimensionKey = dimensionMap[dimension];
    const currentOption = typeDescriptions[dimensionKey][dimensionType];
  
    return (
      <div 
        className={`bg-white rounded-lg p-4 shadow-sm border transition-all duration-300 cursor-pointer
          ${isActive ? 'ring-2 ring-offset-2 ring-purple-400 shadow-lg' : 'hover:shadow-md'}`}
        onClick={() => setActiveCard(isActive ? null : dimension)}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${currentOption.color}`} />
            <div>
              <div className="text-sm text-gray-600">
                {dimension === 0 ? 'Substrate Preference' :
                 dimension === 1 ? 'Environmental Adaptation' :
                 dimension === 2 ? 'Metabolic Tempo' :
                 'Processing Style'}
              </div>
              <div className="font-bold">{currentOption.title}</div>
            </div>
          </div>
        </div>
  
        <div className="relative h-16 bg-gray-50 rounded-lg overflow-hidden flex mb-3">
          {Object.entries(typeDescriptions[dimensionKey]).map(([key, value]) => (
            <div 
              key={key}
              className={`flex-1 flex items-center justify-center border-r last:border-r-0 p-2
                transition-all duration-300
                ${dimensionType === key ? 
                  `${value.color.replace('text', 'bg')} bg-opacity-20` : 
                  'hover:bg-gray-100'}`}
            >
              <div className="text-center">
                <div className="font-medium text-sm">{key}</div>
                <div className="text-xs text-gray-600">{value.desc}</div>
              </div>
            </div>
          ))}
        </div>
  
        <p className="text-sm text-gray-600">{currentOption.trait}</p>
        
        {isActive && (
          <div className="mt-4 space-y-2">
            <div className="text-sm space-y-1">
              <div className="font-medium flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                Key Pathways
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {currentOption.pathways.map((pathway, i) => (
                  <li key={i}>{pathway}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm space-y-1">
              <div className="font-medium flex items-center gap-1">
                <Lightbulb className="h-4 w-4" />
                Dietary Recommendation
              </div>
              <p className="text-gray-600">{currentOption.diet}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="h-6 w-6 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Microbiome Personality Profile
          </span>
        </CardTitle>
        <CardDescription>
          Your Type: <span className="font-bold text-purple-600">{personalityType}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TypeDimensionCard 
              dimension={0}
              icon={Beaker}
              options={typeDescriptions.substrate}
            />
            <TypeDimensionCard 
              dimension={1}
              icon={Waves}
              options={typeDescriptions.environmental}
            />
            <TypeDimensionCard 
              dimension={2}
              icon={Timer}
              options={typeDescriptions.tempo}
            />
            <TypeDimensionCard 
              dimension={3}
              icon={GitBranch}
              options={typeDescriptions.processing}
            />
          </div>

          <div>
            <button
              onClick={() => setShowExplainer(!showExplainer)}
              className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              {showExplainer ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              Understanding Your Type
            </button>

            {showExplainer && (
              <div className="mt-4 space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div className="space-y-2">
                      <p className="text-sm">
                        Your microbiome type is derived from four independent dimensions that characterize 
                        your gut bacteria's behavior:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <h4 className="font-medium text-sm mb-1">Substrate (S)</h4>
                          <p className="text-xs text-gray-600">C: Carbohydrate<br/>P: Protein</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <h4 className="font-medium text-sm mb-1">Environment (E)</h4>
                          <p className="text-xs text-gray-600">R: Responsive<br/>S: Stable</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <h4 className="font-medium text-sm mb-1">Metabolism (M)</h4>
                          <p className="text-xs text-gray-600">F: Fast<br/>D: Deliberate</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <h4 className="font-medium text-sm mb-1">Processing (P)</h4>
                          <p className="text-xs text-gray-600">F: Focused<br/>G: Generalist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border">
                  <h4 className="font-medium mb-2">Your Type Characteristics</h4>
                  <div className="space-y-3">
                    {Object.entries(typeDescriptions).map(([key, options], index) => (
                      <div key={key} 
                        className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className={`w-2 h-2 rounded-full mt-1.5 ${options[personalityType[index]].color.replace('text', 'bg')}`}></span>
                        <div className="flex-1">
                          <span className="font-medium">{options[personalityType[index]].title}:</span>
                          <ul className="mt-1 space-y-1">
                            <li className="text-sm">• Pathways: {options[personalityType[index]].pathways.join(', ')}</li>
                            {options[personalityType[index]].products && (
                              <li className="text-sm">• Products: {options[personalityType[index]].products.join(', ')}</li>
                            )}
                            <li className="text-sm">• Features: {options[personalityType[index]].features?.join(', ')}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Scale className="h-4 w-4 text-blue-600" />
                    Dietary Implications
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {Object.entries(typeDescriptions).map(([key, options], index) => (
                      <li key={key} className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                        <span className={`w-2 h-2 rounded-full ${options[personalityType[index]].color.replace('text', 'bg')}`}></span>
                        {options[personalityType[index]].diet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-white p-4 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <BrainCircuit className="h-5 w-5 text-purple-600 mt-1" />
                    <p className="text-sm text-gray-600">
                      Each type represents a different but equally valid approach to maintaining gut health. 
                      Your type helps inform personalized dietary and lifestyle recommendations that work 
                      best for your unique microbiome profile.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleDotDashed className="h-5 w-5 text-purple-600 mt-1" />
                    <p className="text-sm text-gray-600">
                      Your microbiome type may change over time based on diet, lifestyle, and environmental 
                      factors. Regular monitoring can help you understand these changes and adapt your 
                      approach accordingly.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicrobiomePersonalityV2;