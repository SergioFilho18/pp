'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX, Maximize, Minimize } from 'lucide-react';

interface MediaPlayerProps {
  src: string;
  poster?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

const MinimalVideoPlayer: React.FC<MediaPlayerProps> = ({ src, poster, crossOrigin }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);

  // Progresso (0..100), duração efetiva (segundos) e tempo atual (segundos)
  const [progress, setProgress] = useState(0);
  const [effectiveDuration, setEffectiveDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const isSeekingRef = useRef(false);

  // Duração efetiva: usa duration quando finita, senão o fim do range seekable
  const computeEffectiveDuration = (v: HTMLVideoElement | null): number => {
    if (!v) return 0;
    if (Number.isFinite(v.duration) && v.duration > 0) return v.duration;
    if (v.seekable && v.seekable.length > 0) {
      // fim do último range seekable
      const end = v.seekable.end(v.seekable.length - 1);
      return Number.isFinite(end) && end > 0 ? end : 0;
    }
    return 0;
  };

  const hasSeek = effectiveDuration > 0;

  const togglePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const v = videoRef.current;
    if (v) {
      v.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const newMuted = !v.muted;
    v.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted && volume === 0) {
      setVolume(0.5);
      v.volume = 0.5;
    }
  };

  // Scrubbing (arraste): atualiza currentTime durante o arraste e aplica no vídeo
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (!hasSeek) return;
    const newTime = (newProgress / 100) * effectiveDuration;
    setCurrentTime(newTime);
    if (videoRef.current && isSeekingRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleSeekPointerDown = () => {
    isSeekingRef.current = true;
  };

  const handleSeekPointerUp = (e: React.PointerEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !hasSeek) {
      isSeekingRef.current = false;
      return;
    }
    const newProgress = parseFloat((e.currentTarget as HTMLInputElement).value);
    const newTime = (newProgress / 100) * effectiveDuration;
    v.currentTime = newTime;
    setCurrentTime(newTime);
    isSeekingRef.current = false;
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        alert(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Inicialização e eventos do <video>
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const setReady = () => setIsReady(true);

    const onLoadedMetadata = () => {
      setEffectiveDuration(computeEffectiveDuration(v));
      setReady();
      v.volume = volume;
      v.muted = isMuted;
    };

    const onDurationChange = () => {
      setEffectiveDuration(computeEffectiveDuration(v));
    };

    const onCanPlay = () => {
      setEffectiveDuration(computeEffectiveDuration(v));
      setReady();
    };

    const onLoadedData = () => {
      setEffectiveDuration(computeEffectiveDuration(v));
      setReady();
    };

    const onTimeUpdate = () => {
      if (!isSeekingRef.current) {
        setCurrentTime(v.currentTime);
        const dur = computeEffectiveDuration(v);
        if (dur > 0) {
          setProgress((v.currentTime / dur) * 100);
        }
      }
    };

    const onProgressEvt = () => {
      // Alguns players atualizam ranges seekable ao carregar mais dados
      setEffectiveDuration(computeEffectiveDuration(v));
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    
    // 💡 Lógica adicionada para reiniciar o vídeo
    const onEnded = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reinicia o vídeo
        }
    };

    const onFsChange = () => setIsFullScreen(!!document.fullscreenElement);

    v.addEventListener('loadedmetadata', onLoadedMetadata);
    v.addEventListener('durationchange', onDurationChange);
    v.addEventListener('canplay', onCanPlay);
    v.addEventListener('loadeddata', onLoadedData);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('progress', onProgressEvt);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('ended', onEnded);
    document.addEventListener('fullscreenchange', onFsChange);

    return () => {
      v.removeEventListener('loadedmetadata', onLoadedMetadata);
      v.removeEventListener('durationchange', onDurationChange);
      v.removeEventListener('canplay', onCanPlay);
      v.removeEventListener('loadeddata', onLoadedData);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('progress', onProgressEvt);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('ended', onEnded);
      document.removeEventListener('fullscreenchange', onFsChange);
    };
  }, [isMuted, volume]);

  // Garante “soltar” o seek mesmo fora do range
  useEffect(() => {
    const onPointerUpGlobal = () => {
      if (isSeekingRef.current) isSeekingRef.current = false;
    };
    window.addEventListener('pointerup', onPointerUpGlobal);
    return () => window.removeEventListener('pointerup', onPointerUpGlobal);
  }, []);

  const formatTime = (t: number): string => {
    if (!Number.isFinite(t) || t <= 0) return '--:--';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto group bg-black rounded-lg">
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        crossOrigin={crossOrigin}
        onClick={togglePlayPause}
      />

      {/* Overlay não bloqueia cliques no vídeo; habilita nos controles */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="text-white text-xs font-mono pointer-events-auto">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress || 0}
            // Agora o seek fica habilitado quando temos uma duração efetiva (>0)
            disabled={!hasSeek}
            className={`w-full h-1 bg-gray-600 rounded-lg appearance-none accent-blue-500 ${hasSeek ? 'cursor-pointer' : 'cursor-not-allowed'} pointer-events-auto`}
            onChange={handleProgressChange}
            onPointerDown={handleSeekPointerDown}
            onPointerUp={handleSeekPointerUp}
          />

          <span className="text-white text-xs font-mono pointer-events-auto">
            {formatTime(effectiveDuration)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <button onClick={togglePlayPause} className="text-white pointer-events-auto">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="text-white pointer-events-auto">
                <VolumeIcon size={24} />
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 pointer-events-auto"
              />
            </div>
          </div>

          <button onClick={toggleFullScreen} className="text-white pointer-events-auto">
            {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinimalVideoPlayer;