import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Rocket, Heart } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const StreeLabs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Sparkles, label: 'Share Ideas', color: 'from-rose-500 to-pink-600' },
    { icon: Users, label: 'Collaborate', color: 'from-violet-500 to-purple-600' },
    { icon: Rocket, label: 'Explore Opportunities', color: 'from-fuchsia-500 to-pink-600' },
    { icon: Heart, label: 'Support Growth', color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section
      id="streelabs"
      className="section-spacing relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Blurs — rose/violet theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-rose-500/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 rounded-full px-5 py-2.5 mb-8"
            style={{
              background: 'rgba(244, 63, 94, 0.08)',
              border: '1px solid rgba(244, 63, 94, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <Sparkles className="text-rose-400" size={16} />
            <span className="text-xs font-medium text-rose-300 uppercase tracking-widest">
              By AlloyTrik, For Women
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #f43f5e, #a855f7, #ec4899)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 6s ease infinite',
            }}
          >
            Stree Labs
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A dedicated, inclusive space within AlloyTrik built for women — focused on
            meaningful conversations, collaboration, and growth.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div
            className="rounded-3xl relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.06), rgba(168, 85, 247, 0.06), rgba(236, 72, 153, 0.04))',
              border: '1px solid rgba(244, 63, 94, 0.15)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Animated border glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(244, 63, 94, 0.1), inset 0 0 40px rgba(168, 85, 247, 0.03)',
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left: Logo Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  {/* Glow behind image */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.4), rgba(168, 85, 247, 0.4))',
                    }}
                  />
                  <motion.img
                    src="/Instagram post - 14.png"
                    alt="Stree Labs"
                    className="relative z-10 w-full max-w-md rounded-2xl"
                    style={{
                      border: '1px solid rgba(244, 63, 94, 0.2)',
                      boxShadow: '0 0 30px rgba(244, 63, 94, 0.1)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: 4 + i * 2,
                        height: 4 + i * 2,
                        background: i % 2 === 0
                          ? 'rgba(244, 63, 94, 0.6)'
                          : 'rgba(168, 85, 247, 0.6)',
                        top: `${15 + i * 18}%`,
                        left: i % 2 === 0 ? '-8%' : '105%',
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col justify-center"
              >
                <p className="text-gray-400 leading-relaxed mb-8">
                  Where female creators, developers, designers, and builders come together.
                  From <span className="text-rose-400 font-medium">AI</span>,{' '}
                  <span className="text-violet-400 font-medium">Web3</span>,{' '}
                  <span className="text-fuchsia-400 font-medium">Design</span>, and{' '}
                  <span className="text-pink-400 font-medium">Development</span> to content,
                  branding, and beyond : Stree Labs is about building confidence, visibility,
                  and identity in a safe, growth-driven environment.
                </p>

                {/* Highlight chips */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      className="flex items-center space-x-3 rounded-xl px-4 py-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(244, 63, 94, 0.1)',
                      }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} flex-shrink-0`}>
                        <item.icon size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Link to="/streelabs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                        boxShadow: '0 0 25px rgba(244, 63, 94, 0.25)',
                      }}
                    >
                      Explore Stree Labs
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StreeLabs;
