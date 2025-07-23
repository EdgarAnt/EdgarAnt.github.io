import React, { useState } from 'react';

const ExpandableImage = ({ 
    src, 
    alt, 
    className = "", 
    containerClassName = "",
    expandedContainerClassName = "fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 bg-opacity-95"
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(true);
    const handleClose = () => setIsExpanded(false);

    return (
        <div className={`relative ${containerClassName}`}>
            {/* Imagen Normal */}
            <div 
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleExpand}
            >
                <img 
                    src={src} 
                    alt={alt}
                    className={className}
                />
            </div>

            {/* Vista Expandida */}
            {isExpanded && (
                <div 
                    className={expandedContainerClassName}
                    onClick={handleClose}
                >
                    <button 
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div 
                        className="relative max-w-[90%] max-h-[90vh] p-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpandableImage;