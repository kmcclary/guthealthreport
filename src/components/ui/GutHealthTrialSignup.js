import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';  
import { ChevronDown, ChevronRight, Info, Globe2, BarChart2, Flame, Layers } from 'lucide-react';

const GutHealthTrialSignup = () => {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    eligibility: false,
    dataUsage: false,
    risksBenefits: false,
    procedures: false,
    consentForm: false,
  });

  const [step, setStep] = useState(1);

  // Participant Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    country: '',
    stateOrRegion: '',
  });

  const [healthInfo, setHealthInfo] = useState({
    chronicConditions: '',
    medications: '',
    dietaryRestrictions: '',
    recentAntibioticUse: false,
  });

  const [consents, setConsents] = useState({
    agreeToStudy: false,
    agreeDataUse: false,
    agreeVoluntary: false,
    agreeWithdraw: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleHealthChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHealthInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleConsentChange = (e) => {
    const { name, checked } = e.target;
    setConsents(prev => ({ ...prev, [name]: checked }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const canProceedToNextStep = () => {
    if (step === 1) {
      // Check minimal requirements for personal info
      return personalInfo.firstName && personalInfo.lastName && personalInfo.email && personalInfo.age;
    } else if (step === 2) {
      // Check if health info is filled (not mandatory fields, but at least age >18)
      return personalInfo.age && parseInt(personalInfo.age, 10) >= 18;
    } else if (step === 3) {
      // All consents must be agreed
      return consents.agreeToStudy && consents.agreeDataUse && consents.agreeVoluntary && consents.agreeWithdraw;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission to your backend or API
    alert('Thank you! Your consent and information have been submitted.');
  };

  return (
    <Card className="rounded-xl bg-gradient-to-br from-white via-teal-50 to-teal-100 shadow-xl border border-gray-200 mx-auto max-w-3xl mt-10">
      <CardHeader className="p-4 bg-gradient-to-r from-teal-100 to-teal-50 border-b border-gray-200">
        <CardTitle className="flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-teal-700" />
          <span className="bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent text-xl font-semibold">
            Gut Health Clinical Trial Participation
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-6 space-y-6">
        
        {/* Introduction Section */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('introduction')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Study Introduction & Purpose</h2>
            </div>
            {expandedSections.introduction ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.introduction && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Thank you for your interest in participating in our Gut Health Clinical Trial. This study aims to explore how dietary interventions and probiotic supplementation can influence the composition and function of the gut microbiome.
              </p>
              <p>
                By taking part in this research, you will help us uncover new insights that could lead to more targeted therapies, improved digestive health, and a deeper understanding of how gut microbes influence overall wellness.
              </p>
              <p>
                Before signing up, please carefully review the following sections. They detail eligibility criteria, how we handle your data, possible risks and benefits, and the procedures you will follow during the trial. After reviewing, you will be asked to provide personal and health information, and then give your informed consent to participate.
              </p>
            </div>
          )}
        </section>

        {/* Eligibility Criteria Section */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('eligibility')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Eligibility Criteria</h2>
            </div>
            {expandedSections.eligibility ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.eligibility && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <h3 className="font-medium">Inclusion Criteria:</h3>
              <ul className="list-disc list-inside">
                <li>Age 18 years or older.</li>
                <li>Willingness to provide stool samples according to the study schedule.</li>
                <li>Able to comply with the dietary guidelines during the study period.</li>
              </ul>

              <h3 className="font-medium mt-4">Exclusion Criteria:</h3>
              <ul className="list-disc list-inside">
                <li>Recent antibiotic use within the past 3 months.</li>
                <li>Known chronic gastrointestinal conditions (e.g., IBD, celiac) that are unstable.</li>
                <li>Participation in another clinical trial that may interfere with this study.</li>
                <li>Pregnancy or lactation during the study period.</li>
              </ul>
              <p className="mt-2">
                If you are uncertain about your eligibility, please contact our study coordinator for clarification before proceeding.
              </p>
            </div>
          )}
        </section>

        {/* Data Usage and Privacy */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('dataUsage')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Data Usage & Privacy</h2>
            </div>
            {expandedSections.dataUsage ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.dataUsage && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Your privacy and the confidentiality of your personal health information are of the utmost importance. Any samples you provide (such as stool samples) and the corresponding microbiome analyses will be de-identified. This means that your personal identifiers will be removed, and your sample will be labeled with a unique code.
              </p>
              <p>
                Only authorized members of our research team will have access to the code that links your personal information to your sample. Your information will never be shared with third parties without your explicit consent, and results will be presented in aggregate form in publications, ensuring no individual participant can be identified.
              </p>
              <p>
                De-identified data may be used in future research projects related to gut health and may be shared with other reputable scientific institutions under strict confidentiality agreements.
              </p>
            </div>
          )}
        </section>

        {/* Risks and Benefits */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('risksBenefits')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Potential Risks & Benefits</h2>
            </div>
            {expandedSections.risksBenefits ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.risksBenefits && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                <strong>Risks:</strong> The risks associated with this study are minimal. You may experience mild discomfort when collecting stool samples. Dietary interventions and supplements are generally safe, but there is a small risk of digestive upset or allergic reactions. You may withdraw from the study at any time without penalty.
              </p>
              <p>
                <strong>Benefits:</strong> Although there is no direct guarantee of health benefits to you, participation may increase your understanding of your own gut health. You will have access to non-identifying results regarding your microbiome composition. This knowledge may help guide personal dietary choices in the future. Moreover, your contribution will support scientific advancements in understanding the gut microbiome.
              </p>
            </div>
          )}
        </section>

        {/* Study Procedures */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('procedures')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Study Procedures & Timeline</h2>
            </div>
            {expandedSections.procedures ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.procedures && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                If you decide to participate, here are the steps you will follow:
              </p>
              <ol className="list-decimal list-inside">
                <li>Complete this online consent and eligibility screening.</li>
                <li>Receive a stool sample collection kit by mail with detailed instructions.</li>
                <li>Follow the provided dietary guidelines and/or take the assigned probiotic supplement as instructed.</li>
                <li>Provide stool samples at designated intervals throughout the study period (e.g., baseline, Week 4, Week 8).</li>
                <li>Complete periodic online questionnaires about your digestive health, diet, and any symptoms experienced.</li>
                <li>At the end of the study, receive a summary of your microbiome profile.</li>
              </ol>
              <p>
                The total duration of the study is approximately 8-12 weeks. Your commitment and adherence to the study guidelines are essential for producing reliable and meaningful results.
              </p>
            </div>
          )}
        </section>

        {/* Consent and Sign-Up Form */}
        <section className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
          <button 
            onClick={() => toggleSection('consentForm')}
            className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Participation & Consent Form</h2>
            </div>
            {expandedSections.consentForm ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.consentForm && (
            <div className="text-sm text-gray-700 space-y-4 mt-4">
              {step === 1 && (
                <div>
                  <h3 className="text-md font-medium mb-2">Step 1: Personal Information</h3>
                  <p>Please provide your basic information below:</p>
                  <div className="space-y-2 mt-3">
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName" 
                        value={personalInfo.firstName}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName" 
                        value={personalInfo.lastName}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={personalInfo.email}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Age</label>
                      <input 
                        type="number" 
                        name="age" 
                        value={personalInfo.age}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Country</label>
                      <input 
                        type="text" 
                        name="country" 
                        value={personalInfo.country}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">State/Region</label>
                      <input 
                        type="text" 
                        name="stateOrRegion" 
                        value={personalInfo.stateOrRegion}
                        onChange={handlePersonalChange}
                        className="w-full border rounded p-2 text-gray-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-md font-medium mb-2">Step 2: Health Information</h3>
                  <p>Please provide information about your current health status:</p>
                  <div className="space-y-2 mt-3">
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Chronic Conditions (if any)</label>
                      <textarea 
                        name="chronicConditions"
                        value={healthInfo.chronicConditions}
                        onChange={handleHealthChange}
                        className="w-full border rounded p-2 text-gray-700"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Medications (if any)</label>
                      <textarea 
                        name="medications"
                        value={healthInfo.medications}
                        onChange={handleHealthChange}
                        className="w-full border rounded p-2 text-gray-700"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-800 font-medium mb-1">Dietary Restrictions (if any)</label>
                      <textarea 
                        name="dietaryRestrictions"
                        value={healthInfo.dietaryRestrictions}
                        onChange={handleHealthChange}
                        className="w-full border rounded p-2 text-gray-700"
                      ></textarea>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <input 
                        type="checkbox" 
                        name="recentAntibioticUse" 
                        checked={healthInfo.recentAntibioticUse}
                        onChange={handleHealthChange}
                      />
                      <label className="text-gray-800">I have used antibiotics in the last 3 months</label>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-md font-medium mb-2">Step 3: Consent & Agreements</h3>
                  <p>By checking the boxes below, you indicate that you understand the study details and agree to participate:</p>
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        name="agreeToStudy"
                        checked={consents.agreeToStudy}
                        onChange={handleConsentChange}
                      />
                      <label className="text-gray-800">
                        I have read and understood the information provided and I agree to participate in this Gut Health Clinical Trial.
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        name="agreeDataUse"
                        checked={consents.agreeDataUse}
                        onChange={handleConsentChange}
                      />
                      <label className="text-gray-800">
                        I understand how my data will be used and that it will be de-identified before analysis and sharing.
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        name="agreeVoluntary"
                        checked={consents.agreeVoluntary}
                        onChange={handleConsentChange}
                      />
                      <label className="text-gray-800">
                        I understand that participation is voluntary and I may withdraw at any time without penalty.
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        name="agreeWithdraw"
                        checked={consents.agreeWithdraw}
                        onChange={handleConsentChange}
                      />
                      <label className="text-gray-800">
                        I understand that withdrawing may result in the exclusion of my data from future analyses.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep} 
                    className="py-2 px-4 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
                  >
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button 
                    type="button" 
                    onClick={nextStep} 
                    className={`py-2 px-4 rounded text-white ${canProceedToNextStep() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!canProceedToNextStep()}
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`py-2 px-4 rounded text-white ${canProceedToNextStep() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!canProceedToNextStep()}
                  >
                    Agree and Sign Up
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

      </CardContent>
    </Card>
  );
};

export default GutHealthTrialSignup;
