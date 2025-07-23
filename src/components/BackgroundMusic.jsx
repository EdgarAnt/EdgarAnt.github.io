import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Función para intentar reproducir
        const tryPlay = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log("Autoplay prevented, waiting for user interaction:", error);
                });
            }
        };

        // Intentar reproducir inmediatamente
        tryPlay();

        // También intentar cuando el usuario haga click en cualquier parte
        const handleUserInteraction = () => {
            tryPlay();
            document.removeEventListener('click', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);

        // Limpiar cuando el componente se desmonte
        return () => {
            document.removeEventListener('click', handleUserInteraction);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            className="hidden"
            loop
            autoPlay
        >
            <source 
                src="/media/Stephan_Siebert_-_06_-_Dark_White_222.mp3" 
                type="audio/mpeg"
            />
            Tu navegador no soporta el elemento de audio.
        </audio>
    );
};

export default BackgroundMusic;