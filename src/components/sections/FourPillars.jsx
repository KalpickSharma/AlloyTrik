import { motion, useInView } from 'framer-motion';
import {
  Blocks,
  Brain,
  Palette,
  Code,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useRef, useState } from 'react';

const FourPillars = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    {
      id: 'web3',
      title: 'Web3',
      icon: Blocks,
      description:
        'Building the decentralized future with blockchain technology, smart contracts, and DeFi solutions.',
      features: ['Blockchain Development', 'Smart Contracts', 'DeFi Protocols', 'NFT Platforms'],
      color: 'cyan',
      neonClass: 'neon-card-cyan',
      gradient: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      glowColor: 'rgba(0, 212, 255, 0.2)',
    },
    {
      id: 'ai',
      title: 'AI',
      icon: Brain,
      description:
        'Leveraging artificial intelligence and machine learning to create intelligent, adaptive solutions.',
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'AI Automation',
      ],
      color: 'purple',
      neonClass: 'neon-card-purple',
      gradient: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      glowColor: 'rgba(168, 85, 247, 0.2)',
    },
    {
      id: 'design',
      title: 'Design',
      icon: Palette,
      description:
        'Crafting beautiful, user-centered experiences through thoughtful design and creative innovation.',
      features: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'Creative Direction'],
      color: 'pink',
      neonClass: 'neon-card-pink',
      gradient: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      glowColor: 'rgba(236, 72, 153, 0.2)',
    },
    {
      id: 'development',
      title: 'Development',
      icon: Code,
      description:
        'Building robust, scalable applications with modern technologies and best practices.',
      features: ['Full-Stack Development', 'Mobile Apps', 'DevOps', 'API Development'],
      color: 'green',
      neonClass: 'neon-card-green',
      gradient: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      glowColor: 'rgba(34, 197, 94, 0.2)',
    },
  ];

  return (
    <section id="domains" className="section-spacing relative" ref={sectionRef}>
      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Blocks, Brain, Palette, Code].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            <Icon size={80} className="text-white" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-card rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Core Domains
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Core Pillars
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Four domains of expertise that drive innovation and create value for our community
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredPillar(pillar.id)}
              onHoverEnd={() => setHoveredPillar(null)}
              className={`group glass-card rounded-2xl p-8 ${pillar.neonClass} transition-all duration-500 cursor-pointer relative overflow-hidden`}
            >
              {/* Hover glow overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              {/* Large background icon */}
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                <pillar.icon size={120} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${pillar.gradient} mr-4`}
                    style={{
                      boxShadow: hoveredPillar === pillar.id
                        ? `0 0 25px ${pillar.glowColor}`
                        : 'none',
                      transition: 'box-shadow 0.4s ease',
                    }}
                  >
                    <pillar.icon size={22} className="text-white" />
                  </motion.div>
                  <h3
                    className={`text-2xl font-bold ${pillar.textColor}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{pillar.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 + idx * 0.05 }}
                        className="flex items-center space-x-2 text-xs text-gray-500"
                      >
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-2 ${pillar.textColor} text-sm font-medium opacity-60 group-hover:opacity-100 transition-all duration-300`}
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6 text-sm">Ready to collaborate across all domains?</p>
          <motion.a
            href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-[0_0_25px_rgba(168,85,247,0.2)] neon-btn"
          >
            <span>Join Our Community</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FourPillars;
