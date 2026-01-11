import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundScroller from '../common/BackgroundScroller';
import { fadeInUp, staggerContainer, textReveal } from '../../utils/animations';
import { useState, useEffect } from 'react';
import Scene3D from '../3d/Scene3D';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleClick = (e) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
      };
      setParticles(prev => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

  const titleText = "AlloyTrik";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Layer (hidden on mobile for performance) */}
      <div className="hidden md:block">
        <Scene3D />
      </div>

      {/* Background Scroller */}
      <BackgroundScroller />

      {/* Theme-aware Background Overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--background))' }} />

      {/* Interactive Cursor Trail */}
      {cursorTrail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="fixed w-2 h-2 gradient-primary rounded-full pointer-events-none z-50"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
        />
      ))}

      {/* Interactive Click Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 0,
            opacity: 1
          }}
          animate={{
            x: particle.x + particle.vx * 50,
            y: particle.y + particle.vy * 50,
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="fixed w-3 h-3 gradient-primary rounded-full pointer-events-none z-50"
        />
      ))}

      {/* Floating Elements with Parallax */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * 0.1 * (i % 3 - 1)}px)`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="text-cyan-400/40" size={16} />
            ) : i % 3 === 1 ? (
              <Zap className="text-purple-400/40" size={14} />
            ) : (
              <div className="w-2 h-2 gradient-primary rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Creative Floating Orbs with Parallax */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="floating-orb"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              width: `${30 + (i * 8)}px`,
              height: `${30 + (i * 8)}px`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${scrollY * 0.05 * (i % 2 - 0.5)}px)`
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Matrix-style Background Elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="matrix-char"
            style={{
              left: `${5 + (i * 6)}%`,
              animationDelay: `${i * 0.2}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
          </motion.div>
        ))}
      </div>

      {/* Creative Floating Code Blocks */}
      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs text-cyan-400/20 font-mono pointer-events-none"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {i % 2 === 0 ? 'const future = "collaboration"' : 'function innovate() {'}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <div className="flex justify-center items-center flex-wrap">
            {titleText.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text inline-block cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.6))'
                }}
                whileTap={{ scale: 0.9 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
            A collaborative space for{' '}
            <motion.span
              whileHover={{ scale: 1.05, color: '#00d4ff' }}
              className="text-cyan-400 font-medium cursor-default"
            >
              creators
            </motion.span>
            {' '}and{' '}
            <motion.span
              whileHover={{ scale: 1.05, color: '#a855f7' }}
              className="text-purple-400 font-medium cursor-default"
            >
              developers
            </motion.span>
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.p
          {...textReveal}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Building a space for creators and developers to collaborate, grow, and innovate together.
          Where Web3 meets AI, where Design meets Development.
        </motion.p>

        {/* Founders */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-gray-500 mb-4">Founded by</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                backgroundColor: 'rgba(0, 212, 255, 0.1)'
              }}
              className="px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur-sm cursor-default"
            >
              <span className="text-cyan-400 font-semibold text-lg">Kalpick Sharma</span>
            </motion.div>
            <span className="text-gray-500 text-xl">&</span>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                backgroundColor: 'rgba(168, 85, 247, 0.1)'
              }}
              className="px-6 py-3 rounded-full border border-purple-400/30 backdrop-blur-sm cursor-default"
            >
              <span className="text-purple-400 font-semibold text-lg">Oshaib Beg</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Join Community</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 cursor-pointer group"
          onClick={() => document.getElementById('web3')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-sm mb-2 group-hover:text-cyan-400 transition-colors duration-300">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} className="group-hover:text-cyan-400 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

