import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { 
  ChevronDown, ChevronRight, Info, User, Utensils, AlertCircle, HeartPulse, Briefcase, 
  LifeBuoy, Check, Calendar, Activity 
} from 'lucide-react';

const GutHealthSurvey = () => {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    personalInfo: false,
    dietaryPatterns: false,
    gutSymptoms: false,
    lifestyleFactors: false,
    medicalHistory: false,
    dailyHabits: false,
    stressAndMentalHealth: false,
    environmentalFactors: false,
    stoolCharacteristics: false,
    submission: false
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Form states
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    location: '',
    height: '',
    weight: ''
  });

  const [dietaryPatterns, setDietaryPatterns] = useState({
    primaryDiet: '',
    fiberIntake: '',
    dietaryRestrictions: [],
    probioticIntake: false,
    recentAntibiotics: false,
  });

  const [gutSymptoms, setGutSymptoms] = useState({
    bloatingFrequency: '',
    abdominalPainFrequency: '',
    gasFrequency: '',
    heartburnFrequency: '',
    constipationFrequency: '',
    diarrheaFrequency: ''
  });

  const [lifestyleFactors, setLifestyleFactors] = useState({
    exerciseFrequency: '',
    sleepHours: '',
    smoker: false,
    alcoholFrequency: '',
    hydration: '',
  });

  const [medicalHistory, setMedicalHistory] = useState({
    chronicConditions: '',
    medications: '',
    familyHistory: '',
    recentIllness: '',
    pastGutIssues: '',
  });

  const [dailyHabits, setDailyHabits] = useState({
    mealFrequency: '',
    snackingFrequency: '',
    mainProteinSources: '',
    fruitVegetableVariety: '',
  });

  const [stressAndMentalHealth, setStressAndMentalHealth] = useState({
    perceivedStressLevel: '',
    anxietyOrDepression: false,
    stressManagementTechniques: '',
  });

  const [environmentalFactors, setEnvironmentalFactors] = useState({
    urbanRural: '',
    petExposure: '',
    travelFrequency: '',
    waterSource: '',
  });

  const [stoolCharacteristics, setStoolCharacteristics] = useState({
    bristolScale: '',
    stoolFrequency: '',
    stoolColorVariations: '',
    urgency: '',
    visibleMucus: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Combine all state objects into one submission object
    const submissionData = {
      personalInfo,
      dietaryPatterns,
      gutSymptoms,
      lifestyleFactors,
      medicalHistory,
      dailyHabits,
      stressAndMentalHealth,
      environmentalFactors,
      stoolCharacteristics,
    };

    console.log('Submission Data:', submissionData);
    // Here you would send this data to your backend
    setIsSubmitted(true);
    toggleSection('submission');
  };

  const Section = ({ title, icon: Icon, sectionKey, children, gradientFrom, gradientTo }) => (
    <section 
      className={`p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
    >
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between mb-2 hover:bg-white/50 transition-colors rounded-lg px-2 py-1"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-gray-700" />
          <h2 className="font-medium text-gray-900 text-lg">
            {title}
          </h2>
        </div>
        {expandedSections[sectionKey] ? 
          <ChevronDown className="h-4 w-4 text-gray-700" /> :
          <ChevronRight className="h-4 w-4 text-gray-700" />}
      </button>
      {expandedSections[sectionKey] && (
        <div className="text-sm text-gray-700 space-y-3 mt-4">
          {children}
        </div>
      )}
    </section>
  );

  return (
    <Card className="rounded-xl bg-gradient-to-br from-white via-teal-50 to-teal-100 shadow-xl border border-gray-200 mb-10 overflow-hidden">
      <CardHeader className="p-4 bg-gradient-to-r from-teal-100 to-teal-50 border-b border-gray-200">
        <CardTitle className="flex items-center gap-2">
          <Info className="h-6 w-6 text-teal-700" />
          <span className="bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent text-lg font-semibold">
            Comprehensive Gut Health Survey
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-6 space-y-6">

        {/* Introduction */}
        <Section 
          title="Introduction" 
          icon={Info} 
          sectionKey="introduction" 
          gradientFrom="from-gray-50" 
          gradientTo="to-gray-100"
        >
          <p>
            Welcome to the Gut Health Survey. This questionnaire is designed to help us understand various factors influencing your gut microbiome and overall digestive well-being. The questions below cover personal characteristics, diet, lifestyle, symptoms, and environmental factors.
          </p>
          <p>
            Your honest and detailed responses will guide more accurate insights and personalized recommendations. Please note that all information is confidential and used solely for health assessment purposes.
          </p>
        </Section>

        {/* Personal Information */}
        <Section
          title="Personal Information"
          icon={User}
          sectionKey="personalInfo"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.firstName}
              onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.lastName}
              onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
            />
            <input 
              type="number" 
              placeholder="Age" 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.age}
              onChange={(e) => setPersonalInfo({...personalInfo, age: e.target.value})}
            />
            <select 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.gender}
              onChange={(e) => setPersonalInfo({...personalInfo, gender: e.target.value})}
            >
              <option value="">Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <input 
              type="text" 
              placeholder="Location (City, Country)" 
              className="border rounded p-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.location}
              onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Height (cm)" 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.height}
              onChange={(e) => setPersonalInfo({...personalInfo, height: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Weight (kg)" 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={personalInfo.weight}
              onChange={(e) => setPersonalInfo({...personalInfo, weight: e.target.value})}
            />
          </div>
        </Section>

        {/* Dietary Patterns */}
        <Section
          title="Dietary Patterns"
          icon={Utensils}
          sectionKey="dietaryPatterns"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={dietaryPatterns.primaryDiet}
              onChange={(e) => setDietaryPatterns({...dietaryPatterns, primaryDiet: e.target.value})}
            >
              <option value="">Primary Dietary Pattern</option>
              <option value="Omnivorous">Omnivorous</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Pescatarian">Pescatarian</option>
              <option value="Other">Other</option>
            </select>
            <select 
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={dietaryPatterns.fiberIntake}
              onChange={(e) => setDietaryPatterns({...dietaryPatterns, fiberIntake: e.target.value})}
            >
              <option value="">Daily Fiber Intake</option>
              <option value="Low (under 10g)">Low (under 10g)</option>
              <option value="Moderate (10-25g)">Moderate (10-25g)</option>
              <option value="High (25g+)">High (25g+)</option>
            </select>
            <div className="col-span-2">
              <label className="block text-gray-600 mb-1">Dietary Restrictions (check all that apply):</label>
              <div className="flex flex-wrap gap-4">
                {['Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Soy-Free', 'Low-FODMAP'].map((restriction) => (
                  <label key={restriction} className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox"
                      checked={dietaryPatterns.dietaryRestrictions.includes(restriction)}
                      onChange={(e) => {
                        const current = dietaryPatterns.dietaryRestrictions;
                        if (current.includes(restriction)) {
                          setDietaryPatterns({...dietaryPatterns, dietaryRestrictions: current.filter(r => r !== restriction)});
                        } else {
                          setDietaryPatterns({...dietaryPatterns, dietaryRestrictions: [...current, restriction]});
                        }
                      }}
                    />
                    {restriction}
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm mt-2">
              <input 
                type="checkbox"
                checked={dietaryPatterns.probioticIntake}
                onChange={(e) => setDietaryPatterns({...dietaryPatterns, probioticIntake: e.target.checked})}
              />
              Regular Probiotic Supplement Use
            </label>

            <label className="flex items-center gap-2 text-sm mt-2">
              <input 
                type="checkbox"
                checked={dietaryPatterns.recentAntibiotics}
                onChange={(e) => setDietaryPatterns({...dietaryPatterns, recentAntibiotics: e.target.checked})}
              />
              Recent Antibiotic Use (last 3 months)
            </label>
          </div>
        </Section>

        {/* Gut-Related Symptoms */}
        <Section
          title="Gut-Related Symptoms"
          icon={AlertCircle}
          sectionKey="gutSymptoms"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          {['bloatingFrequency', 'abdominalPainFrequency', 'gasFrequency', 'heartburnFrequency', 'constipationFrequency', 'diarrheaFrequency'].map((symptom) => (
            <div key={symptom}>
              <label className="block mb-1 capitalize">{symptom.replace('Frequency','')} Frequency:</label>
              <select
                className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
                value={gutSymptoms[symptom]}
                onChange={(e) => setGutSymptoms({...gutSymptoms, [symptom]: e.target.value})}
              >
                <option value="">Select frequency</option>
                <option value="Never">Never</option>
                <option value="Rarely (1-2 times/month)">Rarely (1-2 times/month)</option>
                <option value="Occasionally (1-2 times/week)">Occasionally (1-2 times/week)</option>
                <option value="Frequently (3-5 times/week)">Frequently (3-5 times/week)</option>
                <option value="Daily">Daily</option>
              </select>
            </div>
          ))}
        </Section>

        {/* Lifestyle Factors */}
        <Section
          title="Lifestyle Factors"
          icon={HeartPulse}
          sectionKey="lifestyleFactors"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={lifestyleFactors.exerciseFrequency}
            onChange={(e) => setLifestyleFactors({...lifestyleFactors, exerciseFrequency: e.target.value})}
          >
            <option value="">Exercise Frequency</option>
            <option value="None">None</option>
            <option value="1-2 times/week">1-2 times/week</option>
            <option value="3-4 times/week">3-4 times/week</option>
            <option value="5+ times/week">5+ times/week</option>
          </select>

          <input 
            type="number"
            placeholder="Average Sleep Hours/Night"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={lifestyleFactors.sleepHours}
            onChange={(e) => setLifestyleFactors({...lifestyleFactors, sleepHours: e.target.value})}
          />

          <label className="flex items-center gap-2 text-sm mt-2">
            <input 
              type="checkbox"
              checked={lifestyleFactors.smoker}
              onChange={(e) => setLifestyleFactors({...lifestyleFactors, smoker: e.target.checked})}
            />
            Currently a smoker
          </label>

          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={lifestyleFactors.alcoholFrequency}
            onChange={(e) => setLifestyleFactors({...lifestyleFactors, alcoholFrequency: e.target.value})}
          >
            <option value="">Alcohol Consumption Frequency</option>
            <option value="None">None</option>
            <option value="Occasional (1-2 drinks/week)">Occasional (1-2 drinks/week)</option>
            <option value="Moderate (3-5 drinks/week)">Moderate (3-5 drinks/week)</option>
            <option value="Frequent (6+ drinks/week)">Frequent (6+ drinks/week)</option>
          </select>

          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={lifestyleFactors.hydration}
            onChange={(e) => setLifestyleFactors({...lifestyleFactors, hydration: e.target.value})}
          >
            <option value="">Average Daily Water Intake</option>
            <option value="Less than 1L">Less than 1L</option>
            <option value="1-2L">1-2L</option>
            <option value="2-3L">2-3L</option>
            <option value="3L+">3L+</option>
          </select>
        </Section>

        {/* Medical History */}
        <Section
          title="Medical History"
          icon={Briefcase}
          sectionKey="medicalHistory"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <textarea
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Known Chronic Conditions (e.g. IBS, IBD, Celiac, Diabetes)"
            value={medicalHistory.chronicConditions}
            onChange={(e) => setMedicalHistory({...medicalHistory, chronicConditions: e.target.value})}
          />
          <textarea
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Current Medications or Supplements"
            value={medicalHistory.medications}
            onChange={(e) => setMedicalHistory({...medicalHistory, medications: e.target.value})}
          />
          <textarea
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Family History of Gut Disorders or Autoimmune Diseases"
            value={medicalHistory.familyHistory}
            onChange={(e) => setMedicalHistory({...medicalHistory, familyHistory: e.target.value})}
          />
          <textarea
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Recent Illnesses or Infections (last 6 months)"
            value={medicalHistory.recentIllness}
            onChange={(e) => setMedicalHistory({...medicalHistory, recentIllness: e.target.value})}
          />
          <textarea
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Past Gut-Related Issues or Surgeries"
            value={medicalHistory.pastGutIssues}
            onChange={(e) => setMedicalHistory({...medicalHistory, pastGutIssues: e.target.value})}
          />
        </Section>

        {/* Daily Dietary Habits */}
        <Section
          title="Daily Dietary Habits"
          icon={Calendar}
          sectionKey="dailyHabits"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={dailyHabits.mealFrequency}
            onChange={(e) => setDailyHabits({...dailyHabits, mealFrequency: e.target.value})}
          >
            <option value="">Meals per Day</option>
            <option value="1-2 meals">1-2 meals</option>
            <option value="3 meals">3 meals</option>
            <option value="3+ meals (including snacks)">3+ meals (including snacks)</option>
          </select>
          
          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={dailyHabits.snackingFrequency}
            onChange={(e) => setDailyHabits({...dailyHabits, snackingFrequency: e.target.value})}
          >
            <option value="">Snacking Frequency</option>
            <option value="Never">Never</option>
            <option value="1-2 times/day">1-2 times/day</option>
            <option value="3+ times/day">3+ times/day</option>
          </select>

          <input 
            type="text"
            placeholder="Main Protein Sources (e.g., chicken, tofu, legumes)"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={dailyHabits.mainProteinSources}
            onChange={(e) => setDailyHabits({...dailyHabits, mainProteinSources: e.target.value})}
          />

          <input 
            type="text"
            placeholder="Variety of Fruits/Vegetables (e.g., 5+ types/day)"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={dailyHabits.fruitVegetableVariety}
            onChange={(e) => setDailyHabits({...dailyHabits, fruitVegetableVariety: e.target.value})}
          />
        </Section>

        {/* Stress and Mental Health */}
        <Section
          title="Stress & Mental Health"
          icon={Activity}
          sectionKey="stressAndMentalHealth"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <select
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stressAndMentalHealth.perceivedStressLevel}
            onChange={(e) => setStressAndMentalHealth({...stressAndMentalHealth, perceivedStressLevel: e.target.value})}
          >
            <option value="">Perceived Stress Level</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
          </select>

          <label className="flex items-center gap-2 text-sm mt-2">
            <input 
              type="checkbox"
              checked={stressAndMentalHealth.anxietyOrDepression}
              onChange={(e) => setStressAndMentalHealth({...stressAndMentalHealth, anxietyOrDepression: e.target.checked})}
            />
            History of Anxiety or Depression
          </label>

          <input 
            type="text"
            placeholder="Stress Management Techniques (e.g., yoga, therapy, meditation)"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stressAndMentalHealth.stressManagementTechniques}
            onChange={(e) => setStressAndMentalHealth({...stressAndMentalHealth, stressManagementTechniques: e.target.value})}
          />
        </Section>

        {/* Environmental Factors */}
        <Section
          title="Environmental & Living Conditions"
          icon={LifeBuoy}
          sectionKey="environmentalFactors"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={environmentalFactors.urbanRural}
            onChange={(e) => setEnvironmentalFactors({...environmentalFactors, urbanRural: e.target.value})}
          >
            <option value="">Living Environment</option>
            <option value="Urban">Urban</option>
            <option value="Suburban">Suburban</option>
            <option value="Rural">Rural</option>
          </select>

          <input 
            type="text"
            placeholder="Pet Exposure (e.g., dogs, cats)"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={environmentalFactors.petExposure}
            onChange={(e) => setEnvironmentalFactors({...environmentalFactors, petExposure: e.target.value})}
          />

          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={environmentalFactors.travelFrequency}
            onChange={(e) => setEnvironmentalFactors({...environmentalFactors, travelFrequency: e.target.value})}
          >
            <option value="">International Travel Frequency</option>
            <option value="Rarely/Never">Rarely/Never</option>
            <option value="1-2 times/year">1-2 times/year</option>
            <option value="3+ times/year">3+ times/year</option>
          </select>

          <select 
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={environmentalFactors.waterSource}
            onChange={(e) => setEnvironmentalFactors({...environmentalFactors, waterSource: e.target.value})}
          >
            <option value="">Primary Drinking Water Source</option>
            <option value="Tap">Tap</option>
            <option value="Filtered">Filtered</option>
            <option value="Bottled">Bottled</option>
            <option value="Well">Well</option>
          </select>
        </Section>

        {/* Stool Characteristics */}
        <Section
          title="Stool Characteristics"
          icon={Check}
          sectionKey="stoolCharacteristics"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          <select
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stoolCharacteristics.bristolScale}
            onChange={(e) => setStoolCharacteristics({...stoolCharacteristics, bristolScale: e.target.value})}
          >
            <option value="">Bristol Stool Scale Type</option>
            <option value="Type 1-2 (hard/lumpy)">Type 1-2 (hard/lumpy)</option>
            <option value="Type 3-4 (normal)">Type 3-4 (normal)</option>
            <option value="Type 5-7 (loose/liquid)">Type 5-7 (loose/liquid)</option>
          </select>

          <select
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stoolCharacteristics.stoolFrequency}
            onChange={(e) => setStoolCharacteristics({...stoolCharacteristics, stoolFrequency: e.target.value})}
          >
            <option value="">Bowel Movements per Day</option>
            <option value="Less than 1">Less than 1</option>
            <option value="1-2">1-2</option>
            <option value="3+">3+</option>
          </select>

          <input 
            type="text"
            placeholder="Color Variations (e.g., pale, dark, greenish)"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stoolCharacteristics.stoolColorVariations}
            onChange={(e) => setStoolCharacteristics({...stoolCharacteristics, stoolColorVariations: e.target.value})}
          />

          <select
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={stoolCharacteristics.urgency}
            onChange={(e) => setStoolCharacteristics({...stoolCharacteristics, urgency: e.target.value})}
          >
            <option value="">Urgency Level</option>
            <option value="No urgency">No urgency</option>
            <option value="Mild urgency">Mild urgency</option>
            <option value="High urgency">High urgency</option>
          </select>

          <label className="flex items-center gap-2 text-sm mt-2">
            <input 
              type="checkbox"
              checked={stoolCharacteristics.visibleMucus}
              onChange={(e) => setStoolCharacteristics({...stoolCharacteristics, visibleMucus: e.target.checked})}
            />
            Visible mucus in stool
          </label>
        </Section>

        {/* Submission */}
        <Section
          title="Review & Submit"
          icon={Check}
          sectionKey="submission"
          gradientFrom="from-white"
          gradientTo="to-gray-50"
        >
          {isSubmitted ? (
            <p className="text-green-700 font-medium">
              Thank you for submitting your survey! Your information has been recorded.
            </p>
          ) : (
            <>
              <p>
                Please review your responses. Once you are satisfied, click the button below to submit the survey.
              </p>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Submit Survey
              </button>
            </>
          )}
        </Section>

      </CardContent>
    </Card>
  );
};

export default GutHealthSurvey;
