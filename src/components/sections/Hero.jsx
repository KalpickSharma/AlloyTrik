import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleText = 'AlloyTrik';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]"
        animate={{
          x: mousePos.x * -0.3,
          y: mousePos.y * -0.3,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x * 0.2 - 150,
          y: mousePos.y * 0.2 - 150,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 glass-card rounded-full px-5 py-2.5 mb-11 mt-10"
        >
          <Sparkles size={10} className="text-cyan-400" />
          <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
            Collaborative Space for Creators & Developers
          </span>
        </motion.div>

        {/* Animated Title */}
        <div className="mb-8 flex justify-center items-center flex-wrap">
          {titleText.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 40%, #a855f7 70%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 40px rgba(0, 212, 255, 0.2))',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
            Where{' '}
            <span className="text-cyan-400 font-semibold">Web3</span> meets{' '}
            <span className="text-purple-400 font-semibold">AI</span>, where{' '}
            <span className="text-pink-400 font-semibold">Design</span> meets{' '}
            <span className="text-green-400 font-semibold">Development</span>
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base md:text-lg text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Building a space for creators and developers to collaborate, grow, and innovate together.
        </motion.p>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-14"
        >
          <p className="text-gray-600 mb-4 uppercase tracking-[0.2em] text-[10px] font-semibold">
            Founded by
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-card px-6 py-3 rounded-full transition-all duration-300 hover:border-cyan-500/30 group cursor-pointer">
              <span className="text-cyan-400 font-semibold text-base group-hover:text-cyan-300 transition-colors">
                Kalpick Sharma
              </span>
            </div>
            <div className="glass-card px-6 py-3 rounded-full transition-all duration-300 hover:border-purple-500/30 group cursor-pointer">
              <span className="text-purple-400 font-semibold text-base group-hover:text-purple-300 transition-colors">
                Oshaib Beg
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group neon-btn relative px-8 py-4 text-base font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Community
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </motion.a>

          <motion.a
            href="#community"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-base font-medium rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
          <ChevronDown className="text-gray-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
