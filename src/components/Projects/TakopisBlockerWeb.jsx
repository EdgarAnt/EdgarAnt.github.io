import React, { useState } from 'react';
import ExpandableImage from './ExpandableImage';

const TakopisBlockerWeb = () => {
  const [activeMode, setActiveMode] = useState('normal');

  const modes = {
    normal: {
      title: 'Normal Mode',
      description: 'Basic website blocking through system hosts file modification.',
      features: [
        'Immediate website blocking',
        'Intuitive graphical interface',
        'Blocked sites list management',
        'Simple manual unblocking'
      ]
    },
    strict: {
      title: 'Strict Mode',
      description: 'Blocking with timer and master password for greater control.',
      features: [
        'Customizable timers (days, hours, minutes)',
        'Master password with SHA-256 hash',
        'Automatic temporary blocking',
        'Impossible to unblock without correct password'
      ]
    },
    friend: {
      title: 'Friend Mode',
      description: 'Automatically generated password system for self-control.',
      features: [
        'Automatically generated passwords',
        'Unblock request system',
        'Ideal for self-control and productivity',
        'Flexible time configuration'
      ]
    }
  };

  const technicalSpecs = [
    { label: 'Language', value: 'Python 3.10+' },
    { label: 'GUI Framework', value: 'Tkinter' },
    { label: 'Packaging', value: 'PyInstaller' },
    { label: 'Storage', value: 'JSON Files' },
    { label: 'Security', value: 'SHA-256 Hashing' },
    { label: 'Platform', value: 'Windows 10/11' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6">
            <img 
              src="/images/takopi.png" 
              alt="Takopi Icon" 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-0 sm:mr-4"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black text-center">
              🚫 Takopi's BlockerWeb
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Desktop application for blocking websites with multiple operation modes. 
            Developed in Python with Tkinter GUI interface.
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <ExpandableImage 
            src="/images/takopi.png" 
            alt="Takopi BlockerWeb Interface" 
            className="rounded-lg shadow-2xl max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Mode Selector */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">🎯 Blocking Modes</h2>
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-gray-100 rounded-lg p-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md sm:max-w-none sm:w-auto">
              {Object.entries(modes).map(([key, mode]) => (
                <button
                  key={key}
                  onClick={() => setActiveMode(key)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeMode === key
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-black hover:bg-gray-200'
                  }`}
                >
                  {mode.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mode Details */}
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-black">
              {modes[activeMode].title}
            </h3>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg px-2">
              {modes[activeMode].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {modes[activeMode].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">⚙️ Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-100 border border-gray-200 rounded-lg p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{spec.label}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">✨ Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🖥️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Intuitive Interface</h3>
              <p className="text-gray-700 text-sm sm:text-base">Graphical interface developed with Tkinter, easy to use and navigate.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔒</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Effective Blocking</h3>
              <p className="text-gray-700 text-sm sm:text-base">Modifies the system hosts file for real and effective blocking.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⏰</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Timers</h3>
              <p className="text-gray-700 text-sm sm:text-base">Customizable timer system for temporary blocking.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔐</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Security</h3>
              <p className="text-gray-700 text-sm sm:text-base">SHA-256 hashed passwords for maximum security.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💾</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Persistence</h3>
              <p className="text-gray-700 text-sm sm:text-base">Configuration saved in JSON files to maintain state.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">Executable</h3>
              <p className="text-gray-700 text-sm sm:text-base">Standalone application (.exe) ready to use without installation.</p>
            </div>
          </div>
        </div>

        {/* Installation & Usage */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">🚀 Installation & Usage</h2>
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">📋 Requirements</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-700">
                  <li className="text-sm sm:text-base">• Windows 10/11</li>
                  <li className="text-sm sm:text-base">• Administrator permissions</li>
                  <li className="text-sm sm:text-base">• Python 3.10+ (for development)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">⚡ Quick Usage</h3>
                <ol className="space-y-1 sm:space-y-2 text-gray-700">
                  <li className="text-sm sm:text-base">1. Download WebsiteBlocker.exe</li>
                  <li className="text-sm sm:text-base">2. Run as administrator</li>
                  <li className="text-sm sm:text-base">3. Select blocking mode</li>
                  <li className="text-sm sm:text-base">4. Add sites to block</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-100 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-semibold text-sm sm:text-base">
                ⚠️ <strong>IMPORTANT:</strong> Always run as administrator for blocking to work correctly.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">🏗️ Project Architecture</h2>
          <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">📁 File Structure</h3>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto">
                  <div>Blocker/</div>
                  <div>├── main_mode_selector.py</div>
                  <div>├── website_blocker.py</div>
                  <div>├── strict_mode.py</div>
                  <div>├── friend_mode.py</div>
                  <div>├── site_state_manager.py</div>
                  <div>├── assets/</div>
                  <div>│   ├── takopi.png</div>
                  <div>│   └── takopi.png</div>
                  <div>├── json/</div>
                  <div>│   ├── blocked_sites_state.json</div>
                  <div>│   ├── friend_mode_config.json</div>
                  <div>│   └── strict_config.json</div>
                  <div>└── dist/</div>
                  <div>    └── WebsiteBlocker.exe</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">🔧 Main Components</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3">
                    <h4 className="font-semibold text-black text-sm sm:text-base">ModeSelector</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Main interface for mode selection</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3">
                    <h4 className="font-semibold text-black text-sm sm:text-base">WebsiteBlocker</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Core site blocking logic</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3">
                    <h4 className="font-semibold text-black text-sm sm:text-base">StrictMode</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Timer and password management</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3">
                    <h4 className="font-semibold text-black text-sm sm:text-base">StateManager</h4>
                    <p className="text-xs sm:text-sm text-gray-600">State persistence and management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-black">🎯 Project Objective</h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto px-2">
              Takopi's BlockerWeb was developed as a complete solution for website access control, 
              combining multiple blocking strategies with an intuitive interface and advanced security features. 
              The project demonstrates skills in desktop application development, system file management, 
              graphical interfaces, and application packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakopisBlockerWeb;