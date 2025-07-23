import React from 'react';
import { Link } from 'react-router-dom';

const BackArrow = ({ href }) => {
    return (
        <Link 
            to={href} 
            className="fixed top-8 left-8 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow z-50"
        >
            <svg 
                className="w-6 h-6 text-gray-600" 
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
        </Link>
    );
};

export default BackArrow;