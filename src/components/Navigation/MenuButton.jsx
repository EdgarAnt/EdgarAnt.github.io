import React from 'react';

const MenuButton = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 relative z-20"
        >
            <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="wave absolute inset-0 bg-gray-300 opacity-30"></div>
            </div>
            <svg 
                className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    );
};

export default MenuButton;