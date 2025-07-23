import React from 'react';

const ExperienceCard = () => {
    return (
        <div className="relative pl-8 max-h-[250px] overflow-y-auto pr-4">
            <div className="absolute left-[14px] top-[230px] h-[440px] w-0.5 bg-blue-200"></div>
            
            {/* Bosch Experience */}
            <div className="relative mb-4">
                <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-gray-800">
                            QA GM, Tesla, Rivia, Lucid, Ford, Slate – BOSCH
                        </h3>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                            Internship
                        </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 space-y-2">
                        <p className="flex items-start">
                            <span className="mr-2">•</span>
                            Diagnosis about ECUs of a brakes system, using the protocol CAN through of CANoe and another software's, documentation, Lifecycle and automation about of diagnosis and signals.
                        </p>
                        <p className="flex items-start">
                            <span className="mr-2">•</span>
                            Created an RAG for integration into a LLM.
                        </p>
                        <p className="flex items-start">
                            <span className="mr-2">•</span>
                            Developed Selenium bots to automate Excel tasks
                        </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Testing</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Digital Signal</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Software Development</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">CANoe</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">CANalyzer</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">ECU Testing</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">UDS</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Python</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">RAG</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">LLM</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Selenium</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Automation</span>
                    </div>
                </div>
            </div>

            {/* AXOL-MIT City Lab Experience */}
            <div className="relative mb-4">
                <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-gray-800">
                            AXOL–MIT City lab
                        </h3>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                            UI/UX + FULLSTACK
                        </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 space-y-2">
                        <p className="flex items-start">
                            <span className="mr-2">•</span>
                            Project to measure water quality in marginalized areas with the help of MIT City Lab. "I assisted a PhD student in a project to measure water quality in marginalized areas, contributing to interface design and user experience with the help of a Harvard expert."
                        </p>
                        <p className="flex items-start text-blue-500 hover:text-blue-600">
                            <span className="mr-2">•</span>
                            <a href="https://www.media.mit.edu/projects/axol/overview/" target="_blank" rel="noopener noreferrer">
                                Project Overview
                            </a>
                        </p>
                        <p className="flex items-start text-blue-500 hover:text-blue-600">
                            <span className="mr-2">•</span>
                            <a href="https://www.youtube.com/watch?v=vDmAE6aYjwY" target="_blank" rel="noopener noreferrer">
                                TedTalk
                            </a>
                        </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Laravel</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">React.js</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Inertia.js</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Tailwind</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Figma</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Photoshop Miro</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Trello</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Adobe animation</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">SCRUM</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">PostgreSQL</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">ESP32</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">C/C++</span>
                    </div>
                </div>
            </div>

            {/* Chazey Partners Experience */}
            <div className="relative mb-4">
                <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-base font-semibold text-gray-800">Business Intelligence Analyst</h3>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                            Internship
                        </span>
                    </div>
                    <div className="mt-1">
                        <div className="font-medium">
                            Chazey Partners
                            <span className="text-gray-500 text-xs ml-1">A QX Global Group Company</span>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage of Datasets of the electricity commission of Colombia using Data science through Maria DB, using ETL.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">Data Science</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">MariaDB</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">ETL</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;