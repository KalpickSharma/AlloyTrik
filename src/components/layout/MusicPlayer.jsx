import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer = () => {
  // Always start unmuted on a fresh visit/refresh
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const songUrl = "interstellar.mp3"; 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial mute state
    audio.muted = isMuted;

    const attemptAutoplay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.log("Autoplay waiting for interaction...");
        });
    };

    attemptAutoplay();

    // This listener starts music on the FIRST click or scroll anywhere if it's not playing.
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          })
          .catch(err => console.error("Play failed:", err));
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying, isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    audio.muted = newMuteState;

    // If unmunting but not playing, start playing
    if (!newMuteState && audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="flex items-center">
      <audio 
        ref={audioRef} 
        src={songUrl} 
        loop 
        preload="auto"
      />
      
      <button
        onClick={toggleMute}
        className="relative flex items-center space-x-2 px-3 py-1.5 rounded-xl glass-card group transition-all duration-300 hover:bg-white/10"
        title={isMuted ? "Unmute Music" : "Mute Music"}
      >
        {/* Animated Visualizer Bars - only move if NOT muted */}
        <div className="flex items-end space-x-[2px] h-3 w-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                height: (!isMuted && isPlaying) ? [
                  Math.random() * 8 + 4,
                  Math.random() * 8 + 4,
                  Math.random() * 8 + 4
                ] : 3
              }}
              transition={{
                duration: 0.4 + Math.random() * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-[2px] rounded-full ${isMuted ? 'bg-gray-600' : 'bg-gradient-to-t from-cyan-400 to-purple-400'}`}
            />
          ))}
        </div>

        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isMuted ? (
              <motion.div
                key="muted"
                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
              >
                <VolumeX size={16} className="text-gray-500" />
              </motion.div>
            ) : (
              <motion.div
                key="unmuted"
                initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
              >
                <Volume2 size={16} className="text-cyan-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className={`text-[10px] font-bold uppercase tracking-widest hidden sm:block ${isMuted ? 'text-gray-500' : 'text-cyan-400'}`}>
          {isMuted ? 'Muted' : 'Live'}
        </span>

        {/* Pulsing indicator when playing and NOT muted */}
        {!isMuted && isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
