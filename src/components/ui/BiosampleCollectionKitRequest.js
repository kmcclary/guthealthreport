import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { ChevronDown, ChevronRight, Info, Globe2, Mail, Package, Truck, HelpCircle, BookOpen, FileText, CheckCircle } from 'lucide-react';

const BiosampleCollectionKitRequest = () => {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    instructions: false,
    form: false,
    packaging: false,
    shipping: false,
    faq: false,
    resources: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    additionalNotes: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
    console.log("Form Submitted:", formData);
    alert("Your biosample collection kit request has been submitted successfully!");
  };

  return (
    <Card className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl border border-gray-200 max-w-4xl mx-auto mt-8 mb-16">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-gray-800" />
          <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-xl font-semibold">
            Biosample Collection Kit Request
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-10 space-y-6">
        
        {/* Overview */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('overview')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Overview</h2>
            </div>
            {expandedSections.overview ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.overview && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Thank you for your interest in submitting a gut health biosample. 
                Proper collection and timely shipment of your sample are vital for accurate testing results. 
                Use the sections below to review important instructions, learn best practices, and request a collection kit.
              </p>
              <p>
                Once you’ve submitted your kit request, we will ship you a fully equipped biosample collection kit, 
                including instructions, sterile collection tubes, return packaging materials, and prepaid shipping labels.
              </p>
            </div>
          )}
        </section>

        {/* Instructions */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('instructions')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Collection Instructions</h2>
            </div>
            {expandedSections.instructions ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> :
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.instructions && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Preparation:</strong> Wash your hands thoroughly and ensure the collection area is clean.</li>
                <li><strong>Collection Device:</strong> The kit includes a sterile sample collection tube and a collection support device. Follow the instructions in the kit to properly position and use the device.</li>
                <li><strong>Sample Amount:</strong> You only need a small sample, approximately the size of a pea. Avoid overfilling the tube.</li>
                <li><strong>Labeling:</strong> Use the provided label to write your name, the date, and the time of collection. Attach it firmly to the collection tube.</li>
                <li><strong>Sealing:</strong> Ensure the tube is tightly sealed to prevent leakage. Place the tube in the provided biohazard bag along with the absorbent pad.</li>
              </ol>
              <p>
                Detailed, step-by-step illustrated instructions will be included with your kit. 
                If you have any concerns or need assistance, contact our support team.
              </p>
            </div>
          )}
        </section>

        {/* Request Form */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('form')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Request Form</h2>
            </div>
            {expandedSections.form ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.form && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Please fill out the form below accurately. This information ensures proper kit delivery and 
                helps us contact you if we need additional details.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="addressLine1">Address Line 1</label>
                  <input 
                    type="text" 
                    id="addressLine1" 
                    name="addressLine1" 
                    value={formData.addressLine1} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1" htmlFor="addressLine2">Address Line 2 (Optional)</label>
                  <input 
                    type="text" 
                    id="addressLine2" 
                    name="addressLine2" 
                    value={formData.addressLine2} 
                    onChange={handleInputChange} 
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="city">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="state">State/Province</label>
                    <input 
                      type="text" 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="zip">ZIP/Postal Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      name="zip" 
                      value={formData.zip} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1" htmlFor="country">Country</label>
                    <input 
                      type="text" 
                      id="country" 
                      name="country" 
                      value={formData.country} 
                      onChange={handleInputChange} 
                      className="w-full border border-gray-300 p-2 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="additionalNotes">Additional Notes (Optional)</label>
                  <textarea 
                    id="additionalNotes" 
                    name="additionalNotes" 
                    value={formData.additionalNotes} 
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md h-24"
                    placeholder="Allergies, special delivery instructions, etc."
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm">
                    I confirm the information provided is accurate and I agree to the terms and conditions.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium mt-2"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Packaging Instructions */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('packaging')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Packaging Your Sample</h2>
            </div>
            {expandedSections.packaging ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.packaging && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Proper packaging ensures your sample arrives at our lab intact:
              </p>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Primary Container:</strong> The collection tube with your sample, sealed and labeled.</li>
                <li><strong>Secondary Container:</strong> A biohazard bag with an absorbent pad to contain any potential leaks.</li>
                <li><strong>Insulation:</strong> Depending on the test, a small insulated pouch may be included to keep the sample stable.</li>
                <li><strong>Outer Packaging:</strong> Place all items into the prepaid, pre-labeled return mailer. Ensure it’s sealed tightly.</li>
              </ol>
              <p>
                Our kits are designed to meet shipping regulations for biospecimens and maintain sample integrity during transit.
              </p>
            </div>
          )}
        </section>

        {/* Shipping & Return */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('shipping')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Shipping & Return Details</h2>
            </div>
            {expandedSections.shipping ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.shipping && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Once you have packaged your sample, follow these steps:
              </p>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Drop-off:</strong> Bring the prepaid package to the nearest shipping carrier drop-off location or schedule a pickup.</li>
                <li><strong>Timing:</strong> Ship the sample as soon as possible after collection (preferably the same day) to ensure sample quality.</li>
                <li><strong>Tracking:</strong> Use the tracking number provided in your kit to monitor the shipment’s progress.</li>
              </ol>
              <p>
                We will notify you via email once your sample has been received by our laboratory. 
              </p>
            </div>
          )}
        </section>

        {/* FAQs */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('faq')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Frequently Asked Questions</h2>
            </div>
            {expandedSections.faq ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.faq && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <h3 className="text-md font-medium">How long does it take to receive my kit?</h3>
              <p>Typically, you will receive the kit within 5-7 business days after submitting your request.</p>

              <h3 className="text-md font-medium">How should I store the sample before shipping?</h3>
              <p>Follow the instructions provided in the kit. Generally, we recommend returning the sample the same day. If there is a delay, keep the sample refrigerated as instructed.</p>

              <h3 className="text-md font-medium">Is my personal data secure?</h3>
              <p>We adhere to strict privacy and data protection regulations. Your data will only be used for testing and communication related to your sample.</p>
            </div>
          )}
        </section>

        {/* Additional Resources */}
        <section className="bg-white p-4 rounded-lg border border-gray-200">
          <button 
            onClick={() => toggleSection('resources')}
            className="w-full flex items-center justify-between mb-2"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-700" />
              <h2 className="font-medium text-gray-900 text-lg">Additional Resources & Support</h2>
            </div>
            {expandedSections.resources ? 
              <ChevronDown className="h-4 w-4 text-gray-700" /> : 
              <ChevronRight className="h-4 w-4 text-gray-700" />
            }
          </button>
          {expandedSections.resources && (
            <div className="text-sm text-gray-700 space-y-3 mt-4">
              <p>
                Explore the links and documents below to learn more about gut health, dietary recommendations, and interpretive guides for your results once testing is complete:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <a href="#gut-health-guide" className="text-blue-600 underline">Comprehensive Gut Health Guide (PDF)</a> – Learn about the importance of the gut microbiome, factors affecting it, and lifestyle tips.
                </li>
                <li>
                  <a href="#prebiotics-probiotics" className="text-blue-600 underline">Prebiotics and Probiotics Factsheet</a> – Understand how these supplements might influence your microbial balance.
                </li>
                <li>
                  <a href="#sample-report" className="text-blue-600 underline">Sample Test Report</a> – Review a sample report template to see how your future results may be presented.
                </li>
              </ul>
              <p>
                For further assistance, please contact our support team at <a href="mailto:support@guthealthlab.com" className="text-blue-600 underline">support@guthealthlab.com</a> or call us at <strong>1-800-XXX-XXXX</strong>.
              </p>
            </div>
          )}
        </section>

        <div className="flex items-center gap-2 pt-6 border-t border-gray-200">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <p className="text-sm text-gray-700">
            Ready to go? Submit your kit request above, and we’ll get you started on your journey to better gut health.
          </p>
        </div>

      </CardContent>
    </Card>
  );
};

export default BiosampleCollectionKitRequest;
