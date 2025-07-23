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
                    <div className="relative space-y-12 sm:space-y-14 lg:space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800">
                            My History
                        </h1>
                        
                        <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                                A story is not told in two days, even in months, this will take time because it is my life, it is my essence. But one thing that is very clear to me is that you were part of it, thank you very much, my grandparents, my siblings, friends and above all my parents and pets, I would not be who I am if it weren't for you "Just in construction".
                            </p>
                        </div>
                    </div>
                </div>

                {/* ASCII Art Section */}
                <div className="mt-12 sm:mt-14 lg:mt-6 bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-0 max-w-4xl mx-auto h-[300px] sm:h-[400px] lg:h-[500px] flex items-center overflow-x-scroll">
                    <div className="-ml-28 sm:ml-4 lg:ml-8">
                        <pre className="font-mono text-gray-300 text-[0.7rem] sm:text-xs lg:text-sm whitespace-pre leading-none transform scale-[0.65] sm:scale-90 lg:scale-100">{`    ░░                      ░░      ████████████  ░░                    ░░            
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
                                   ██████████████                         Paullie|_|
                                 ██              ██                                  
                                 ██              ██                                  
                                 ██    ██  ██    ██                                  
                               ████    ██  ██    ████     ~°I'm getting there, I'm being consistent~
   my 3 cats                   ████    ██  ██    ████                and im enjoyng this          
 \\    /\\                     ██  ██    ██  ██    ██  ██                              
  )  ( ')          ░░        ██  ██    ██  ██    ██  ██        ░░                    
  (  /  )                      ████    ██████    ████                                
   \\(__)|                    ██    ████      ████    ██                              
░░░░░░  ░░░░  ░░░░░░  ░░░░░░  ██████    ░░  ░░  ██████░░░░░░░░  ░░░░░░  ░░░░  ░░░░`}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;