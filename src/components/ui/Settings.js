import React, { useState } from 'react';
import { 
  ChevronDown, ChevronRight, User, Mail, Lock, Bell, ShieldAlert, Cog, Globe, CreditCard, LogOut, Image, Key, Database, Layers 
} from 'lucide-react';

const Settings = () => {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    profilePicture: false,
    accountSecurity: false,
    notificationPreferences: false,
    privacyData: false,
    connectedAccounts: false,
    subscriptionsBilling: false,
    internationalization: false,
    integrations: false,
    developerOptions: false,
    advancedFeatures: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Form states (placeholders for demonstration)
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '',
    location: 'San Francisco, CA',
    timezone: 'Pacific Time (PT)'
  });

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuth: false
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    newsletter: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    searchIndexing: true,
    dataDownloadRequested: false,
    dataDeletionRequested: false
  });

  const [connectedAccounts, setConnectedAccounts] = useState({
    googleConnected: true,
    facebookConnected: false,
    githubConnected: false
  });

  const [billing, setBilling] = useState({
    subscriptionPlan: 'Pro',
    paymentMethod: 'Visa ending in 1234',
    autoRenew: true
  });

  const [internationalization, setInternationalization] = useState({
    language: 'English (US)',
    currency: 'USD'
  });

  const [integrations, setIntegrations] = useState({
    fitbit: true,
    appleHealth: false,
    googleAnalytics: false,
  });

  const [developerOptions, setDeveloperOptions] = useState({
    apiKey: 'sk_test_1234567890',
    webhookURL: '',
    sandboxMode: true
  });

  const [advancedFeatures, setAdvancedFeatures] = useState({
    experimentalUI: false,
    betaFeatures: true,
    aiRecommendations: true
  });

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  const handleSave = () => {
    // Here you would submit all changes to the backend
    console.log('Settings saved');
  };

  // Reusable Section component
  const Section = ({ title, icon: Icon, sectionKey, children, gradientFrom = "from-white", gradientTo = "to-gray-50" }) => (
    <section className={`p-4 rounded-lg border border-gray-200 shadow-sm bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Account Settings</h1>
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>

        <div className="space-y-6">
          <Section title="Personal Information" icon={User} sectionKey="personalInfo" gradientFrom="from-gray-50" gradientTo="to-gray-100">
            <p>Update your basic personal details such as your name, email, and location.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input 
                type="text" 
                placeholder="First Name"
                value={personalInfo.firstName}
                onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="text"
                placeholder="Last Name"
                value={personalInfo.lastName}
                onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="email"
                placeholder="Email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="tel"
                placeholder="Phone Number"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="text"
                placeholder="Location"
                value={personalInfo.location}
                onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 col-span-2"
              />
              <select
                value={personalInfo.timezone}
                onChange={(e) => setPersonalInfo({...personalInfo, timezone: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 col-span-2"
              >
                <option value="Pacific Time (PT)">Pacific Time (PT)</option>
                <option value="Mountain Time (MT)">Mountain Time (MT)</option>
                <option value="Central Time (CT)">Central Time (CT)</option>
                <option value="Eastern Time (ET)">Eastern Time (ET)</option>
                <option value="GMT">GMT</option>
                {/* Add more timezones as needed */}
              </select>
            </div>
          </Section>

          <Section title="Profile Picture" icon={Image} sectionKey="profilePicture">
            <p>Update your profile picture to help others recognize you.</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                {/* Current profile picture or placeholder */}
                <User className="h-10 w-10" />
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Upload New Picture
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                  Remove Picture
                </button>
              </div>
            </div>
          </Section>

          <Section title="Account Security" icon={Lock} sectionKey="accountSecurity">
            <p>Strengthen the security of your account by changing your password and enabling two-factor authentication.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input 
                type="password"
                placeholder="Current Password"
                value={security.currentPassword}
                onChange={(e) => setSecurity({...security, currentPassword: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="password"
                placeholder="New Password"
                value={security.newPassword}
                onChange={(e) => setSecurity({...security, newPassword: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="password"
                placeholder="Confirm New Password"
                value={security.confirmPassword}
                onChange={(e) => setSecurity({...security, confirmPassword: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label className="flex items-center gap-2 text-sm mt-2 col-span-2">
                <input 
                  type="checkbox"
                  checked={security.twoFactorAuth}
                  onChange={(e) => setSecurity({...security, twoFactorAuth: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Enable Two-Factor Authentication
              </label>
            </div>
          </Section>

          <Section title="Notification Preferences" icon={Bell} sectionKey="notificationPreferences">
            <p>Choose how and when you want to receive notifications from us.</p>
            <div className="flex flex-col gap-2 mt-4">
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={notifications.emailNotifications}
                  onChange={(e) => setNotifications({...notifications, emailNotifications: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Email Notifications
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={notifications.smsNotifications}
                  onChange={(e) => setNotifications({...notifications, smsNotifications: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                SMS Notifications
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={notifications.pushNotifications}
                  onChange={(e) => setNotifications({...notifications, pushNotifications: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Push Notifications
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={notifications.newsletter}
                  onChange={(e) => setNotifications({...notifications, newsletter: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Monthly Newsletter
              </label>
            </div>
          </Section>

          <Section title="Privacy & Data Management" icon={ShieldAlert} sectionKey="privacyData">
            <p>Control who can see your information and manage how your data is stored and used.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-1 font-medium text-sm">Profile Visibility</label>
                <select
                  value={privacy.profileVisibility}
                  onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="friends-only">Friends Only</option>
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm mt-6">
                <input 
                  type="checkbox"
                  checked={privacy.searchIndexing}
                  onChange={(e) => setPrivacy({...privacy, searchIndexing: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Allow Search Engine Indexing
              </label>
              <button 
                onClick={() => setPrivacy({...privacy, dataDownloadRequested: true})}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Request Data Download
              </button>
              <button 
                onClick={() => setPrivacy({...privacy, dataDeletionRequested: true})}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Request Data Deletion
              </button>
            </div>
            {privacy.dataDownloadRequested && <p className="mt-2 text-blue-700 text-sm">Data download requested. We will email you a download link once it's ready.</p>}
            {privacy.dataDeletionRequested && <p className="mt-2 text-red-700 text-sm">Data deletion requested. Our support team will contact you with next steps.</p>}
          </Section>

          <Section title="Connected Accounts" icon={Key} sectionKey="connectedAccounts">
            <p>Manage the social and third-party accounts connected to your profile.</p>
            <div className="flex flex-col gap-2 mt-4">
              <label className="flex items-center justify-between text-sm">
                <span>Google</span>
                <input 
                  type="checkbox"
                  checked={connectedAccounts.googleConnected}
                  onChange={(e) => setConnectedAccounts({...connectedAccounts, googleConnected: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex items-center justify-between text-sm">
                <span>Facebook</span>
                <input 
                  type="checkbox"
                  checked={connectedAccounts.facebookConnected}
                  onChange={(e) => setConnectedAccounts({...connectedAccounts, facebookConnected: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
              <label className="flex items-center justify-between text-sm">
                <span>GitHub</span>
                <input 
                  type="checkbox"
                  checked={connectedAccounts.githubConnected}
                  onChange={(e) => setConnectedAccounts({...connectedAccounts, githubConnected: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>
          </Section>

          <Section title="Subscriptions & Billing" icon={CreditCard} sectionKey="subscriptionsBilling">
            <p>View and manage your subscription, billing information, and payment methods.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-1 font-medium text-sm">Subscription Plan</label>
                <select
                  value={billing.subscriptionPlan}
                  onChange={(e) => setBilling({...billing, subscriptionPlan: e.target.value})}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="Free">Free</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Payment Method</label>
                <input 
                  type="text"
                  value={billing.paymentMethod}
                  onChange={(e) => setBilling({...billing, paymentMethod: e.target.value})}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <label className="flex items-center gap-2 text-sm mt-6 col-span-2">
                <input 
                  type="checkbox"
                  checked={billing.autoRenew}
                  onChange={(e) => setBilling({...billing, autoRenew: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Enable Auto-Renewal
              </label>
              <button 
                onClick={() => alert('View Invoices')}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 col-span-2"
              >
                View Past Invoices
              </button>
            </div>
          </Section>

          <Section title="Language & Region" icon={Globe} sectionKey="internationalization">
            <p>Set your preferred language and currency formats.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <select
                value={internationalization.language}
                onChange={(e) => setInternationalization({...internationalization, language: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="English (US)">English (US)</option>
                <option value="English (UK)">English (UK)</option>
                <option value="Spanish (ES)">Spanish (ES)</option>
                <option value="French (FR)">French (FR)</option>
              </select>

              <select
                value={internationalization.currency}
                onChange={(e) => setInternationalization({...internationalization, currency: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
            </div>
          </Section>

          <Section title="Integrations" icon={Layers} sectionKey="integrations">
            <p>Connect with other services and platforms for additional functionality.</p>
            <div className="flex flex-col gap-2 mt-4">
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={integrations.fitbit}
                  onChange={(e) => setIntegrations({...integrations, fitbit: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Fitbit Integration
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={integrations.appleHealth}
                  onChange={(e) => setIntegrations({...integrations, appleHealth: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Apple Health
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input 
                  type="checkbox"
                  checked={integrations.googleAnalytics}
                  onChange={(e) => setIntegrations({...integrations, googleAnalytics: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Google Analytics
              </label>
            </div>
          </Section>

          <Section title="Developer Options" icon={Database} sectionKey="developerOptions">
            <p>Manage API keys, webhooks, and sandbox modes for development and integrations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input 
                type="text"
                placeholder="API Key"
                value={developerOptions.apiKey}
                onChange={(e) => setDeveloperOptions({...developerOptions, apiKey: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="text"
                placeholder="Webhook URL"
                value={developerOptions.webhookURL}
                onChange={(e) => setDeveloperOptions({...developerOptions, webhookURL: e.target.value})}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label className="flex items-center gap-2 text-sm mt-2 col-span-2">
                <input 
                  type="checkbox"
                  checked={developerOptions.sandboxMode}
                  onChange={(e) => setDeveloperOptions({...developerOptions, sandboxMode: e.target.checked})}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                Enable Sandbox Mode
              </label>
            </div>
          </Section>

          <Section title="Advanced & Experimental Features" icon={Cog} sectionKey="advancedFeatures">
            <p>Try out new or experimental features that are still in development. Proceed with caution!</p>
            <label className="flex items-center gap-2 text-sm mt-4">
              <input 
                type="checkbox"
                checked={advancedFeatures.experimentalUI}
                onChange={(e) => setAdvancedFeatures({...advancedFeatures, experimentalUI: e.target.checked})}
                className="focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              Experimental UI
            </label>
            <label className="flex items-center gap-2 text-sm mt-2">
              <input 
                type="checkbox"
                checked={advancedFeatures.betaFeatures}
                onChange={(e) => setAdvancedFeatures({...advancedFeatures, betaFeatures: e.target.checked})}
                className="focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              Opt-in to Beta Features
            </label>
            <label className="flex items-center gap-2 text-sm mt-2">
              <input 
                type="checkbox"
                checked={advancedFeatures.aiRecommendations}
                onChange={(e) => setAdvancedFeatures({...advancedFeatures, aiRecommendations: e.target.checked})}
                className="focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              AI-Powered Recommendations
            </label>
          </Section>

          <div className="flex justify-end gap-4 pt-6">
            <button 
              onClick={() => { /* revert changes logic */ }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Revert Changes
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
