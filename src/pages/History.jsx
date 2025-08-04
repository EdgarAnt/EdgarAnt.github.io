import React from 'react';
import BackArrow from '../components/Navigation/BackArrow';

const History = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-18 lg:py-20">
                <BackArrow href="/" />
                <div className="relative">
                    {/* Decorative elements - Hidden on small screens */}
                    <div className="hidden sm:block absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                    <div className="hidden sm:block absolute -top-10 -right-4 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="hidden sm:block absolute -top-10 -left-4 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                    
                    {/* Content */}
                    <div className="relative space-y-3 sm:space-y-4 lg:space-y-5">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800">
                            My History
                        </h1>
                        
                        <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-4 lg:p-5 max-w-xl mx-auto">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-light">
                                A story is not told in two days, even in months, this will take time because it is my life, it is my essence. But one thing that is very clear to me is that you were part of it, thank you very much, my grandparents, my siblings, friends and above all my parents and pets, I would not be who I am if it weren't for you "Just in construction".
                            </p>
                        </div>
                    </div>
                </div>

                {/* ASCII Art Section */}
                <div className="mt-6 sm:mt-7 lg:mt-3 bg-gray-900 rounded-lg sm:rounded-xl shadow-2xl p-4 max-w-xl mx-auto h-[200px] sm:h-[250px] lg:h-[300px] flex justify-center overflow-hidden">
                    <div>
                        <pre className="font-mono text-gray-300 text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem] whitespace-pre leading-none transform scale-[0.6] sm:scale-[0.7] lg:scale-[0.8]">{`    ░░                      ░░      ████████████  ░░                    ░░            
                                 ████          ████                                  
                               ████              ████                                
░ ░      ░░                ░░██                      ██░░              ░░            
     ░░            ░░      ░░██  ██  ██      ██  ██  ██░░      ░░      ░░            
                           ██    ██              ██    ██                            
                           ██    ██              ██    ██                            
 ░░░░░░░░░░░░  ░░░░░░░░░░██      ██    ██████    ██      ██░░░░░░░░░░░░░░░░  ░░░░
     ░░            ░░    ██    ██        ██        ██    ██    ░░      ░░         .-.
                         ██  ████    ██  ██  ██    ████  ██                      /'v'\\
                           ██  ██      ██  ██      ██  ██                       (/   \\)
                                 ██              ██                            ='="="===<
                                   ██████████████                          Paullie|_|
                                 ██              ██                                  
                                 ██              ██                                  
                                 ██    ██  ██    ██                                  
                               ████    ██  ██    ████
   my 3 cats                   ████    ██  ██    ████
 \\    /\\                     ██  ██    ██  ██    ██  ██                              
  )  ( ')          ░░        ██  ██    ██  ██    ██  ██        ░░                    
  (  /  )                      ████    ██████    ████                                
   \\(__)|                    ██    ████      ████    ██                              
░░░░░░  ░░░░  ░░░░░░  ░░░░░░  ██████    ░░  ░░  ██████░░░░░░░░  ░░░░░░  ░░░░  ░░░░
                                                                                    

                        ~°I'm getting there, I'm being consistent~                 
                                   and im enjoying this   
                                   
                                   `}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;