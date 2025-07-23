import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundMusic from '../components/BackgroundMusic';
import { IMAGES } from '../constants/paths';
import BackArrow from '../components/Navigation/BackArrow';

const Heart = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
            <BackArrow href="/" />
            <BackgroundMusic />
            <div className="flex flex-col items-center">
                <Link to="/thoughts">
                    <div className="w-[300px] h-[300px] flex items-center justify-center transition-transform hover:scale-105">
                        <img 
                            src={IMAGES.HEART}
                            alt="Heart"
                            className="w-full h-full object-contain animate-pulse cursor-pointer"
                        />
                    </div>
                </Link>
                <p className="text-sm font-bold text-gray-400 mt-4">
                    (Click to see my feelings)
                </p>
            </div>
        </div>
    );
};

export default Heart;