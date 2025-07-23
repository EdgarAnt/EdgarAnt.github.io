import React from 'react';

const FloatingDots = () => {
    return (
        <div className="absolute -inset-4 z-0">
            {/* Dot central superior */}
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gray-300 rounded-full 
                          animate-[bounce_3s_ease-in-out_infinite]"></div>
            
            {/* Dot izquierdo */}
            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-gray-200 rounded-full 
                          animate-[ping_4s_ease-in-out_infinite]"></div>
            
            {/* Dot derecho inferior */}
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-400 rounded-full 
                          animate-[bounce_5s_ease-in-out_infinite]"></div>
            
            {/* Dot derecho superior */}
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-gray-200 rounded-full 
                          animate-[pulse_2s_ease-in-out_infinite]"></div>
            
            {/* Dot izquierdo inferior */}
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-gray-300 rounded-full 
                          animate-[bounce_4s_ease-in-out_infinite]"></div>
        </div>
    );
};

export default FloatingDots;