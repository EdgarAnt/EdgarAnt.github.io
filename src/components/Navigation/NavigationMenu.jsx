import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ isOpen, items }) => {
    return (
        <div 
            className={`absolute top-0 left-0 mt-16 bg-white rounded-lg shadow-xl transition-all duration-300 transform origin-top-left
                ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
        >
            <nav className="py-2">
                {items.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavigationMenu;