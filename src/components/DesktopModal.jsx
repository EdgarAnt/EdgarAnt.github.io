import React, { useState, useEffect, useRef } from 'react';
import ProjectsView from './Projects/ProjectsView';
import ExperienceCard from './ExperienceCard';
import GaleriaModal from './Galeria/GaleriaModal';

const DesktopModal = ({ isOpen, onClose }) => {
    const [currentView, setCurrentView] = useState('main');
    const [activeTab, setActiveTab] = useState('profile');
    const [text, setText] = useState('');
    const [showGaleriaModal, setShowGaleriaModal] = useState(false);
    const fullText = `> Hello, I'm Edgar Antonio
> Student/intern
> Contact: edgarant.dev@gmail.com
> GitHub: https://github.com/EdgarAnt/
> LinkedIn: https://www.linkedin.com/in/edgarant/
> Status: Available for projects
> Location: Mexico

> Type 'help' for more information...`;

    const scrollContainerRef = useRef(null);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const tabs = ['Profile', 'Experience', 'Contact', 'Skills', 'CV', 'Terminal'];
    const typingTimerRef = useRef(null);

    useEffect(() => {
        if (activeTab === 'terminal') {
            let index = 0;
            const timer = setInterval(() => {
                setText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) clearInterval(timer);
            }, 50);

            return () => clearInterval(timer);
        }
    }, [activeTab]);

    // Función para controlar la visibilidad de las flechas
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const updateArrowVisibility = () => {
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(
                    container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
                );
            };

            container.addEventListener('scroll', updateArrowVisibility);
            // Verificar inicialmente
            updateArrowVisibility();
            
            return () => container.removeEventListener('scroll', updateArrowVisibility);
        }
    }, []);

    // Efecto para la terminal mejorado
    useEffect(() => {
        // Limpiar el timer anterior si existe
        if (typingTimerRef.current) {
            clearInterval(typingTimerRef.current);
        }

        // Si cambiamos a terminal, iniciar la animación
        if (activeTab === 'terminal') {
            setText(''); // Reset del texto
            let index = 0;
            typingTimerRef.current = setInterval(() => {
                setText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) {
                    clearInterval(typingTimerRef.current);
                }
            }, 50);
        }

        // Cleanup
        return () => {
            if (typingTimerRef.current) {
                clearInterval(typingTimerRef.current);
            }
        };
    }, [activeTab]);

    // Función para manejar el cambio de tab
    const handleTabChange = (tab, index) => {
        const newTab = tab.toLowerCase();
        setActiveTab(newTab);
        setCurrentTabIndex(index);
        scrollToTab(index);

        // Si estamos saliendo de terminal, limpiar el texto
        if (activeTab === 'terminal' && newTab !== 'terminal') {
            setText('');
            if (typingTimerRef.current) {
                clearInterval(typingTimerRef.current);
            }
        }
    };

    // Función para navegar con flechas
    const navigateTab = (direction) => {
        const lastIndex = tabs.length - 1;
        let newIndex;

        if (direction === 'right' && currentTabIndex < lastIndex) {
            newIndex = currentTabIndex + 1;
            handleTabChange(tabs[newIndex], newIndex);
        } else if (direction === 'left' && currentTabIndex > 0) {
            newIndex = currentTabIndex - 1;
            handleTabChange(tabs[newIndex], newIndex);
        }
    };

    // Función para scroll
    const scrollToTab = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            const tabElements = container.getElementsByTagName('button');
            if (tabElements[index]) {
                const tabElement = tabElements[index];
                const scrollLeft = tabElement.offsetLeft - (container.clientWidth / 2) + (tabElement.clientWidth / 2);
                container.scrollTo({
                    left: Math.max(0, scrollLeft),
                    behavior: 'smooth'
                });
            }
        }
    };

    // Verificar y corregir el estado si es necesario
    useEffect(() => {
        const index = tabs.findIndex(tab => tab.toLowerCase() === activeTab);
        if (index !== currentTabIndex) {
            setCurrentTabIndex(index);
        }
    }, [activeTab]);

    if (!isOpen) return null;

    const folders = [
        { name: 'Projects', icon: '📁', action: () => setCurrentView('projects') },
        { name: 'Art', icon: '📁', path: '/art' },
        { name: 'Code', icon: '📁', path: '/code' },
        { name: 'Gallery', icon: '📁', action: () => setShowGaleriaModal(true) },
        { name: 'Notes', icon: '📁', path: '/notes' },
    ];

    const AboutMeView = () => {
        const [activeTab, setActiveTab] = useState('profile');
        const [currentTabIndex, setCurrentTabIndex] = useState(0);
        const [text, setText] = useState('');
        const scrollContainerRef = useRef(null);
        const typingTimerRef = useRef(null);
        const tabs = ['Profile', 'Experience', 'Contact', 'Skills', 'CV', 'Terminal'];

        const fullText = `> Hello, I'm Edgar Antonio
> Student/intern
> Contact: edgarant.dev@gmail.com
> GitHub: https://github.com/EdgarAnt/
> LinkedIn: https://www.linkedin.com/in/edgarant/
> Status: Available for projects
> Location: Mexico

> Type 'help' for more information...`;

        // Efecto para la terminal
        useEffect(() => {
            if (typingTimerRef.current) {
                clearInterval(typingTimerRef.current);
            }

            if (activeTab === 'terminal') {
                setText('');
                let index = 0;
                typingTimerRef.current = setInterval(() => {
                    setText(fullText.slice(0, index));
                    index++;
                    if (index > fullText.length) {
                        clearInterval(typingTimerRef.current);
                    }
                }, 50);
            }

            return () => {
                if (typingTimerRef.current) {
                    clearInterval(typingTimerRef.current);
                }
            };
        }, [activeTab]);

        // Función para manejar el cambio de tab
        const handleTabChange = (tab, index) => {
            const newTab = tab.toLowerCase();
            setActiveTab(newTab);
            setCurrentTabIndex(index);
            scrollToTab(index);
        };

        // Función para scroll
        const scrollToTab = (index) => {
            const container = scrollContainerRef.current;
            if (container) {
                const tabElements = container.getElementsByTagName('button');
                if (tabElements[index]) {
                    const tabElement = tabElements[index];
                    const scrollLeft = tabElement.offsetLeft - (container.clientWidth / 2) + (tabElement.clientWidth / 2);
                    container.scrollTo({
                        left: Math.max(0, scrollLeft),
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Función para navegar con flechas
        const navigateTab = (direction) => {
            const lastIndex = tabs.length - 1;
            if (direction === 'right' && currentTabIndex < lastIndex) {
                handleTabChange(tabs[currentTabIndex + 1], currentTabIndex + 1);
            } else if (direction === 'left' && currentTabIndex > 0) {
                handleTabChange(tabs[currentTabIndex - 1], currentTabIndex - 1);
            }
        };

        return (
            <div className="h-full pt-8 px-4">
                <button onClick={() => setCurrentView('main')} 
                        className="mb-6 text-gray-600 hover:text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                <div className="max-w-2xl mx-auto">
                    <div className="relative mb-4">
                        <div 
                            ref={scrollContainerRef}
                            className="overflow-x-auto scrollbar-hide sm:overflow-x-visible px-2"
                        >
                            <div className="flex whitespace-nowrap sm:whitespace-normal bg-white shadow-sm p-1 rounded-xl w-[500px] sm:w-auto">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabChange(tab, index)}
                                        className={`flex-1 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors
                                                 ${tab.toLowerCase() === activeTab 
                                                    ? 'bg-white shadow-md text-gray-800 relative z-10'
                                                    : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Flecha izquierda */}
                        {currentTabIndex > 0 && (
                            <button
                                onClick={() => navigateTab('left')}
                                className="absolute left-0 top-0 bottom-0 flex items-center sm:hidden z-20"
                            >
                                <div className="h-full w-12 bg-gradient-to-r from-gray-50 to-transparent flex items-center pl-2">
                                    <svg 
                                        className="w-5 h-5 text-gray-400" 
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </div>
                            </button>
                        )}

                        {/* Flecha derecha */}
                        {currentTabIndex < tabs.length - 1 && (
                            <button
                                onClick={() => navigateTab('right')}
                                className="absolute right-0 top-0 bottom-0 flex items-center sm:hidden z-20"
                            >
                                <div className="h-full w-12 bg-gradient-to-l from-gray-50 to-transparent flex items-center justify-end pr-2">
                                    <svg 
                                        className="w-5 h-5 text-gray-400" 
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </div>
                            </button>
                        )}
                    </div>

                    {/* Content */}
                    <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                        {activeTab === 'profile' && (
                            <div className="flex flex-col items-center px-4 sm:flex-row sm:items-start sm:space-x-6">
                                <div className="relative mb-5 sm:mb-0">
                                    <img 
                                        src="/images/meReal.jpg" 
                                        alt="Profile" 
                                        className="w-[120px] h-[120px] sm:w-32 sm:h-32 rounded-full object-cover 
                                                 ring-[5px] ring-white shadow-lg"
                                    />
                                    <div className="absolute inset-0 rounded-full border-2 border-gray-100"></div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h2 className="text-[22px] font-bold text-gray-800 mb-1 sm:text-2xl">
                                        Edgar Antonio
                                    </h2>
                                    <p className="text-[16px] text-gray-600 font-medium mb-2">
                                        Full Stack Developer
                                    </p>
                                    <p className="text-[15px] text-gray-600 leading-relaxed max-w-[280px] mx-auto sm:mx-0">
                                        Passionate developer focused on creating elegant solutions.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="grid grid-cols-2 gap-4">
                                <a href="mailto:edgarant.dev@gmail.com" 
                                   className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                    <span className="ml-3">Email</span>
                                </a>
                                {/* Más enlaces de contacto */}
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'React', 'Node.js', 'PHP', 'Laravel'].map((skill) => (
                                    <span key={skill} 
                                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}

                        {activeTab === 'cv' && (
                            <div className="text-center">
                                <a href="/path-to-cv.pdf" 
                                   className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm0-6H9V8h2v2zm4 6h-2v-4h2v4zm0-6h-2V8h2v2z"/>
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        )}

                        {activeTab === 'terminal' && (
                            <div className="bg-gray-900 rounded-lg p-6 font-mono h-[250px] overflow-auto">
                                <div className="text-green-400 whitespace-pre-line">
                                    {text.split('\n').map((line, index) => (
                                        <div key={index}>
                                            {line.includes('GitHub: https://github.com/EdgarAnt/') ? (
                                                <>
                                                    {'> '}GitHub: <a href="https://github.com/EdgarAnt/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 cursor-pointer">https://github.com/EdgarAnt/</a>
                                                </>
                                            ) : line.includes('LinkedIn: https://www.linkedin.com/in/edgarant/') ? (
                                                <>
                                                    {'> '}LinkedIn: <a href="https://www.linkedin.com/in/edgarant/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 cursor-pointer">https://www.linkedin.com/in/edgarant/</a>
                                                </>
                                            ) : line.includes('Contact: edgarant.dev@gmail.com') ? (
                                                <>
                                                    {'> '}Contact: <a href="mailto:edgarant.dev@gmail.com" className="text-green-400 hover:text-green-300 cursor-pointer">edgarant.dev@gmail.com</a>
                                                </>
                                            ) : (
                                                line
                                            )}
                                        </div>
                                    ))}
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        )}

                        {activeTab === 'experience' && <ExperienceCard />}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-gray-200 rounded-lg w-[95%] sm:w-[800px] h-[60vh] sm:h-[500px] p-6">
                <div className="absolute top-2 right-2 flex space-x-2">
                    <button 
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
                    />
                </div>

                {currentView === 'main' ? (
                    <>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 pt-8">
                            {folders.map((folder) => (
                                <div
                                    key={folder.name}
                                    onClick={folder.action || (() => {})}
                                    className="flex flex-col items-center group hover:bg-gray-300 p-2 rounded-lg transition-colors cursor-pointer"
                                >
                                    <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">{folder.icon}</div>
                                    <span className="text-xs sm:text-sm text-gray-700 text-center">{folder.name}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            onClick={() => setCurrentView('about')}
                            className="absolute bottom-4 right-4 flex flex-col items-center group hover:bg-gray-300 p-2 rounded-lg transition-colors cursor-pointer"
                        >
                            <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">📁</div>
                            <span className="text-xs sm:text-sm text-gray-700">About me</span>
                        </div>
                    </>
                ) : currentView === 'projects' ? (
                    <ProjectsView onBack={() => setCurrentView('main')} />
                ) : currentView === 'about' ? (
                    <AboutMeView />
                ) : null}
            </div>

            {showGaleriaModal && (
                <GaleriaModal onClose={() => setShowGaleriaModal(false)} />
            )}
        </div>
    );
};

export default DesktopModal;