'use client';

import { useState, useEffect } from 'react';
import MinimalVideoPlayer from './MinimalVideoPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 1, src: './video.mp4', poster: '/posterV1.webp' },
  { id: 2, src: './video2.mp4', poster: '/posterV2.webp' },
];

export default function MeuVideoPlayer() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // NOVO: Estado para controlar a animação de fade
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const handleNavigation = (direction: "prev" | "next") => {
    setIsFading(true); 

    
    setTimeout(() => {
      if (direction === 'prev') {
        const isFirstVideo = currentVideoIndex === 0;
        const newIndex = isFirstVideo ? videos.length - 1 : currentVideoIndex - 1;
        setCurrentVideoIndex(newIndex);
      } else {
        const isLastVideo = currentVideoIndex === videos.length - 1;
        const newIndex = isLastVideo ? 0 : currentVideoIndex + 1;
        setCurrentVideoIndex(newIndex);
      }
      setIsFading(false); 
    }, 300); 
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-[50vh] p-4 md:p-8 bg-white text-white">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-5xl lg:text-5xl font-bold mb-8 text-blue-950">
          Nossa loja, sua solução!
        </h1>

        <div className="flex justify-center items-center">
          {isMobile ? (
            <div className="relative w-full max-w-lg group">
              
              <div
                className={`transition-opacity duration-300 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <MinimalVideoPlayer
                  key={videos[currentVideoIndex].id}
                  src={videos[currentVideoIndex].src}
                  poster={videos[currentVideoIndex].poster}
                />
              </div>

             
              <button
                onClick={() => handleNavigation('prev')}
                className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={() => handleNavigation('next')}
                className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          ) : (
            <div className="flex flex-row gap-8 md:gap-16 justify-center">
              {videos.map((video) => (
                <MinimalVideoPlayer key={video.id} src={video.src} poster={videos[currentVideoIndex].poster} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}