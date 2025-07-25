import React, { useState } from "react";
import ExpandableImage from "./ExpandableImage";

const ProjectModal = ({ project, onClose }) => {
    const [currentSection, setCurrentSection] = useState("overview");

    const handleSectionChange = (section) => {
        console.log("Changing to section:", section); // Para debugging
        setCurrentSection(section);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative bg-white rounded-lg w-[90vw] h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-[#f6f6f6] border-b border-[#e5e5e5] p-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-3">
                        <span className="text-3xl">{project.icon}</span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {project.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {project.type}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <div className="bg-white border-b border-gray-200">
                    <nav className="flex space-x-4 px-6">
                        {["overview", "process", "contact"].map((section) => (
                            <button
                                key={section}
                                onClick={() => handleSectionChange(section)}
                                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                                    currentSection === section
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() +
                                    section.slice(1)}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content */}
                <div
                    className="p-6 overflow-y-auto"
                    style={{ height: "calc(100% - 130px)" }}
                >
                    {currentSection === "overview" && (
                        <div className="space-y-6">
                            {project.name === "Axol" && (
                                <ExpandableImage
                                    src="/images/Axol/Bucket.gif"
                                    alt={project.name}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                />
                            )}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    About the Project
                                </h3>
                                <p className="text-gray-600">
                                    {project.overview?.description ||
                                        project.description}
                                </p>

                                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                    Role
                                </h4>
                                <p className="text-gray-600 mb-6">
                                    {project.overview?.role}
                                </p>

                                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                    Key Contributions
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    {project.overview?.keyContributions?.map(
                                        (contribution, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-600"
                                            >
                                                {contribution}
                                            </li>
                                        )
                                    )}
                                </ul>

                                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                    External Links
                                </h4>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    {project.overview?.projectLinks &&
                                        Object.entries(
                                            project.overview.projectLinks
                                        ).map(([key, url]) => (
                                            <a
                                                key={key}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                                            >
                                                {key === "mitMediaLab"
                                                    ? "MIT Media Lab Project"
                                                    : key === "tedTalk"
                                                    ? "TED Talk"
                                                    : key === "github"
                                                    ? "GitHub Repository"
                                                    : key}
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </a>
                                        ))}
                                </div>

                                {/* Contenido específico para My Portfolio */}
                                {project.name === "My Portfolio" &&
                                    project.overview
                                        ?.featuresImplementation && (
                                        <>
                                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                                {
                                                    project.overview
                                                        .featuresImplementation
                                                        .title
                                                }
                                            </h4>
                                            <p className="text-gray-600 mb-3">
                                                {
                                                    project.overview
                                                        .featuresImplementation
                                                        .subtitle
                                                }
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                                {project.overview.featuresImplementation.features.map(
                                                    (feature, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600"
                                                        >
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                                {
                                                    project.overview
                                                        .technologiesUsed.title
                                                }
                                            </h4>
                                            <p className="text-gray-600 mb-3">
                                                {
                                                    project.overview
                                                        .technologiesUsed
                                                        .subtitle
                                                }
                                            </p>
                                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                                {project.overview.technologiesUsed.stack.map(
                                                    (tech, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600"
                                                        >
                                                            {tech}
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                                {
                                                    project.overview
                                                        .developmentSteps.title
                                                }
                                            </h4>
                                            <p className="text-gray-600 mb-3">
                                                {
                                                    project.overview
                                                        .developmentSteps
                                                        .subtitle
                                                }
                                            </p>
                                            <div className="bg-gray-900 rounded-lg p-4 mb-6">
                                                <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                                                    {
                                                        project.overview
                                                            .developmentSteps
                                                            .codeStructure
                                                    }
                                                </pre>
                                            </div>
                                        </>
                                    )}

                                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                                    Technologies & Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {currentSection === "process" && (
                        <div className="space-y-8">
                            {project.process && project.process.length > 0 ? (
                                project.name === "My Portfolio" ? (
                                    // Renderizado especial para My Portfolio
                                    project.process.map((phase) => (
                                        <div key={phase.title} className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800">{phase.title}</h3>
                                            
                                            {phase.content?.subtitle && (
                                                <p className="text-gray-600">{phase.content.subtitle}</p>
                                            )}
                                            
                                            {phase.content?.description && (
                                                <p className="text-gray-600">{phase.content.description}</p>
                                            )}
                                            
                                            {phase.content?.figmaEmbed && (
                                                <div 
                                                    className="w-full bg-gray-50 rounded-lg p-4 flex justify-center"
                                                    dangerouslySetInnerHTML={{ __html: phase.content.figmaEmbed }}
                                                />
                                            )}
                                            
                                            {phase.content?.codeBlock && (
                                                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                                                    <pre>{phase.content.codeBlock}</pre>
                                                </div>
                                            )}
                                            
                                            {phase.content?.features && (
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {phase.content.features.map((feature, index) => (
                                                        <li key={index} className="text-gray-600">{feature}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            
                                            {phase.content?.technologies && (
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {phase.content.technologies.map((tech, index) => (
                                                        <li key={index} className="text-gray-600">{tech}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            
                                            {phase.content?.images && (
                                                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                                    {phase.content.images.map((img, index) => (
                                                        <ExpandableImage 
                                                            key={index}
                                                            src={img}
                                                            alt={`${phase.title} ${index + 1}`}
                                                            className="w-full h-auto object-contain"
                                                            containerClassName="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    // Renderizado normal para otros proyectos
                                    project.process.map((phase) => (
                                        <div key={phase.title} className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {phase.title}
                                            </h3>

                                            {/* Subtitle if exists */}
                                            {phase.subtitle && (
                                                <p className="text-gray-600 mb-4">
                                                    {phase.subtitle}
                                                </p>
                                            )}

                                            {/* Code block if exists */}
                                            {phase.codeBlock && (
                                                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                                                    <pre className="text-sm font-mono whitespace-pre-wrap">
                                                        {phase.codeBlock}
                                                    </pre>
                                                </div>
                                            )}

                                            {/* Steps if exists */}
                                            {phase.steps && (
                                                <div className="space-y-2">
                                                    {phase.steps.map((step, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                                {index + 1}
                                                            </span>
                                                            <span className="text-gray-700">
                                                                {step}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            
                                            {/* PDF Link if exists */}
                                            {phase.pdfLink && (
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                                    <a 
                                                        href={phase.pdfLink.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{phase.pdfLink.text}</span>
                                                    </a>
                                                </div>
                                            )}
                                            
                                            {/* Note if exists */}
                                            {phase.note && (
                                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                    <p className="text-blue-700 text-sm">{phase.note}</p>
                                                </div>
                                            )}

                                            {/* Images if exists */}
                                            {phase.images && (
                                                <div
                                                    className={`grid gap-4 ${
                                                        phase.title === "Sketches"
                                                            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                                                            : phase.title === "Mockups"
                                                            ? "grid-cols-1 md:grid-cols-3 gap-8"
                                                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                                    }`}
                                                >
                                                    {phase.images.map((img, index) => (
                                                        <ExpandableImage
                                                            key={index}
                                                            src={img}
                                                            alt={`${phase.title} ${
                                                                index + 1
                                                            }`}
                                                            className={`w-full ${
                                                                phase.title ===
                                                                "Sketches"
                                                                    ? "h-auto max-h-[400px] object-contain"
                                                                    : phase.title ===
                                                                      "Mockups"
                                                                    ? "h-auto max-h-[600px] object-contain"
                                                                    : "h-auto object-contain"
                                                            }`}
                                                            containerClassName={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all ${
                                                                phase.title ===
                                                                "Mockups"
                                                                    ? "p-4"
                                                                    : ""
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    <p>No process information available for this project.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {currentSection === "contact" && (
                        <div className="space-y-6">
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Connect with me
                                </h3>
                                <div className="flex space-x-6">
                                    {Object.entries(project.links || {}).map(
                                        ([platform, url]) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                            >
                                                <i
                                                    className={`fab fa-${platform} text-2xl`}
                                                ></i>
                                                <span className="capitalize">
                                                    {platform}
                                                </span>
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            {project.name === "Axol" ? (
                                // Sección completa para Axol
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        Team
                                    </h3>

                                    {/* MIT Media Lab Team */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-3">
                                            {
                                                project.collaborators
                                                    .institutions.mit.name
                                            }
                                        </h4>
                                        <div className="space-y-2">
                                            {project.collaborators.institutions.mit.members.map(
                                                (member, index) => (
                                                    <a
                                                        key={index}
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                                    >
                                                        <span>
                                                            {member.name}
                                                        </span>
                                                        {member.role && (
                                                            <span className="text-sm text-gray-500">
                                                                - {member.role}
                                                            </span>
                                                        )}
                                                        <i className="fab fa-linkedin ml-2"></i>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* University of Guadalajara Team */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700 mb-3">
                                            {
                                                project.collaborators
                                                    .institutions.udg.name
                                            }
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {project.collaborators.institutions.udg.members.map(
                                                (member, index) => (
                                                    <a
                                                        key={index}
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                                    >
                                                        <span>
                                                            {member.name}
                                                        </span>
                                                        <i className="fab fa-linkedin ml-2"></i>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Sección simplificada para otros proyectos
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        Developer
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/edgarant/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                        >
                                            <span>
                                                Edgar Antonio Delgadillo
                                                Villegas
                                            </span>
                                            <i className="fab fa-linkedin ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
