import React from 'react';
import { IMAGES } from '../constants/paths';
import ThoughtCard from '../components/ThoughtCard';
import BackgroundMusic from '../components/BackgroundMusic';
import BackArrow from '../components/Navigation/BackArrow';

const Thoughts = () => {
    const cards = [
        {
            front: (
                <img 
                    src="/images/Starring.jpg" 
                    alt="Starring" 
                    className="w-full h-full object-cover rounded-[18px]"
                />
            ),
            back: 
                <div className="flex items-center justify-center h-full px-2 md:px-4">
                    <p className="text-center text-gray-800 font-medium text-[11px] md:text-sm leading-tight md:leading-normal">
                        I WILL PROVE THAT INTROVERTS ALSO MATTER IN A WORLD FULL OF EXTROVERTS, EVEN IF I HAVE TO BE EXTROVERTED TO DO SO
                    </p>
                </div>
        },
        {
            front: (
                <img 
                    src="/images/Bella.jpeg" 
                    alt="Bella" 
                    className="w-full h-full object-cover rounded-[18px]"
                />
            ),
            back: (
                <div className="flex flex-col h-full space-y-4 overflow-y-auto">
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
                        For you, for an animal without words.
                    </h2>
                    
                    <div className="text-sm text-gray-700 space-y-4">
                        <p>
                            I want to thank you for teaching me that an animal, can be better than a human, can be gentler and more friendly, you taught me to want and respect not only animals in general, but also everyone, I thank you very much, I hope to see you again wherever you are.
                        </p>
                        
                        <p>
                            You were really a great support for me, even though I never told you, I think this is the only way I can say goodbye to you.
                        </p>
                        
                        <p className="italic text-gray-600 mt-4">
                            I hope this letter is just trash and you never have to tell it.
                        </p>
                    </div>
                </div>
            )
        },
        {
            front: (
                <img 
                    src="/images/Abuelitos.jpg" 
                    alt="Abuelitos" 
                    className="w-full h-full object-cover rounded-[18px]"
                />
            ),
            back: (
                <div className="flex flex-col h-full space-y-4 overflow-y-auto">
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
                        Everything that lives, returns to the earth when it dies.
                    </h2>
                    
                    <div className="text-sm text-gray-700 space-y-4">
                        <p>
                            This is written for the two people who were by my side all my childhood, they taught me what it is to be a grandpa and the importance of taking care of ourselves among family and the importance of being together.
                        </p>
                        
                        <p>
                            Although I lived it badly, I feel that it allowed me to see the complete importance of family.
                        </p>

                        <p className="font-semibold">
                            Many thanks<span className="text-red-500">❤</span> and I wish you the best, even though I will never forget the good memories I had with you, and thank you for everything, Adios!
                        </p>

                        <div className="mt-6 border-t border-gray-300 pt-4">
                            <p className="text-xs text-gray-500 italic">
                                I wanted to write the word Adios at the end because of the belief that when you say Adios at the end, it is to send them towards the other side and they will find them.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            front: (
                <img 
                    src="/images/Videoooo.gif" 
                    alt="Video" 
                    className="w-full h-full object-cover rounded-[18px]"
                />
            ),
            back: (
                <div className="flex flex-col h-full space-y-4 overflow-y-auto">
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
                        Remember what Mom said.
                    </h2>
                    
                    <div className="text-sm text-gray-700 flex flex-col justify-center h-full">
                        <p className="text-center font-medium">
                            We never give up, we get up and continue! we are still strong and never never give up.
                        </p>
                    </div>
                </div>
            )
        },
        {
            front: (
                <img 
                    src="/images/Vivi_la_vita.jpeg" 
                    alt="Vivi la vita" 
                    className="w-full h-full object-cover rounded-[18px]"
                />
            ),
            back: (
                <div className="flex flex-col h-full space-y-4 overflow-y-auto">
                    <div className="text-sm text-gray-700 flex flex-col justify-center h-full">
                        <p className="text-center font-medium leading-relaxed">
                            Don't forget your reason for this, the reason why we do what we do, we want to be happy, complete our goals, our systems, be happy as we should live life,
                        </p>
                        <p className="text-center font-bold text-lg mt-4 text-gray-800">
                            I know I will achieve it!
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white py-8 md:py-16 px-4 md:px-8 relative">
            <BackArrow href="/heart" />
            <BackgroundMusic />
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-y-8 md:gap-x-6 lg:gap-x-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="w-full flex justify-center items-start">
                            <img 
                                src={IMAGES.MOM}
                                alt="Tree Scene"
                                className="w-full max-w-[650px] ml-0 lg:-ml-[50px]"
                                style={{
                                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                                }}
                            />
                        </div>
                    </div>

                    {cards.map((card, index) => (
                        <div key={index} className="col-span-1 flex justify-center">
                            <ThoughtCard 
                                frontContent={card.front}
                                backContent={card.back}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Thoughts;