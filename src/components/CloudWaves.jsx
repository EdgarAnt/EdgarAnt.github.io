import React from 'react';

const CloudWaves = () => {
    return (
        <div className="relative w-full h-full">
            {/* Ondas principales */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="wave-circle wave-1"></div>
                <div className="wave-circle wave-2"></div>
                <div className="wave-circle wave-3"></div>
            </div>
        </div>
    );
};

export default CloudWaves;