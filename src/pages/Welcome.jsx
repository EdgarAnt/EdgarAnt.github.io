import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/paths';
import CloudWaves from '../components/CloudWaves';
import '../css/cloud-waves.css';
import DesktopModal from '../components/DesktopModal';
import FloatingNav from '../components/Navigation/FloatingNav';

const AnimatedButton = ({ to, children }) => {
    return (
        <Link 
            to={to} 
            className="btn-minimal relative px-8 py-4 text-gray-800 font-medium text-lg tracking-wide"
        >
            <div className="side-line side-line-left"></div>
            <div className="side-line side-line-right"></div>
            <div className="text-container">
                {children}
            </div>
        </Link>
    );
};

const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showImageQuote, setShowImageQuote] = useState(false);

    const spanishQuote = "This and my career in life I will always dedicate and thank my close family, my grandparents, my pets and all my friends, seriously thank you for trusting me, life is not complicated it's just a matter of attitude, I know there are good people in the world.";

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <FloatingNav />
            
            <DesktopModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
            
            {showImageQuote && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowImageQuote(false)}
                >
                    <div 
                        className="bg-white rounded-[40px] p-12 max-w-4xl w-full modal-animation relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setShowImageQuote(false)}
                            className="absolute top-6 right-6 w-4 h-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                            aria-label="Cerrar"
                        >
                            <span className="sr-only">Cerrar</span>
                        </button>

                        <div className="flex flex-col items-center">
                            <img 
                                src={IMAGES.ME}
                                alt="Welcome" 
                                className="w-[400px] h-[400px] rounded-full object-cover mb-8"
                            />
                            <p className="text-gray-700 text-center mt-6 text-xl max-w-2xl leading-relaxed">
                                {spanishQuote}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Primera sección */}
            <section id="home" className="flex items-center justify-center min-h-screen px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    <div className="flex flex-col mt-20 lg:mt-16">
                        <img 
                            src={IMAGES.WELCOME} 
                            alt="Welcome Text" 
                            className="w-full lg:w-[700px] mb-2 lg:mb-6"
                        />
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-inter w-full lg:w-[700px] h-auto lg:h-[72px] mt-12 text-center mx-auto">
                            "Hey hello, welcome to my feelings, here you will see all about me, myself and what I'm thinking about the world"
                        </p>
                    </div>
                    <div className="-mt-16 lg:-mt-10 relative">
                        <div 
                            className="absolute inset-0 z-0 cursor-pointer" 
                            onClick={() => setIsModalOpen(true)}
                        >
                        </div>
                        <img 
                            src={IMAGES.ME}
                            alt="Welcome" 
                            className="relative z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover cursor-pointer transition-transform hover:scale-105"
                            onClick={() => setShowImageQuote(true)}
                        />
                    </div>
                </div>
            </section>

            {/* Segunda sección */}
            <section id="projects" className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
                <div className="flex flex-col items-center max-w-4xl mx-auto pt-32">
                    <div className="relative mb-8">
                        <div 
                            className="absolute inset-0 z-0 cursor-pointer transition-transform hover:scale-105" 
                            onClick={() => setIsModalOpen(true)}
                        >
                            <CloudWaves />
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-inter text-center mt-52 px-4">
                        "If you share one apple you keep half an apple, but if you share one piece of knowledge you keep two pieces of knowledge."
                    </p>
                    <p className="text-sm font-bold text-gray-400 mt-4">
                        (Click the wave to see my projects)
                    </p>
                </div>
            </section>

            {/* Tercera sección - GIFs */}
            <section id="blog" className="flex items-center justify-center min-h-screen px-4 bg-white">
                <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 lg:mb-12">
                        {/* COOL_GIF primero en móvil */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-4 lg:mb-0 flex justify-center">
                            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px]">
                                <img 
                                    src={IMAGES.COOL_GIF} 
                                    alt="Blog Character" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* BLOG_GIF segundo en móvil */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center -mt-36 md:-mt-48 lg:mt-0">
                            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px]">
                                <img 
                                    src={IMAGES.BLOG_GIF} 
                                    alt="My Blog" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Botón Click Me */}
                    <div className="mb-12 sm:mb-16 lg:mb-0">
                        <AnimatedButton to="/heart">
                            CLICK ME
                        </AnimatedButton>
                    </div>
                </div>
            </section>

            {/* Nueva sección para MY HISTORY */}
            <section id="history" className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
                <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
                    <picture>
                        {/* Mobile devices */}
                        <source 
                            media="(max-width: 640px)" 
                            srcSet="/images/DreamsMobile.png"
                        />
                        {/* iPad/Tablet */}
                        <source 
                            media="(min-width: 641px) and (max-width: 1024px)" 
                            srcSet="/images/DreamsMobile.png"
                        />
                        {/* Desktop */}
                        <source 
                            media="(min-width: 1025px)" 
                            srcSet="/images/Dreams.png"
                        />
                        <img 
                            src="/images/Dreams.png"
                            alt="Dreams" 
                            className="w-full max-w-[600px] h-auto object-contain mb-6"
                        />
                    </picture>
                    <div>
                        <Link 
                            to="/history" 
                            className="cloud-button text-lg sm:text-xl lg:text-2xl tracking-wide"
                        >
                            <div className="cloud-decoration"></div>
                            <div className="cloud-decoration"></div>
                            <div className="cloud-decoration"></div>
                            <div className="cloud-decoration"></div>
                            <div className="cloud-decoration"></div>
                            <div className="cloud-decoration"></div>
                            <span className="relative z-10">MY HISTORY</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcome;