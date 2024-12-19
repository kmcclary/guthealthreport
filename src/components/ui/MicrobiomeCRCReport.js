import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './Card';
import { 
  CircuitBoard, 
  AlertCircle,
  CheckCircle2,
  Info,
  Circle,
  ArrowRight,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ChevronDown,
  // Added imports
  Star,
  Heart,
  Shield,
  Sun,
  User,
  Activity,
  Target,
  Microscope,
  TestTube,    // Instead of Flask
  Crown,
  BadgeAlert,
  Beaker,
  Binary,
  ArrowUpCircle,
  ArrowDownCircle,
} from 'lucide-react';

const PatientInfoDropdown = ({ patientData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium">Patient Information</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-sm text-sm text-gray-600">
          <div className="grid grid-cols-2 gap-y-2">
            <p><span className="font-semibold">Patient:</span> {patientData.patientName}</p>
            <p><span className="font-semibold">DOB:</span> {patientData.patientDOB}</p>
            <p><span className="font-semibold">Ordering Physician:</span> {patientData.physicianName}</p>
            <p><span className="font-semibold">Test ID:</span> {patientData.testId}</p>
            <p><span className="font-semibold">Collection Date:</span> {patientData.collectionDate}</p>
            <p><span className="font-semibold">Report Date:</span> {patientData.reportDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const MicrobiomeCRCReport = () => {
  // Example patient data
  const patientData = {
    testId: "MBX-2024-0472",
    patientName: "John Doe",
    patientDOB: "1975-07-22",
    physicianName: "Dr. Jane Smith",
    collectionDate: "2024-03-15",
    reportDate: "2024-03-18",
    resultStatus: "POSITIVE",
    riskScore: 0.82,
    patientNotes: "Patient reported intermittent changes in bowel habits and mild abdominal discomfort."
  };

  // Microbial markers identified in this particular patient’s sample
  const microbialMarkers = [
    {
      name: "Fusobacterium nucleatum",
      value: 2.0,
      referenceRange: "< 1.2",
      unit: "relative abundance",
      status: "HIGH",
      description: "Most consistently reported CRC-associated bacterium across multiple datasets with highest effect sizes. Strong evidence for involvement in tumor development and progression through modulation of inflammatory pathways.",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Peptostreptococcus stomatis",
      value: 1.8,
      referenceRange: "< 1.5",
      unit: "relative abundance", 
      status: "HIGH",
      description: "One of the most significant species with the highest effect size in meta-analysis studies. Frequently associated with early-stage colorectal cancer development.",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Parvimonas micra",
      value: 1.7,
      referenceRange: "< 1.4",
      unit: "relative abundance",
      status: "HIGH", 
      description: "Strong and consistent association with CRC across multiple datasets. Particularly relevant for advanced disease stages.",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Solobacterium moorei",
      value: 1.6,
      referenceRange: "< 1.3",
      unit: "relative abundance",
      status: "HIGH",
      description: "Shows high effect size with consistent enrichment across multiple CRC cohorts and meta-analyses.",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Clostridium symbiosum",
      value: 1.5,
      referenceRange: "< 1.2",
      unit: "relative abundance",
      status: "HIGH",
      description: "Identified as potential marker for early CRC detection with significant enrichment in meta-analysis studies.",
      clinicalSignificance: "MODERATE"
    },
    {
      name: "choline trimethylamine-lyase (cutC) gene",
      value: 2.1,
      referenceRange: "< 1.6",
      unit: "relative abundance",
      status: "HIGH",
      description: "Key functional gene significantly overabundant in CRC, indicating altered choline metabolism. Different variants show distinct associations with disease status.",
      clinicalSignificance: "HIGH"
    }
  ];

  const renderStatus = (status) => {
    if (status === "HIGH") {
      return (
        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
          High
        </span>
      );
    }
    return (
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
        Normal
      </span>
    );
  };

  const renderGradientMeter = (value, referenceRange, status) => {
    const maxValue = parseFloat(referenceRange.replace("< ", "")) * 2;
    const percentage = (value / maxValue) * 100;
    const gradientClass = status === "HIGH" 
      ? "bg-gradient-to-r from-green-300 via-yellow-300 to-red-500"
      : "bg-gradient-to-r from-green-500 to-emerald-400";
  
    return (
      <div className="relative w-full">
        <div className={`h-2 ${gradientClass} rounded-full`}>
          <div 
            className="absolute"
            style={{
              left: `${percentage}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center border border-black">
                {value}
              </div>
              <div className="bg-transparent absolute w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-black -bottom-2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 bg-gray-50 text-gray-900">
      {/* Header Section with Branding and Patient Information Dropdown */}
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <CircuitBoard className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">MicrobiomeScreen™</h1>
            <p className="text-sm text-gray-600">Advanced Colorectal Cancer Screening Test</p>
          </div>
        </div>
        <PatientInfoDropdown patientData={patientData} />
      </div>

      {/* Patient Notes with added icon */}
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900 flex items-start gap-2">
        <User className="h-5 w-5 text-blue-500 mt-0.5" />
        <div>
          <p className="font-medium">Patient Notes &amp; History:</p>
          <p className="mt-1">
            {patientData.patientNotes} No family history of colorectal cancer is reported. The patient’s diet is high in fat, with intermittent NSAID use and no recent antibiotics.
          </p>
        </div>
      </div>

      {/* Result Summary Card with added icon and color */}
      <Card className="border-t-4 border-t-red-500 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-500" />
              Test Result: {patientData.resultStatus}
            </CardTitle>
          </div>
          <CardDescription className="text-base mt-2 text-red-700">
            This result suggests an elevated risk for colorectal cancer or precancerous polyps based on the analyzed microbial profile, including Tier 1 biomarkers like Fusobacterium nucleatum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg text-sm flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Recommended Next Steps:</p>
              <p className="text-red-700 mt-2">
                Consult your healthcare provider. A diagnostic colonoscopy is recommended to visualize and investigate potential lesions. Further imaging, lifestyle interventions, and possibly additional genomic or metabolic tests may be considered.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment Details with added icon */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Comprehensive Risk Assessment Details
          </CardTitle>
          <CardDescription className="mt-2">
            Explore the personalized risk score, test performance metrics, and the CRC-associated microbiome signatures.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 text-sm">
            {/* Risk Score Visualization with added icon */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium text-gray-700">Risk Score</span>
                </div>
                <span className="font-medium text-gray-700">{(patientData.riskScore * 100).toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" 
                  style={{width: `${patientData.riskScore * 100}%`}}
                />
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">
                The risk score integrates bacterial DNA patterns, key CRC-associated taxa, functional pathways (e.g., putrefaction, gluconeogenesis), and known biomarkers. A higher percentage correlates with a greater likelihood of underlying neoplastic changes.
              </p>
            </div>

            {/* Analyzed Markers & Test Performance with added icons and color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-900 flex items-center gap-2">
                  <Circle className="h-5 w-5 text-blue-500" />
                  Analyzed Biological Markers
                </h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">CRC-Associated Bacterial Taxa:</span> Includes Tier 1 markers like <em>Fusobacterium nucleatum</em> and other species enriched in CRC. These organisms may promote inflammation and tumorigenesis.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Functional Pathways:</span> We assess pathways (e.g., putrefaction, gluconeogenesis) and genes (e.g., cutC) known to drive CRC-related metabolic shifts.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Inflammatory Indicators:</span> Detection of bacterial species and metabolites contributing to chronic inflammation, a recognized factor in colorectal carcinogenesis.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-purple-900 flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-500" />
                  Test Performance Highlights
                </h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">93% Detection Rate (Sensitivity):</span> High ability to identify individuals with underlying colorectal neoplasia.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">87% Specificity:</span> A relatively low false-positive rate, but colonoscopy remains essential for confirmation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Quality &amp; Compliance:</span> CLIA-certified, CAP-accredited, ensuring reliable and reproducible results.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our integrative approach stays updated with emerging clinical research, ensuring that new biomarkers, microbial genes, and functional pathways are considered as evidence evolves.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Microbial Markers Detail with added icon */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle>Key Microbial Markers</CardTitle>
          </div>
          <CardDescription className="mt-2">
            Taxa with known associations to CRC and their abundance in your sample
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 text-sm">
            {microbialMarkers.map((marker, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className={`font-medium text-lg ${
                      marker.status === "HIGH" ? "text-red-700" : "text-green-700"
                    }`}>
                      {marker.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{marker.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    {renderStatus(marker.status)}
                    <span className="text-sm text-gray-500 mt-1">
                      Clinical Significance: {marker.clinicalSignificance}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <div className="flex items-center gap-2">
                      <TestTube className="h-4 w-4 text-blue-500" />
                      <span>Patient Value: {marker.value} {marker.unit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-500" />
                      <span>Reference Range: {marker.referenceRange}</span>
                    </div>
                  </div>
                  {renderGradientMeter(marker.value, marker.referenceRange, marker.status)}
                </div>
              </div>
            ))}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex gap-2">
                <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div className="text-blue-800 leading-relaxed">
                  <p>
                    The observed microorganisms are a subset of a broader network of bacteria consistently linked to CRC. Key Tier 1 species like <em>Fusobacterium nucleatum</em> are known to strongly correlate with tumorigenesis. Functional gene markers such as choline trimethylamine-lyase (cutC) and pathways favoring amino acid fermentation also drive CRC-associated microbial profiles.
                  </p>
                  <p className="mt-2">
                    Interpreting these results in the context of your health profile, lifestyle, and family history is essential. Consult with a qualified healthcare professional for further guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biomarker Tier Overview with added icon */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-yellow-500" />
            Microbiome Biomarker Tiers
          </CardTitle>
          <CardDescription className="mt-2">
            Understanding the priority tiers of CRC-associated biomarkers
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Biomarkers are grouped based on strength of evidence, reproducibility, and effect size. Tier 1 biomarkers (e.g., <em>Fusobacterium nucleatum</em>) are consistently reported across studies and strongly associated with CRC.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-semibold">Tier 1 (High Priority):</span> 
              <em> Fusobacterium nucleatum</em>, <em>Solobacterium moorei</em>, <em>Porphyromonas asaccharolytica</em>, <em>Parvimonas micra</em>, and the <em>cutC</em> gene.
            </li>
            <li>
              <span className="font-semibold">Tier 2 (Moderate Priority):</span> 
              <em> Clostridium symbiosum</em>, gluconeogenesis pathways, and control-associated species like <em>Bifidobacterium catenulatum</em> (depleted in CRC).
            </li>
            <li>
              <span className="font-semibold">Tier 3 (Lower Priority):</span> 
              Additional species (e.g., <em>Fusobacterium mortiferum</em>, <em>Anaerococcus vaginalis</em>) and less consistently enriched biomarkers.
            </li>
            <li>
              <span className="font-semibold">Tier 4 (Adenoma-Focused):</span> 
              Metabolites like secondary bile acids and polyamines that may be relevant for early adenoma detection.
            </li>
          </ul>
          <p>
            These categorizations guide clinicians and researchers in prioritizing confirmatory tests, tailoring interventions, and informing future research directions.
          </p>
        </CardContent>
      </Card>

      {/* Detailed Taxa Section */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-purple-600" /> {/* Changed from Bacteria */}
            Bacterial Taxa Associated with CRC &amp; Controls
          </CardTitle>
          <CardDescription className="mt-2">
            Detailed information on bacterial taxa enriched in CRC and control samples
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-6">
          {/* Tier 1 Biomarkers */}
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-red-500" />
              <span>Tier 1: High Priority Biomarkers</span>
            </h3>
            <p className="text-red-700 mb-3">Strong evidence, high effect sizes, and reproducible associations with CRC.</p>
            <ul className="list-none space-y-3">
              {/* Convert list items to custom styled components */}
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Fusobacterium nucleatum:</span> Most consistently reported CRC-associated bacterium with high effect sizes. Involved in tumorigenesis and modulating the tumor microenvironment.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Solobacterium moorei:</span> Consistently identified with high effect sizes across multiple CRC cohorts.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Porphyromonas asaccharolytica:</span> Consistently identified with high effect sizes in CRC patients.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Parvimonas micra:</span> Strong association with CRC, particularly in advanced stages.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Choline Trimethylamine-Lyase Gene (cutC):</span> Overabundant in CRC, indicating a link between microbiome choline metabolism and CRC.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Putrefaction and Fermentation Pathways:</span> Overabundant in CRC, these pathways are related to amino acid metabolism, producing tumor-promoting compounds.
                </div>
              </li>
            </ul>
          </div>

          {/* Tier 2 Biomarkers */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
              <Microscope className="h-5 w-5 text-orange-500" />
              <span>Tier 2: Moderate Priority Biomarkers</span>
            </h3>
            <p className="text-orange-700 mb-3">Good evidence with lower effect sizes and some variability.</p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Clostridium symbiosum:</span> Potential marker for early CRC detection with strong enrichment in meta-analyses.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Gordonibacter pamelaeae:</span> Generally associated with healthy controls but shows enrichment in some CRC studies; may mediate dietary changes.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Bifidobacterium catenulatum:</span> Control-associated species; consistently depleted in CRC and used as a probiotic supplement.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Gluconeogenesis Pathways:</span> Overabundant in CRC, indicating metabolic shifts that could drive cancer development.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Starch, Stachyose, and Galactose Degradation:</span> Overabundant in healthy controls, suggesting diet-associated functional shifts.
                </div>
              </li>
            </ul>
          </div>

          {/* Tier 3 Biomarkers */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
              <TestTube className="h-5 w-5 text-yellow-600" /> {/* Changed from Flask */}
              <span>Tier 3: Lower Priority Biomarkers</span>
            </h3>
            <p className="text-yellow-700 mb-3">Limited evidence with more variable associations.</p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Anaerococcus vaginalis:</span> Often enriched in CRC but with variability across datasets.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Peptostreptococcus anaerobius:</span> Enriched in CRC with less consistent associations.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Fusobacterium mortiferum:</span> Enriched in CRC across several datasets but less consistently than F. nucleatum.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Increased Oral Species Richness/Abundance:</span> Presence of oral taxa in stool is often more abundant in CRC, suggesting translocation from the oral cavity.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Altered Secondary Bile Acid Levels:</span> Consistently found in CRC; may point to changes in bile acid metabolism.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Branched-Chain Amino Acids and Phenylalanine:</span> Elevated in CRC and advanced adenomas; associated with cancer metabolism pathways.
                </div>
              </li>
            </ul>
          </div>

          {/* Tier 4 Biomarkers */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
              <BadgeAlert className="h-5 w-5 text-blue-500" />
              <span>Tier 4: Markers for Adenoma Testing</span>
            </h3>
            <p className="text-blue-700 mb-3">Potential indicators of early metabolic dysbiosis.</p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-500 mt-1" />
                <div>
                  <span className="font-semibold">Secondary Bile Acids and Polyamines:</span> Elevated in adenomas; may indicate early metabolic changes but require further validation.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-500 mt-1" />
                <div>
                  <span className="font-semibold">Increased UniRef90 Gene Families:</span> Higher genomic activity in the gut microbiome of CRC patients; indicates general shifts but needs more correlation studies.
                </div>
              </li>
            </ul>
          </div>

          {/* Additional Notes in a different style */}
          <div className="bg-green-50 p-4 rounded-lg space-y-3">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Info className="h-5 w-5 text-green-600" />
              <span>Additional Insights</span>
            </h3>
            <div className="flex items-start gap-2">
              <ArrowUpCircle className="h-4 w-4 text-green-600 mt-1" />
              <p>
                <span className="font-semibold">Oral Species:</span> Increased oral species richness and abundance are observed in CRC, suggesting possible translocation of oral bacteria to the gut environment.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowDownCircle className="h-4 w-4 text-green-600 mt-1" />
              <p>
                <span className="font-semibold">Control-Enriched Taxa:</span> Species like <em>Gordonibacter pamelaeae</em> and <em>Bifidobacterium longum</em> are generally beneficial and more abundant in healthy controls.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Functional Pathways & Genes */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Functional Pathways &amp; Microbial Genes</CardTitle>
          <CardDescription className="mt-2">
            Metabolic and genetic signatures shaping CRC-associated microbiomes
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>CRC-Associated Pathways:</strong> Gluconeogenesis, putrefaction, and fermentation pathways (amino acid degradation to polyamines and ammonia), and secondary bile acid conversion are enriched in CRC microbiomes. These functional shifts contribute to a pro-tumorigenic environment.
          </p>
          <p>
            <strong>Control-Associated Pathways:</strong> Starch, stachyose, and galactose degradation, as well as the Calvin-Benson-Bassham cycle, are more abundant in healthy controls, reflecting a more balanced and less inflammatory gut environment.
          </p>
          <p>
            <strong>CRC-Associated Genes:</strong> The choline trimethylamine-lyase (cutC) and activating enzyme (cutD) genes are overrepresented in CRC, driving increased production of trimethylamine (TMA), a metabolite implicated in carcinogenesis.
          </p>
          <p>
            Overabundance of UniRef gene families correlates with CRC samples, indicating genomic-level shifts in microbial community function.
          </p>
        </CardContent>
      </Card>

      {/* Metabolites */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Metabolite Profiles</CardTitle>
          <CardDescription className="mt-2">
            Chemical byproducts reflecting dysbiosis and neoplasia risk
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>CRC-Linked Metabolites:</strong> Branched-chain amino acids (BCAAs), phenylalanine, tyrosine, glycine, serine, secondary bile acids (e.g., deoxycholate), TMA, polyamines (putrescine), ammonia, and isovalerate are often elevated in CRC. These metabolites can promote cellular proliferation, DNA damage, and inflammation.
          </p>
          <p>
            <strong>Control-Linked Metabolites:</strong> Healthy controls have higher levels of metabolites linked to complex carbohydrate degradation and may exhibit lower levels of tumor-promoting compounds.
          </p>
        </CardContent>
      </Card>

      {/* Understanding Your Results */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Understanding Your Results</CardTitle>
          <CardDescription className="mt-2">
            Contextualizing microbial findings within a broader clinical framework
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">What this means:</span> A positive result suggests that your microbiome resembles profiles seen in CRC patients, warranting further investigation.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Important note:</span> Only direct visualization (colonoscopy) can confirm whether lesions are present.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">False positives:</span> Non-CRC factors can influence results. A follow-up colonoscopy helps clarify findings.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Lifestyle considerations:</span> A fiber-rich diet, exercise, and avoidance of excess alcohol and tobacco promote a healthier gut microbiome.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Guidelines:</span> The US Preventive Services Task Force recommends regular screening starting at age 45 for average-risk individuals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            Frequently Asked Questions (FAQ)
          </CardTitle>
          <CardDescription className="mt-2">
            Clarifications for common patient concerns
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <div>
            <p className="font-medium">Q: Do I need a colonoscopy if my test is positive?</p>
            <p>A: A positive result strongly suggests discussing colonoscopy or other diagnostic imaging with your physician.</p>
          </div>
          <div>
            <p className="font-medium">Q: Are there insurance implications?</p>
            <p>A: Check with your insurer. Many cover recommended colorectal cancer screening, but policies vary.</p>
          </div>
          <div>
            <p className="font-medium">Q: Can I improve my gut health before re-testing?</p>
            <p>A: Dietary changes, exercise, and probiotics may help, though they don’t replace the need for confirmatory testing if indicated.</p>
          </div>
          <div>
            <p className="font-medium">Q: How accurate is this test?</p>
            <p>A: While not diagnostic, it has demonstrated high sensitivity and good specificity. Research is ongoing to improve precision.</p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources & References */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            Additional Resources, Methodology &amp; References
          </CardTitle>
          <CardDescription className="mt-2">
            Further reading on the science behind MicrobiomeScreen™
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            <span className="font-medium">Test Methodology:</span> Next-generation sequencing (NGS) of stool samples identifies taxa and functional genes. Bioinformatics pipelines correlate microbial abundances with CRC risk signatures.
          </p>
          <p>
            <span className="font-medium">Limitations:</span> Not a substitute for colonoscopy. Some factors influencing CRC risk (genetics, non-microbial lifestyle factors) are not captured.
          </p>
          <p className="font-medium">Peer-Reviewed Literature &amp; Guidelines:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li><em>Chen, W. et al.</em> (2022). “Gut Microbiome Signatures of Colorectal Cancer.” <em>Gastroenterology</em>, 162(4), 1232-1245.</li>
            <li><em>Liang, Q. et al.</em> (2021). “Microbial Markers for Early Detection of Colorectal Neoplasia.” <em>Nature Medicine</em>, 27(10), 1834-1842.</li>
            <li><em>Smith, J. &amp; Johnson, R.</em> (2020). “Metagenomics in Cancer Screening.” <em>Clinical Cancer Research</em>, 26(11), 2753-2761.</li>
            <li><em>US Preventive Services Task Force.</em> (2021). “Screening for Colorectal Cancer.” <em>JAMA</em>, 325(19), 1965–1977.</li>
            <li><em>American Cancer Society.</em> (2023). “Colorectal Cancer Screening Guidelines.” Available at: <a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.cancer.org</a>.</li>
          </ul>
          <p>
            Additional materials, including patient support and educational resources, can be found at the 
            <a href="https://www.microbiomescreen.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              MicrobiomeScreen™ official website
            </a>.
          </p>
        </CardContent>
      </Card>

      {/* Data Privacy & Compliance */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Data Privacy &amp; Compliance</CardTitle>
          <CardDescription className="mt-2">
            Your health information remains secure and confidential
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-2">
          <p>
            <span className="font-medium">HIPAA Compliance:</span> We adhere to strict privacy regulations, ensuring the confidentiality of your information.
          </p>
          <p>
            <span className="font-medium">Data Encryption &amp; Storage:</span> Secure data handling protocols prevent unauthorized access.
          </p>
          <p>
            <span className="font-medium">Use of Results:</span> Shared only with authorized healthcare providers or as required by law.
          </p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 pt-8 space-y-1">
        <p>MicrobiomeScreen™ is a registered trademark of BioTech Diagnostics, Inc.</p>
        <p>For questions, contact your healthcare provider or call (800) 555-1234 (Mon-Fri, 9am-5pm EST).</p>
        <p className="mt-3">Laboratory Director: Jane Smith, MD, PhD • CLIA #: 99D9999999</p>
        <p>Testing conducted in CLIA-certified and CAP-accredited laboratories. Results are validated by qualified clinical professionals.</p>
        <p className="mt-2">© 2024 BioTech Diagnostics, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MicrobiomeCRCReport;
