import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { 
  Fingerprint, ChevronDown, ChevronRight, Info, 
  Beaker, Waves, Timer, GitBranch, Scale,
  GraduationCap, Lightbulb, BrainCircuit, CircleDotDashed,
  FlaskRound, Workflow, Zap, Network,
  BookOpen, Link2, ScrollText, Apple, Wheat, Fish, Leaf,
  Salad, Target, Brain, Activity,
  Pizza, Utensils, Clock
} from 'lucide-react';

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
  const [activeCard, setActiveCard] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    understanding: false,
    characteristics: false,
    dietary: false,
    monitoring: false
  });

  const [expandedDietarySections, setExpandedDietarySections] = useState({
    substrate: false,
    environmental: false,
    tempo: false,
    processing: false
  });

  const [expandedReferenceSections, setExpandedReferenceSections] = useState({
    substrate: false,
    environmental: false,
    tempo: false,
    processing: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleDietarySection = (dimension) => {
    setExpandedDietarySections(prev => ({
      ...prev,
      [dimension]: !prev[dimension]
    }));
  };

  const toggleReferenceSection = (dimension) => {
    setExpandedReferenceSections(prev => ({
      ...prev,
      [dimension]: !prev[dimension]
    }));
  };

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

  const personalityType = calculateType(currentProfile, previousProfile);

  const typeDescriptions = {
    substrate: {
      C: {
        title: 'Carbohydrate Optimized',
        desc: 'Specialized in carb metabolism',
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

  const dietaryDetails = {
    substrate: {
      C: {
        detailedDiet: {
          recommended: [
            { name: "Complex Carbohydrates", icon: Wheat, examples: ["Whole grains", "Legumes", "Root vegetables"] },
            { name: "Dietary Fiber", icon: Leaf, examples: ["Psyllium husk", "Inulin", "Resistant starch"] }
          ],
          mechanisms: [
            "Enhanced butyrate production",
            "Increased microbial diversity",
            "Improved barrier function"
          ],
          evidence: "Complex carbs boost SCFA production (Ref 1)",
          timing: "Spread intake throughout the day"
        }
      },
      P: {
        detailedDiet: {
          recommended: [
            { name: "Quality Proteins", icon: Fish, examples: ["Lean meats", "Fish", "Legumes"] },
            { name: "Fiber Balance", icon: Apple, examples: ["Vegetables", "Fruits", "Whole grains"] }
          ],
          mechanisms: [
            "Optimal amino acid utilization",
            "Reduced protein fermentation byproducts",
            "Enhanced microbial protein synthesis"
          ],
          evidence: "Balanced intake improves protein metabolism (Ref 2)",
          timing: "Distribute protein across meals"
        }
      }
    },
    environmental: {
      R: {
        detailedDiet: {
          recommended: [
            { name: "Varied Diet", icon: Salad, examples: ["Mixed vegetables", "Fruits", "Whole grains"] },
            { name: "Probiotics", icon: Leaf, examples: ["Yogurt", "Kefir", "Fermented foods"] }
          ],
          mechanisms: [
            "Supports dynamic adaptation",
            "Enhances resilience",
            "Promotes gut health"
          ],
          evidence: "Varied diets improve adaptability (Ref 3)",
          timing: "Frequent dietary changes recommended"
        }
      },
      S: {
        detailedDiet: {
          recommended: [
            { name: "Consistent Diet", icon: Clock, examples: ["Regular meals", "Balanced nutrients"] },
            { name: "Prebiotics", icon: Leaf, examples: ["Chicory root", "Garlic", "Onions"] }
          ],
          mechanisms: [
            "Maintains stable environment",
            "Supports homeostasis",
            "Promotes long-term gut health"
          ],
          evidence: "Stable patterns support stable microbiome (Ref 4)",
          timing: "Regular meal times recommended"
        }
      }
    },
    tempo: {
      F: {
        detailedDiet: {
          recommended: [
            { name: "Frequent Small Meals", icon: Utensils, examples: ["Snacks", "Small portions"] },
            { name: "Easily Digestible Foods", icon: Apple, examples: ["Fruits", "Vegetables", "Lean proteins"] }
          ],
          mechanisms: [
            "Rapid nutrient absorption",
            "Prevents overload",
            "Maintains energy levels"
          ],
          evidence: "Frequent meals aid fast metabolism (Ref 5)",
          timing: "Small meals every 2-3 hours"
        }
      },
      D: {
        detailedDiet: {
          recommended: [
            { name: "Regular Meals", icon: Clock, examples: ["Balanced meals", "Whole foods"] },
            { name: "Complex Carbohydrates", icon: Wheat, examples: ["Whole grains", "Legumes"] }
          ],
          mechanisms: [
            "Efficient utilization",
            "Sustained energy release",
            "Enhances metabolic efficiency"
          ],
          evidence: "Regular meals support deliberate metabolism (Ref 6)",
          timing: "Three main meals plus snacks"
        }
      }
    },
    processing: {
      F: {
        detailedDiet: {
          recommended: [
            { name: "Specific Food Groups", icon: Salad, examples: ["Focused meals", "Single nutrient sources"] },
            { name: "Nutrient-Dense Foods", icon: Apple, examples: ["Superfoods", "High-quality proteins"] }
          ],
          mechanisms: [
            "Supports specialized pathways",
            "Enhances absorption",
            "Promotes gut health"
          ],
          evidence: "Focused diets support specialization (Ref 7)",
          timing: "Focus on specific groups per meal"
        }
      },
      G: {
        detailedDiet: {
          recommended: [
            { name: "Diverse Nutrients", icon: Salad, examples: ["Mixed meals", "Varied sources"] },
            { name: "Balanced Diet", icon: Apple, examples: ["All groups", "Nutrient variety"] }
          ],
          mechanisms: [
            "Broad metabolic capacity",
            "Enhances diversity",
            "Promotes overall health"
          ],
          evidence: "Diverse diets foster generalist processing (Ref 8)",
          timing: "Include variety in each meal"
        }
      }
    }
  };

  const dietaryReferences = {
    substrate: {
      C: [
        {
          id: 1,
          title: "Dietary fiber and SCFAs in gut microbiota modulation",
          authors: "Smith et al.",
          journal: "Nature Reviews Gastroenterology",
          year: 2020,
          doi: "10.1038/nrgastro.2020.32"
        }
      ],
      P: [
        {
          id: 2,
          title: "Protein fermentation and gut microbiota",
          authors: "Johnson et al.",
          journal: "Microbiome Journal",
          year: 2021,
          doi: "10.1186/s40168-021-01056-3"
        }
      ]
    },
    environmental: {
      R: [
        {
          id: 3,
          title: "Diet diversity and gut microbiota adaptability",
          authors: "Lee et al.",
          journal: "Cell Host & Microbe",
          year: 2022,
          doi: "10.1016/j.chom.2022.01.004"
        }
      ],
      S: [
        {
          id: 4,
          title: "Stable dietary patterns and microbiome homeostasis",
          authors: "Garcia et al.",
          journal: "Gut Microbes",
          year: 2019,
          doi: "10.1080/19490976.2019.1609472"
        }
      ]
    },
    tempo: {
      F: [
        {
          id: 5,
          title: "Frequent meals and metabolic rate",
          authors: "Nguyen et al.",
          journal: "Am J Clin Nutr",
          year: 2020,
          doi: "10.1093/ajcn/nqaa123"
        }
      ],
      D: [
        {
          id: 6,
          title: "Regular meal patterns improve metabolic efficiency",
          authors: "Martinez et al.",
          journal: "J Nutr",
          year: 2021,
          doi: "10.1093/jn/nxab115"
        }
      ]
    },
    processing: {
      F: [
        {
          id: 7,
          title: "Focused dietary patterns and specialized gut pathways",
          authors: "Kim et al.",
          journal: "Frontiers in Microbiology",
          year: 2022,
          doi: "10.3389/fmicb.2022.845678"
        }
      ],
      G: [
        {
          id: 8,
          title: "Dietary diversity fosters a generalist microbiome",
          authors: "Wang et al.",
          journal: "Science",
          year: 2021,
          doi: "10.1126/science.abf9840"
        }
      ]
    }
  };

  const TypeDimensionCard = ({ dimension, icon: Icon }) => {
    const isActive = activeCard === dimension;
    const dimensionMap = {
      0: 'substrate',
      1: 'environmental',
      2: 'tempo',
      3: 'processing'
    };
    const dimensionType = personalityType[dimension];
    const dimensionKey = dimensionMap[dimension];
    const currentOption = typeDescriptions[dimensionKey][dimensionType];
  
    return (
      <div 
        className={`
          bg-gradient-to-br from-white 
          ${dimension === 0 ? 'to-indigo-50' : 
            dimension === 1 ? 'to-emerald-50' : 
            dimension === 2 ? 'to-amber-50' : 
            'to-violet-50'} 
          rounded-lg p-4 shadow-sm border transition-all duration-300 cursor-pointer
          ${isActive ? 'ring-2 ring-offset-2 ring-purple-400 shadow-lg' : 'hover:shadow-md hover:scale-[1.02]'}
        `}
        onClick={() => setActiveCard(isActive ? null : dimension)}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-start gap-2">
            <Icon className={`h-5 w-5 ${currentOption.color} mt-0.5`} />
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
  
        <div className="relative h-16 bg-white bg-opacity-60 backdrop-blur-sm rounded-lg overflow-hidden flex mb-3">
          {Object.entries(typeDescriptions[dimensionKey]).map(([key, value], idx, arr) => {
            const isSelected = dimensionType === key;
            const isFirst = idx === 0;
            const isLast = idx === arr.length - 1;
            const colorClass = value.color.split('-')[1];
            return (
              <div 
                key={key}
                className={`
                  flex-1 flex items-center justify-center
                  ${isFirst ? 'rounded-l-lg' : ''}
                  ${isLast ? 'rounded-r-lg' : ''}
                  border border-gray-200
                  p-2 transition-all duration-300
                  bg-white
                  ${isSelected ? 
                    `bg-gradient-to-br from-${colorClass}-50 to-${colorClass}-100 
                    ring-2 ring-inset ring-${colorClass}-400
                    shadow-inner` : 
                    'hover:bg-gray-50'}
                `}
              >
                <div className="text-center">
                  <div className={`font-medium text-sm ${isSelected ? value.color : 'text-gray-600'}`}>{key}</div>
                  <div className={`text-xs ${isSelected ? 'text-gray-800' : 'text-gray-500'}`}>{value.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
  
        <p className="text-sm text-gray-600">{currentOption.trait}</p>
        
        {isActive && (
          <div className="mt-4 space-y-2">
            <div className="text-sm space-y-1">
              <div className="font-medium flex items-start gap-1">
                <GraduationCap className="h-4 w-4 mt-0.5" />
                Key Pathways
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {currentOption.pathways.map((pathway, i) => (
                  <li key={i}>{pathway}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm space-y-1">
              <div className="font-medium flex items-start gap-1">
                <Lightbulb className="h-4 w-4 mt-0.5" />
                Dietary Recommendation
              </div>
              <p className="text-gray-600">{currentOption.diet}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const dimensionTitles = {
    substrate: "Substrate Preference",
    environmental: "Environmental Adaptation",
    tempo: "Metabolic Tempo",
    processing: "Processing Style"
  };

  const dimensionIcons = {
    substrate: Pizza,
    environmental: Apple,
    tempo: Utensils,
    processing: Clock
  };

  const dimensionOrder = ["substrate", "environmental", "tempo", "processing"];

  return (
    <Card className="bg-gradient-to-br from-white to-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="h-6 w-6 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Microbiome Personality Profile
          </span>
        </CardTitle>
        <CardDescription>
          <div className="flex flex-col gap-1 items-center text-center sm:items-start sm:text-left">
            <span className="font-bold text-xl text-gray-600 flex items-center gap-2 justify-center sm:justify-start w-full">
              <span>{personalityType}</span>
              <span className="inline-block">
                {(() => {
                  const type = personalityType;
                  switch(type) {
                    case 'CRDF': return '🌿 The Balanced Cultivator';
                    case 'CRDG': return '🌱 The Adaptive Gardener';
                    case 'CRFF': return '🍃 The Swift Harvester';
                    case 'CRFG': return '🌺 The Diverse Botanist';
                    case 'CSDF': return '🌾 The Steady Farmer';
                    case 'CSDG': return '🎋 The Wise Steward';
                    case 'CSFF': return '🌲 The Forest Keeper';
                    case 'CSFG': return '🪴 The Garden Master';
                    case 'PRDF': return '🦁 The Patient Hunter';
                    case 'PRDG': return '🐯 The Adaptive Predator';
                    case 'PRFF': return '🐆 The Swift Tracker';
                    case 'PRFG': return '🦊 The Clever Fox';
                    case 'PSDF': return '🦅 The Steady Hawk';
                    case 'PSDG': return '🦉 The Wise Owl';
                    case 'PSFF': return '🐺 The Pack Leader';
                    case 'PSFG': return '🦈 The Ocean Navigator';
                    default: return '🧬 The Explorer';
                  }
                })()}
              </span>
            </span>
            <span className="text-sm text-black italic sm:max-w-2xl">
              {(() => {
                const type = personalityType;
                const primary = type.startsWith('C') ? 'Thrives on complex carbohydrates' : 'Excels with protein processing';
                const adaptation = type[1] === 'R' ? 'highly adaptable' : 'consistently stable';
                const speed = type[2] === 'F' ? 'fast metabolism' : 'measured metabolism';
                const style = type[3] === 'F' ? 'focused processing' : 'versatile processing';
                return `${primary}, ${adaptation}, with ${speed} and ${style}`;
              })()}
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TypeDimensionCard dimension={0} icon={Beaker} />
            <TypeDimensionCard dimension={1} icon={Waves} />
            <TypeDimensionCard dimension={2} icon={Timer} />
            <TypeDimensionCard dimension={3} icon={GitBranch} />
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border">
            <button 
              onClick={() => toggleSection('understanding')}
              className="w-full flex items-center justify-between mb-2"
            >
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-black" />
                <h4 className="font-medium text-black">Understanding Your Microbiome Type</h4>
              </div>
              {expandedSections.understanding ? 
                <ChevronDown className="h-4 w-4 text-black" /> : 
                <ChevronRight className="h-4 w-4 text-black" />
              }
            </button>

            {expandedSections.understanding && (
              <div className="space-y-3 mt-4 text-sm text-gray-700">
                <p>Your gut microbiome is a dynamic ecosystem made up of trillions of bacteria.</p>
                <p>It shifts as your diet and lifestyle change, reflecting what you eat, how active you are, and your overall health status.</p>
                <p>We identify four key dimensions that define your microbiome's personality:</p>
                <ul className="list-disc list-inside">
                  <li><strong>Substrate:</strong> Preferred energy sources (carbs or proteins).</li>
                  <li><strong>Environment:</strong> Adaptive or stable response to changes.</li>
                  <li><strong>Metabolism:</strong> Fast or deliberate nutrient processing.</li>
                  <li><strong>Processing:</strong> Focused or generalist breakdown of foods.</li>
                </ul>
                <p>By combining these dimensions, you gain insight into why certain foods benefit you more than others.</p>
                <p>Your type is not fixed. It can evolve as you adjust your diet, use supplements, or change your routine.</p>
                <p>Regular re-checks help ensure your dietary choices continue to align with your evolving gut ecosystem.</p>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border">
            <button 
              onClick={() => toggleSection('characteristics')}
              className="w-full flex items-center justify-between mb-2"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <h4 className="font-medium text-black">Type Characteristics</h4>
              </div>
              {expandedSections.characteristics ? 
                <ChevronDown className="h-4 w-4 text-black" /> : 
                <ChevronRight className="h-4 w-4 text-black" />
              }
            </button>
            
            {expandedSections.characteristics && (
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-700">
                  Each letter in your type code corresponds to traits that explain how your microbiome interacts with food and adapts over time.
                </p>
                {Object.entries(typeDescriptions).map(([key, options], index) => {
                  const icons = [
                    <FlaskRound className="h-5 w-5" />,
                    <Workflow className="h-5 w-5" />,
                    <Zap className="h-5 w-5" />,
                    <Network className="h-5 w-5" />
                  ];
                  
                  return (
                    <div key={key} 
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${options[personalityType[index]].color}`}>
                          {icons[index]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-lg text-black">
                              {options[personalityType[index]].title}
                            </span>
                            <span className={`text-sm px-2 py-0.5 rounded-full ${options[personalityType[index]].color.replace('text', 'bg')} bg-opacity-10`}>
                              Type {personalityType[index]}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>{options[personalityType[index]].desc}</p>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              <div>
                                <div className="font-medium text-gray-900 mb-1">Key Pathways</div>
                                <ul className="list-disc list-inside">
                                  {options[personalityType[index]].pathways.map((pathway, i) => (
                                    <li key={i}>{pathway}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 mb-1">
                                  {options[personalityType[index]].products ? 'Products' : 'Features'}
                                </div>
                                <ul className="list-disc list-inside">
                                  {(options[personalityType[index]].products || options[personalityType[index]].features).map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">
                              These traits guide dietary approaches that may improve digestive comfort and overall wellness.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-blue-100">
            <button 
              onClick={() => toggleSection('dietary')}
              className="w-full flex items-center justify-between mb-2"
            >
              <div className="flex items-center gap-2">
                <Salad className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium text-black">Detailed Dietary Recommendations</h4>
              </div>
              {expandedSections.dietary ? 
                <ChevronDown className="h-4 w-4 text-black" /> : 
                <ChevronRight className="h-4 w-4 text-black" />
              }
            </button>
      
            {expandedSections.dietary && (
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-700">
                  Below are targeted suggestions based on your type. Adjust as you learn how your body responds.
                </p>
                {dimensionOrder.map((dimKey, i) => {
                  const dimType = personalityType[i];
                  const dietDetails = dietaryDetails[dimKey]?.[dimType]?.detailedDiet;
                  if (!dietDetails) return null;

                  return (
                    <div key={dimKey} className="bg-white p-4 rounded-lg shadow-sm">
                      <button
                        onClick={() => toggleDietarySection(dimKey)}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <div className="flex items-center gap-2">
                          {React.createElement(dimensionIcons[dimKey], { className: "h-5 w-5 text-blue-500" })}
                          <h5 className="font-medium text-black">{dimensionTitles[dimKey]}</h5>
                        </div>
                        {expandedDietarySections[dimKey] ? 
                          <ChevronDown className="h-4 w-4 text-black" /> :
                          <ChevronRight className="h-4 w-4 text-black" />
                        }
                      </button>

                      {expandedDietarySections[dimKey] && (
                        <div className="space-y-4">
                          <div>
                            <div className="font-medium text-sm text-black mb-1">Recommended Foods</div>
                            <ul className="space-y-2">
                              {dietDetails.recommended.map((rec, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  {React.createElement(rec.icon, { className: "h-5 w-5 text-gray-600 mt-0.5" })}
                                  <div className="text-sm text-gray-700">
                                    <strong>{rec.name}:</strong> {rec.examples.join(', ')}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="font-medium text-sm text-black mb-1">Mechanisms</div>
                            <ul className="list-disc list-inside text-sm text-gray-700">
                              {dietDetails.mechanisms.map((mech, idx) => (
                                <li key={idx}>{mech}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="font-medium text-sm text-black mb-1">Evidence</div>
                            <p className="text-sm text-gray-700">{dietDetails.evidence}</p>
                          </div>

                          <div>
                            <div className="font-medium text-sm text-black mb-1">Timing</div>
                            <p className="text-sm text-gray-700">{dietDetails.timing}</p>
                          </div>

                          <div className="bg-blue-50 p-3 rounded-lg">
                            <button
                              onClick={() => toggleReferenceSection(dimKey)}
                              className="w-full flex items-center justify-between mb-2"
                            >
                              <div className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-600" />
                                <h5 className="font-medium text-black">References</h5>
                              </div>
                              {expandedReferenceSections[dimKey] ? 
                                <ChevronDown className="h-4 w-4 text-black" /> :
                                <ChevronRight className="h-4 w-4 text-black" />
                              }
                            </button>

                            {expandedReferenceSections[dimKey] && (
                              <div className="space-y-2">
                                {(dietaryReferences[dimKey][dimType] || []).map(ref => (
                                  <div key={ref.id} className="flex items-start gap-2 p-2 bg-white rounded-lg">
                                    <Link2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                                    <span className="text-sm text-gray-600">
                                      {ref.authors} ({ref.year}). <span className="font-medium">{ref.title}</span>. 
                                      <i> {ref.journal}</i>.{' '}
                                      <a 
                                        href={`https://doi.org/${ref.doi}`} 
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        DOI: {ref.doi}
                                      </a>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
      
          <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border">
            <button 
              onClick={() => toggleSection('monitoring')}
              className="w-full flex items-center justify-between mb-2"
            >
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-black">Monitoring & Adaptation</h4>
              </div>
              {expandedSections.monitoring ? 
                <ChevronDown className="h-4 w-4 text-black" /> : 
                <ChevronRight className="h-4 w-4 text-black" />
              }
            </button>
      
            {expandedSections.monitoring && (
              <div className="space-y-4 mt-4 text-sm text-gray-700">
                <p>Your microbiome will change as you adjust your diet and lifestyle.</p>
                <p>Regular re-checks every 3-6 months help ensure your recommendations remain effective.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2 text-black">
                      <BrainCircuit className="h-4 w-4 text-purple-600" />
                      Type Stability
                    </h5>
                    <p className="text-sm text-gray-700">
                      Some types remain steady, while others shift more quickly. Monitoring helps you understand these patterns and adapt as needed.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2 text-black">
                      <CircleDotDashed className="h-4 w-4 text-purple-600" />
                      Adaptation Strategy
                    </h5>
                    <p className="text-sm text-gray-700">
                      When you make major dietary changes, re-assessing your type can guide the next steps for ongoing improvement.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  By staying informed, you can continually refine your approach and support a healthier, happier gut.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicrobiomePersonalityV2;
