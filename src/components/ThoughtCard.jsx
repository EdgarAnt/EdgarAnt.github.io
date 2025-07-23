import React, { useState, useEffect } from 'react';

const ThoughtCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkIfDesktop = () => {
            setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
        };
        
        checkIfDesktop();
        window.addEventListener('resize', checkIfDesktop);
        
        return () => window.removeEventListener('resize', checkIfDesktop);
    }, []);

    const handleInteraction = () => {
        if (!isDesktop) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div 
            className="cursor-pointer perspective-1000 w-[154px] h-[227px] md:w-[302px] md:h-[410px]"
            onClick={handleInteraction}
            onMouseEnter={() => isDesktop && setIsFlipped(true)}
            onMouseLeave={() => isDesktop && setIsFlipped(false)}
        >
            <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
            >
                {/* Frente de la card */}
                <div 
                    className="absolute w-full h-full backface-hidden rounded-[18px] overflow-hidden"
                    style={{ backgroundColor: '#D9D9D9' }}
                >
                    {frontContent}
                </div>

                {/* Reverso de la card */}
                <div 
                    className="absolute w-full h-full backface-hidden rounded-[18px] p-4 md:p-6 flex items-center justify-center rotate-y-180"
                    style={{ backgroundColor: '#D9D9D9' }}
                >
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default ThoughtCard;