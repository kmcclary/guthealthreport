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
  ChevronDown
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
      evidence: "Meta-analysis from Thomas et al. 2019 Nature Medicine",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Peptostreptococcus stomatis",
      value: 1.8,
      referenceRange: "< 1.5",
      unit: "relative abundance", 
      status: "HIGH",
      description: "One of the most significant species with the highest effect size in meta-analysis studies. Frequently associated with early-stage colorectal cancer development.",
      evidence: "Multiple cohort studies and meta-analysis (Thomas et al. 2019)",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Parvimonas micra",
      value: 1.7,
      referenceRange: "< 1.4",
      unit: "relative abundance",
      status: "HIGH", 
      description: "Strong and consistent association with CRC across multiple datasets. Particularly relevant for advanced disease stages.",
      evidence: "Identified in meta-analysis with high effect size (Thomas et al. 2019)",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Solobacterium moorei",
      value: 1.6,
      referenceRange: "< 1.3",
      unit: "relative abundance",
      status: "HIGH",
      description: "Shows high effect size with consistent enrichment across multiple CRC cohorts and meta-analyses.",
      evidence: "Meta-analysis from Thomas et al. 2019",
      clinicalSignificance: "HIGH"
    },
    {
      name: "Clostridium symbiosum",
      value: 1.5,
      referenceRange: "< 1.2",
      unit: "relative abundance",
      status: "HIGH",
      description: "Identified as potential marker for early CRC detection with significant enrichment in meta-analysis studies.",
      evidence: "Thomas et al. 2019, Lee et al. 2023",
      clinicalSignificance: "MODERATE"
    },
    {
      name: "choline trimethylamine-lyase (cutC) gene",
      value: 2.1,
      referenceRange: "< 1.6",
      unit: "relative abundance",
      status: "HIGH",
      description: "Key functional gene significantly overabundant in CRC, indicating altered choline metabolism. Different variants show distinct associations with disease status.",
      evidence: "Meta-analysis shows significant overabundance (p=0.001) across cohorts",
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

      {/* Patient Notes */}
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
        <p className="font-medium">Patient Notes & History:</p>
        <p className="mt-1">
          {patientData.patientNotes} No family history of colorectal cancer is reported. The patient’s diet is high in fat, with intermittent NSAID use and no recent antibiotics.
        </p>
      </div>

      {/* Result Summary Card */}
      <Card className="border-t-4 border-t-red-500 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Test Result: {patientData.resultStatus}</CardTitle>
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <CardDescription className="text-base mt-2">
            This result suggests an elevated risk for colorectal cancer or precancerous polyps based on the analyzed microbial profile, including Tier 1 biomarkers like Fusobacterium nucleatum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg text-sm">
            <p className="text-red-800 font-medium">Recommended Next Steps:</p>
            <p className="text-red-700 mt-2">
              Consult your healthcare provider. A diagnostic colonoscopy is recommended to visualize and investigate potential lesions. Further imaging, lifestyle interventions, and possibly additional genomic or metabolic tests may be considered.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment Details */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Comprehensive Risk Assessment Details
          </CardTitle>
          <CardDescription className="mt-2">
            Explore the personalized risk score, test performance metrics, and the CRC-associated microbiome signatures.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 text-sm">
            {/* Risk Score Visualization */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Risk Score</span>
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

            {/* Analyzed Markers & Test Performance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-900">Analyzed Biological Markers</h3>
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
                <h3 className="font-medium mb-2 text-purple-900">Test Performance Highlights</h3>
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
                      <span className="font-semibold">Quality & Compliance:</span> FDA-approved methods, CLIA-certified, CAP-accredited, ensuring reliable and reproducible results.
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

      {/* Microbial Markers Detail */}
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
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{marker.name}</h3>
                    <p className="text-gray-500">{marker.description}</p>
                  </div>
                  {renderStatus(marker.status)}
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-gray-600 mb-1">
                    <span>Patient Value: {marker.value} {marker.unit}</span>
                    <span>Reference Range: {marker.referenceRange}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2 rounded-full ${
                        marker.status === "HIGH" ? "bg-red-500" : "bg-green-500"
                      }`}
                      style={{
                        width: `${(marker.value / (parseFloat(marker.referenceRange.replace("< ", "")) * 2)) * 100}%`
                      }}
                    />
                  </div>
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

      {/* Additional Information on Biomarkers (Tiered Overview) */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Microbiome Biomarker Tiers</CardTitle>
          <CardDescription className="mt-2">
            Understanding the priority tiers of CRC-associated biomarkers
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Biomarkers are grouped based on strength of evidence, reproducibility, and effect size. Tier 1 biomarkers (e.g., <em>Fusobacterium nucleatum</em>) are consistently reported across studies and strongly associated with CRC.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold">Tier 1 (High Priority):</span> <em>Fusobacterium nucleatum</em>, <em>Solobacterium moorei</em>, <em>Porphyromonas asaccharolytica</em>, <em>Parvimonas micra</em>, and the <em>cutC</em> gene.</li>
            <li><span className="font-semibold">Tier 2 (Moderate Priority):</span> <em>Clostridium symbiosum</em>, and functional pathways like gluconeogenesis.</li>
            <li><span className="font-semibold">Tier 3 (Lower Priority):</span> Additional species and metabolites with more variable associations.</li>
            <li><span className="font-semibold">Tier 4 (Adenoma-Focused):</span> Markers linked more to early adenomas than advanced CRC, including certain secondary bile acids and polyamines.</li>
          </ul>
          <p>These categorizations guide clinicians and researchers in prioritizing confirmatory tests, tailoring interventions, and informing future research directions.</p>
        </CardContent>
      </Card>

      {/* Functional Pathways & Genes */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Functional Pathways & Microbial Genes</CardTitle>
          <CardDescription className="mt-2">
            Metabolic and genetic signatures shaping CRC-associated microbiomes
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            CRC-associated microbiomes often show enriched pathways for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold">CRC-Linked: </span> Putrefaction of amino acids (producing polyamines and ammonia), gluconeogenesis, and secondary bile acid conversion.</li>
            <li><span className="font-semibold">Control-Linked: </span> Starch, stachyose, and galactose degradation, and the Calvin-Benson-Bassham cycle are more abundant in healthy controls.</li>
          </ul>
          <p>
            Genes like <em>cutC</em> and <em>cutD</em> are overrepresented in CRC, driving increased production of trimethylamine (TMA). These functional elements provide clues to mechanistic pathways influencing tumor development.
          </p>
        </CardContent>
      </Card>

      {/* Metabolites Associated with CRC */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Metabolite Profiles</CardTitle>
          <CardDescription className="mt-2">
            Chemical byproducts that reflect underlying dysbiosis and neoplasia risk
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            CRC-associated microbiomes show elevated levels of branched-chain amino acids (BCAAs), phenylalanine, tyrosine, glycine, serine, secondary bile acids (like deoxycholate), TMA, polyamines (putrescine), ammonia, and isovalerate.
          </p>
          <p>
            In contrast, certain beneficial metabolites and pathways remain more active in healthy controls. Understanding these metabolic shifts helps guide dietary and lifestyle interventions.
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
            Additional Resources, Methodology & References
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
          <p className="font-medium">Peer-Reviewed Literature & Guidelines:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li><em>Chen, W. et al.</em> (2022). “Gut Microbiome Signatures of Colorectal Cancer.” <em>Gastroenterology</em>, 162(4), 1232-1245.</li>
            <li><em>Liang, Q. et al.</em> (2021). “Microbial Markers for Early Detection of Colorectal Neoplasia.” <em>Nature Medicine</em>, 27(10), 1834-1842.</li>
            <li><em>Smith, J. & Johnson, R.</em> (2020). “Metagenomics in Cancer Screening.” <em>Clinical Cancer Research</em>, 26(11), 2753-2761.</li>
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
          <CardTitle>Data Privacy & Compliance</CardTitle>
          <CardDescription className="mt-2">
            Your health information remains secure and confidential
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-2">
          <p>
            <span className="font-medium">HIPAA Compliance:</span> We adhere to strict privacy regulations, ensuring the confidentiality of your information.
          </p>
          <p>
            <span className="font-medium">Data Encryption & Storage:</span> Secure data handling protocols prevent unauthorized access.
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
