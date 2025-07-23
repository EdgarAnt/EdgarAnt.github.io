import React, { useState } from 'react';
import MenuButton from './MenuButton';
import FloatingDots from './FloatingDots';

const FloatingNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false); // Cierra el menú después de hacer clic
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="fixed top-8 left-4 md:top-20 md:left-20 z-50">
            <FloatingDots />
            <MenuButton 
                isOpen={isOpen} 
                onClick={() => setIsOpen(!isOpen)} 
            />
            {isOpen && (
                <div className="absolute top-16 left-0 bg-white rounded-lg shadow-xl py-2 min-w-[120px]">
                    <a href="#home" 
                       onClick={(e) => handleClick(e, 'home')}
                       className="block px-6 py-2 text-gray-600 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#projects" 
                       onClick={(e) => handleClick(e, 'projects')}
                       className="block px-6 py-2 text-gray-600 hover:text-gray-900">
                        Projects
                    </a>
                    <a href="#blog" 
                       onClick={(e) => handleClick(e, 'blog')}
                       className="block px-6 py-2 text-gray-600 hover:text-gray-900">
                        Blog
                    </a>
                    <a href="#history" 
                       onClick={(e) => handleClick(e, 'history')}
                       className="block px-6 py-2 text-gray-600 hover:text-gray-900">
                        History
                    </a>
                </div>
            )}
        </div>
    );
};

export default FloatingNav;