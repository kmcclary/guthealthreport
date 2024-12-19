import React from 'react';
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
  BookOpen
} from 'lucide-react';

const MicrobiomeCRCReport = () => {
  // Example patient data (In a real scenario, these would be securely fetched based on patient ID)
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

  // Detailed microbial marker data
  const microbialMarkers = [
    {
      name: "Fusobacterium nucleatum",
      value: 2.0,
      referenceRange: "< 1.2",
      unit: "relative abundance",
      status: "HIGH",
      description: "Frequently associated with early-stage colorectal cancer and potentially involved in tumor progression and inflammatory pathways."
    },
    {
      name: "Bacteroides fragilis",
      value: 1.9,
      referenceRange: "< 1.5",
      unit: "relative abundance",
      status: "HIGH",
      description: "Known to contribute to mucosal inflammation and has been detected at elevated levels in patients with adenomatous polyps and early malignancies."
    },
    {
      name: "Clostridium symbiosum",
      value: 0.9,
      referenceRange: "< 0.8",
      unit: "relative abundance",
      status: "HIGH",
      description: "Considered an emerging early detection biomarker due to its association with colorectal dysplasia, even in asymptomatic individuals."
    }
  ];

  // Helper function to render microbial status indicators
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
      {/* Header Section with Branding, Patient, and Test Information */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
        <div className="flex items-start gap-2">
          <CircuitBoard className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">MicrobiomeScreen™</h1>
            <p className="text-sm text-gray-600">Advanced Colorectal Cancer Screening Test</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 text-left">
          <p><span className="font-semibold">Patient:</span> {patientData.patientName}</p>
          <p><span className="font-semibold">DOB:</span> {patientData.patientDOB}</p>
          <p><span className="font-semibold">Ordering Physician:</span> {patientData.physicianName}</p>
          <p className="mt-2"><span className="font-semibold">Test ID:</span> {patientData.testId}</p>
          <p><span className="font-semibold">Collection Date:</span> {patientData.collectionDate}</p>
          <p><span className="font-semibold">Report Date:</span> {patientData.reportDate}</p>
        </div>
      </div>

      {/* Patient Notes / Additional Background Information */}
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
        <p className="font-medium">Patient Notes & History:</p>
        <p className="mt-1">
          {patientData.patientNotes} There is no reported family history of colorectal cancer, but 
          the patient has a personal history of high-fat dietary patterns and intermittent use of non-steroidal anti-inflammatory drugs (NSAIDs). 
          No recent antibiotic courses reported.
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
            This result suggests an elevated risk for colorectal cancer or precancerous polyps based on the analyzed microbial profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg text-sm">
            <p className="text-red-800 font-medium">Recommended Next Steps:</p>
            <p className="text-red-700 mt-2">
              We strongly advise that you contact your healthcare provider to discuss these findings in detail and plan appropriate follow-up measures. 
              A diagnostic colonoscopy is often recommended to visually inspect the colon and rectum for polyps, lesions, or other abnormalities. 
              Further imaging, lifestyle modifications, and additional laboratory tests may also be considered to clarify these results.
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
            A closer look at your personalized risk score, test performance metrics, and analyzed microbial markers
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
                This risk score is derived from a proprietary algorithm that integrates microbial composition, relative abundances of key bacterial species, 
                and known biomarkers linked to colorectal neoplasia. A higher percentage suggests a greater likelihood of underlying changes in the colon that merit further investigation. 
                It does not guarantee the presence of cancer, but serves as an indicator for additional diagnostic procedures.
              </p>
            </div>

            {/* Analyzed Markers & Test Performance Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-blue-900">Analyzed Biological Markers</h3>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Bacterial DNA Patterns:</span> We leverage next-generation sequencing to identify bacterial species present and 
                      compare them to known profiles associated with colorectal cancer risk.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Metabolic Markers:</span> Specific metabolic byproducts and functional genes are evaluated to understand the community metabolism 
                      and its relation to tumorigenic processes.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Inflammatory Indicators:</span> We detect bacterial species known to induce chronic inflammation, a recognized factor in 
                      colorectal carcinogenesis.
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
                      <span className="font-semibold">93% Detection Rate (Sensitivity):</span> Demonstrates a high ability to identify individuals 
                      who have underlying colorectal neoplasia.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">87% Specificity:</span> Indicates a relatively low rate of false positives, though not zero. Some patients may test positive 
                      without having cancerous lesions, emphasizing the need for confirmatory colonoscopy.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">FDA Approved Laboratory Methods:</span> Testing is conducted under rigorous quality controls 
                      in a CLIA-certified and CAP-accredited laboratory, ensuring reliable and reproducible results.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              These metrics and markers are continually refined as new clinical research emerges. This integrative approach 
              allows us to maintain up-to-date methodologies that incorporate the most current knowledge in the field of 
              colorectal cancer screening.
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
            Levels of specific microorganisms identified as significantly associated with colorectal cancer risk
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
                    These markers represent a subset of bacterial taxa that have been repeatedly linked to the tumorigenic 
                    process in the colon. While their presence or elevation is not diagnostic on its own, it signals an 
                    alteration in the gut microbiome that can be a stepping stone in the path towards neoplastic changes.
                  </p>
                  <p className="mt-2">
                    Interpreting these results should be done in conjunction with your medical history, lifestyle factors, 
                    family history, and other screening tests. Discuss these findings with a qualified healthcare provider 
                    to determine whether additional imaging, dietary modifications, or preventive interventions are warranted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Understanding Your Results */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Understanding Your Results</CardTitle>
          <CardDescription className="mt-2">
            Guidance on how to interpret, contextualize, and act upon your screening outcome
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">What this means:</span> A positive result indicates that your gut microbiome profile 
                shares key features often seen in patients with colorectal neoplasia. While it does not confirm cancer, 
                it raises a significant suspicion that should be explored further.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Important note:</span> This screening is one piece of the puzzle. Definitive diagnosis 
                requires direct visualization through colonoscopy. We encourage timely follow-up to ensure that if any 
                abnormalities are present, they are addressed as early as possible.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">False positives:</span> A fraction of patients may receive a positive result despite 
                having no abnormal findings on colonoscopy. This can be influenced by transient changes in diet, recent 
                gastrointestinal infections, or subclinical microbial imbalances.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Lifestyle considerations:</span> Factors such as a balanced diet rich in fiber, 
                regular physical activity, maintaining a healthy body weight, and minimizing alcohol and tobacco use 
                support a healthier gut microbiome and may reduce your long-term colorectal cancer risk.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Guidelines and recommendations:</span> The US Preventive Services Task Force and 
                the American Cancer Society recommend regular colorectal cancer screening starting at age 45 for average-risk individuals. 
                If you have a family history or other risk factors, earlier or more frequent screening may be advised.
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
            Common inquiries to help you better understand and navigate your results
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <div>
            <p className="font-medium">Q: Do I need a colonoscopy if my test is positive?</p>
            <p>A: While each case is unique, a positive result strongly suggests that you discuss colonoscopy or other 
               diagnostic imaging with your physician. Early detection is key.</p>
          </div>
          <div>
            <p className="font-medium">Q: Are there insurance implications?</p>
            <p>A: Insurance coverage may vary. Many insurers cover recommended colorectal cancer screening. We advise 
               checking with your provider to understand benefits and potential out-of-pocket costs.</p>
          </div>
          <div>
            <p className="font-medium">Q: Can I improve my gut health before re-testing?</p>
            <p>A: Diet, exercise, and stress reduction can all positively influence your microbiome. Probiotics, 
               prebiotics, and consultation with a nutritionist may offer additional benefit. Still, these measures do not 
               replace the need for colonoscopic evaluation if indicated.</p>
          </div>
          <div>
            <p className="font-medium">Q: How accurate is this test?</p>
            <p>A: While not a diagnostic tool, this test has demonstrated high sensitivity and good specificity in 
               identifying individuals at elevated risk. Ongoing research aims to improve accuracy and interpretive 
               value over time.</p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources, Methodology & Scientific References */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            Additional Resources, Methodology & References
          </CardTitle>
          <CardDescription className="mt-2">
            Further reading on the science behind MicrobiomeScreen™ and guidance for seeking more information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            <span className="font-medium">Test Methodology:</span> MicrobiomeScreen™ employs next-generation sequencing (NGS) 
            to analyze stool samples for a broad range of bacterial taxa. Sophisticated bioinformatics pipelines 
            correlate microbial abundances with known risk signatures for colorectal neoplasia. The risk score 
            integrates factors such as diversity indices, ratio of pro-inflammatory to anti-inflammatory species, 
            and the presence of pathogenic taxa strongly linked to tumorigenesis.
          </p>
          <p>
            <span className="font-medium">Limitations:</span> This test is not a substitute for direct visual examination. 
            It does not detect non-microbial factors that may influence colorectal cancer risk, such as genetic mutations 
            (e.g., APC, KRAS), lifestyle factors not reflected in the microbiome, or lesions that do not cause significant 
            microbial shifts. It should be considered part of a comprehensive approach to colorectal cancer screening and 
            risk assessment.
          </p>
          <p className="font-medium">Peer-Reviewed Literature & Guidelines:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li><em>Chen, W. et al.</em> (2022). “Gut Microbiome Signatures of Colorectal Cancer.” <em>Gastroenterology</em>, 162(4), 1232-1245.</li>
            <li><em>Liang, Q. et al.</em> (2021). “Microbial Markers for Early Detection of Colorectal Neoplasia.” <em>Nature Medicine</em>, 27(10), 1834-1842.</li>
            <li><em>Smith, J. &amp; Johnson, R.</em> (2020). “Metagenomics in Cancer Screening.” <em>Clinical Cancer Research</em>, 26(11), 2753-2761.</li>
            <li><em>US Preventive Services Task Force.</em> (2021). “Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement.” <em>JAMA</em>, 325(19), 1965–1977.</li>
            <li><em>American Cancer Society.</em> (2023). “Colorectal Cancer Screening Guidelines.” Available at: <a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.cancer.org</a>.</li>
          </ul>
          <p>
            Additional support and educational materials are available at the MicrobiomeScreen™ 
            <a href="https://www.microbiomescreen.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              official website
            </a>. 
            Here, you can find FAQs, patient testimonials, detailed preparation guidelines for colonoscopy, and advice on 
            follow-up procedures. You may also explore webinars, patient support forums, and expert Q&A sessions hosted regularly.
          </p>
        </CardContent>
      </Card>

      {/* Data Privacy & Compliance Information */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Data Privacy & Compliance</CardTitle>
          <CardDescription className="mt-2">
            Ensuring the security, confidentiality, and compliance of your personal health information
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-2">
          <p>
            <span className="font-medium">HIPAA Compliance:</span> All patient data is handled in accordance with the Health Insurance Portability 
            and Accountability Act (HIPAA), ensuring your health information remains confidential and secure.
          </p>
          <p>
            <span className="font-medium">Data Encryption & Storage:</span> Your data is encrypted at rest and in transit, 
            and stored in secure, access-controlled facilities. We implement robust cybersecurity measures to prevent unauthorized access.
          </p>
          <p>
            <span className="font-medium">Use of Results:</span> Your results are shared only with authorized healthcare providers and personnel 
            directly involved in your care, or as required by law. We do not sell or otherwise distribute personally identifiable health information.
          </p>
        </CardContent>
      </Card>

      {/* Footer: Disclaimer & Contact Information */}
      <div className="text-center text-xs text-gray-500 pt-8 space-y-1">
        <p>MicrobiomeScreen™ is a registered trademark of BioTech Diagnostics, Inc.</p>
        <p>For questions about your results, please contact your healthcare provider or call our patient support line at (800) 555-1234 (Mon-Fri, 9am-5pm EST).</p>
        <p className="mt-3">Laboratory Director: Jane Smith, MD, PhD • CLIA #: 99D9999999</p>
        <p>All testing is conducted in CLIA-certified and CAP-accredited laboratories. Results are reviewed and validated by a qualified clinical laboratory scientist and pathologist before release.</p>
        <p className="mt-2">© 2024 BioTech Diagnostics, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MicrobiomeCRCReport;
