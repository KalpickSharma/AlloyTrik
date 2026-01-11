import { motion } from 'framer-motion';
import {
  Blocks,
  Brain,
  Palette,
  Code,
  ArrowRight,
  Zap,
  Globe,
  Sparkles
} from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { useState } from 'react';

const FourPillars = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [showSecret, setShowSecret] = useState(false);

  const pillars = [
    {
      id: 'web3',
      title: 'Web3',
      icon: Blocks,
      description: 'Building the decentralized future with blockchain technology, smart contracts, and DeFi solutions.',
      features: ['Blockchain Development', 'Smart Contracts', 'DeFi Protocols', 'NFT Platforms'],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-400',
      textColor: 'text-cyan-400',
      secretMessage: '🌐 The future is decentralized!'
    },
    {
      id: 'ai',
      title: 'AI',
      icon: Brain,
      description: 'Leveraging artificial intelligence and machine learning to create intelligent, adaptive solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-400',
      textColor: 'text-purple-400',
      secretMessage: '🤖 AI is the new electricity!'
    },
    {
      id: 'design',
      title: 'Design',
      icon: Palette,
      description: 'Crafting beautiful, user-centered experiences through thoughtful design and creative innovation.',
      features: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'Creative Direction'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-500/10 to-rose-600/10',
      borderColor: 'border-pink-500/30',
      hoverColor: 'hover:border-pink-400',
      textColor: 'text-pink-400',
      secretMessage: '🎨 Design is not just what it looks like!'
    },
    {
      id: 'development',
      title: 'Development',
      icon: Code,
      description: 'Building robust, scalable applications with modern technologies and best practices.',
      features: ['Full-Stack Development', 'Mobile Apps', 'DevOps', 'API Development'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-400',
      textColor: 'text-green-400',
      secretMessage: '💻 Code is poetry in motion!'
    }
  ];

  const handlePillarClick = (pillarId) => {
    setActivePillar(pillarId);
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 3000);
  };

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 4 === 0 ? (
              <Blocks className="text-cyan-400/20" size={24} />
            ) : i % 4 === 1 ? (
              <Brain className="text-purple-400/20" size={24} />
            ) : i % 4 === 2 ? (
              <Palette className="text-pink-400/20" size={24} />
            ) : (
              <Code className="text-green-400/20" size={24} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Secret Message */}
      {showSecret && activePillar && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-4"
            >
              {pillars.find(p => p.id === activePillar)?.secretMessage}
            </motion.div>
            <p className="text-white/80 text-sm">Click anywhere to continue exploring!</p>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Core Pillars
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Four domains of expertise that drive innovation and create value for our community
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-gray-500 mt-4"
          >
            💡 <span className="text-cyan-400">Pro tip:</span> Click on any pillar to discover a secret message!
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: `0 20px 40px rgba(${pillar.id === 'web3' ? '6, 182, 212' : pillar.id === 'ai' ? '168, 85, 247' : pillar.id === 'design' ? '236, 72, 153' : '34, 197, 94'}, 0.15)`
              }}
              onClick={() => handlePillarClick(pillar.id)}
              className={`group relative bg-gradient-to-br ${pillar.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${pillar.borderColor} ${pillar.hoverColor} transition-all duration-500 overflow-hidden cursor-pointer`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${pillar.color}`} />
              </div>

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <pillar.icon size={80} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${pillar.color} mr-4`}
                  >
                    <pillar.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className={`text-2xl font-bold ${pillar.textColor} mb-1`}>
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Areas:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <Sparkles size={12} className={pillar.textColor} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-2 ${pillar.textColor} hover:text-white transition-colors duration-300 group/btn`}
                >
                  <span className="font-medium">Explore {pillar.title}</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to collaborate across all domains?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FourPillars;

