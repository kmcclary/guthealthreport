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
  const [expandedSections, setExpandedSections] = useState({
    characteristics: false,
    dietary: false,
    pathways: false,
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

  const dietaryDetails = {
    substrate: {
      C: {
        detailedDiet: {
          recommended: [
            { name: "Complex Carbohydrates", icon: Wheat, examples: ["Whole grains", "Legumes", "Root vegetables"] },
            { name: "Dietary Fiber", icon: Leaf, examples: ["Psyllium husk", "Inulin", "Resistant starch"] }
          ],
          mechanisms: [
            "Enhanced butyrate production through fermentation",
            "Increased microbial diversity",
            "Improved barrier function"
          ],
          evidence: "Multiple clinical trials have shown increased SCFA production with complex carb intake (Ref 1)",
          timing: "Optimal consumption: Spread throughout the day"
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
          evidence: "Studies show improved protein metabolism with balanced intake (Ref 2)",
          timing: "Protein intake best distributed across meals"
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
            "Supports dynamic microbial adaptation",
            "Enhances resilience to dietary changes",
            "Promotes gut health"
          ],
          evidence: "Research indicates benefits of varied diet on gut adaptability (Ref 3)",
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
            "Maintains stable microbial environment",
            "Supports homeostasis",
            "Promotes long-term gut health"
          ],
          evidence: "Studies show consistent diet supports stable microbiome (Ref 4)",
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
            "Supports rapid nutrient absorption",
            "Prevents digestive overload",
            "Maintains energy levels"
          ],
          evidence: "Frequent meals shown to support fast metabolism (Ref 5)",
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
            "Supports efficient nutrient utilization",
            "Promotes sustained energy release",
            "Enhances metabolic efficiency"
          ],
          evidence: "Regular meals support deliberate metabolism (Ref 6)",
          timing: "Three main meals with snacks"
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
            "Supports specialized metabolic pathways",
            "Enhances nutrient absorption",
            "Promotes gut health"
          ],
          evidence: "Focused diets shown to support specialized processing (Ref 7)",
          timing: "Specific food groups per meal"
        }
      },
      G: {
        detailedDiet: {
          recommended: [
            { name: "Diverse Nutrients", icon: Salad, examples: ["Mixed meals", "Varied food sources"] },
            { name: "Balanced Diet", icon: Apple, examples: ["All food groups", "Nutrient variety"] }
          ],
          mechanisms: [
            "Supports broad metabolic capacity",
            "Enhances microbial diversity",
            "Promotes overall health"
          ],
          evidence: "Diverse diets support generalist processing (Ref 8)",
          timing: "Incorporate variety in each meal"
        }
      }
    }
  };

  // Assigning references per type for demonstration purposes
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

  const TypeDimensionCard = ({ dimension, icon: Icon, options }) => {
    const isActive = activeCard === dimension;
    
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
            
            const colorClass = value.color.split('-')[1]; // extract color name for gradient
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
                <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 rounded-xl border border-purple-100 shadow-sm">
                  <div className="flex items-start gap-3 flex-col sm:flex-row">
                    <div className="flex-shrink-0 bg-purple-100 rounded-lg p-2">
                      <Info className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="space-y-4 w-full">
                      <div>
                        <h4 className="text-lg font-medium text-purple-900 mb-2">Understanding Your Microbiome Type</h4>
                        <p className="text-sm text-purple-800 mb-4">
                          Your unique microbiome type is composed of four key dimensions that work together to characterize your gut bacteria's behavior and preferences:
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {[
                          {
                            title: "Substrate",
                            code: "S",
                            types: ["C: Carbohydrate", "P: Protein"],
                            gradient: "from-indigo-50 to-indigo-100",
                            border: "border-indigo-200",
                            icon: <Beaker className="h-5 w-5 text-indigo-600" />
                          },
                          {
                            title: "Environment",
                            code: "E",
                            types: ["R: Responsive", "S: Stable"],
                            gradient: "from-emerald-50 to-emerald-100",
                            border: "border-emerald-200",
                            icon: <Waves className="h-5 w-5 text-emerald-600" />
                          },
                          {
                            title: "Metabolism",
                            code: "M",
                            types: ["F: Fast", "D: Deliberate"],
                            gradient: "from-amber-50 to-amber-100",
                            border: "border-amber-200",
                            icon: <Timer className="h-5 w-5 text-amber-600" />
                          },
                          {
                            title: "Processing",
                            code: "P",
                            types: ["F: Focused", "G: Generalist"],
                            gradient: "from-violet-50 to-violet-100",
                            border: "border-violet-200",
                            icon: <GitBranch className="h-5 w-5 text-violet-600" />
                          }
                        ].map((dim, idx) => (
                          <div 
                            key={idx} 
                            className={`bg-gradient-to-br ${dim.gradient} p-4 rounded-xl border ${dim.border} shadow-sm hover:shadow-md transition-shadow text-left`}
                          >
                            <div className="flex items-start gap-2 mb-3">
                              {dim.icon}
                              <div className="space-y-1">
                                <h5 className="font-medium text-gray-900">{dim.title}</h5>
                                <div className="inline-block px-2 py-0.5 bg-white bg-opacity-50 rounded-full text-xs font-medium">
                                  Type {dim.code}
                                </div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              {dim.types.map((type, i) => (
                                <div key={i} className="text-sm bg-white bg-opacity-70 px-2 py-1 rounded">
                                  {type}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-white bg-opacity-70 rounded-lg p-3">
                        <div className="flex items-start gap-2 text-sm text-purple-800">
                          <Scale className="h-4 w-4 flex-shrink-0 mt-0.5 text-purple-600" />
                          <span className="text-left">Each dimension contributes equally to your overall microbiome profile, creating a balanced assessment of your gut ecosystem.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border">
                  <button 
                    onClick={() => toggleSection('characteristics')}
                    className="w-full flex items-center justify-between mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-purple-600" />
                      <h4 className="font-medium">Type Characteristics</h4>
                    </div>
                    {expandedSections.characteristics ? 
                      <ChevronDown className="h-4 w-4 text-purple-600" /> : 
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    }
                  </button>
                  
                  {expandedSections.characteristics && (
                    <div className="space-y-4 mt-4">
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
                                  <span className="font-medium text-lg">
                                    {options[personalityType[index]].title}
                                  </span>
                                  <span className={`text-sm px-2 py-0.5 rounded-full ${options[personalityType[index]].color.replace('text', 'bg')} bg-opacity-10`}>
                                    Type {personalityType[index]}
                                  </span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
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
                      <h4 className="font-medium">Detailed Dietary Recommendations</h4>
                    </div>
                    {expandedSections.dietary ? 
                      <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    }
                  </button>
            
                  {expandedSections.dietary && (
                    <div className="space-y-4 mt-4">
                      {/* Create an expandable section for each dimension */}
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
                                <h5 className="font-medium">{dimensionTitles[dimKey]}</h5>
                              </div>
                              {expandedDietarySections[dimKey] ? 
                                <ChevronDown className="h-4 w-4 text-blue-500" /> :
                                <ChevronRight className="h-4 w-4 text-blue-500" />
                              }
                            </button>

                            {expandedDietarySections[dimKey] && (
                              <div className="space-y-4">
                                <div>
                                  <div className="font-medium text-sm mb-1">Recommended Foods</div>
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
                                  <div className="font-medium text-sm mb-1">Mechanisms</div>
                                  <ul className="list-disc list-inside text-sm text-gray-700">
                                    {dietDetails.mechanisms.map((mech, idx) => (
                                      <li key={idx}>{mech}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <div className="font-medium text-sm mb-1">Evidence</div>
                                  <p className="text-sm text-gray-700">{dietDetails.evidence}</p>
                                </div>

                                <div>
                                  <div className="font-medium text-sm mb-1">Timing</div>
                                  <p className="text-sm text-gray-700">{dietDetails.timing}</p>
                                </div>

                                {/* References */}
                                <div className="bg-blue-50 p-3 rounded-lg">
                                  <button
                                    onClick={() => toggleReferenceSection(dimKey)}
                                    className="w-full flex items-center justify-between mb-2"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Target className="h-5 w-5 text-blue-600" />
                                      <h5 className="font-medium">References</h5>
                                    </div>
                                    {expandedReferenceSections[dimKey] ? 
                                      <ChevronDown className="h-4 w-4 text-blue-600" /> :
                                      <ChevronRight className="h-4 w-4 text-blue-600" />
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
                      <h4 className="font-medium">Monitoring & Adaptation</h4>
                    </div>
                    {expandedSections.monitoring ? 
                      <ChevronDown className="h-4 w-4 text-green-600" /> : 
                      <ChevronRight className="h-4 w-4 text-green-600" />
                    }
                  </button>
            
                  {expandedSections.monitoring && (
                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <BrainCircuit className="h-4 w-4 text-purple-600" />
                            Type Stability
                          </h5>
                          <p className="text-sm text-gray-600">
                            Your microbiome type reflects your current gut ecosystem state. 
                            Regular monitoring helps track changes and adapt recommendations accordingly.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <CircleDotDashed className="h-4 w-4 text-purple-600" />
                            Adaptation Strategy
                          </h5>
                          <p className="text-sm text-gray-600">
                            As your diet and lifestyle change, your microbiome adapts. 
                            We recommend reassessing every 3-6 months for optimal guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
