import { motion, useInView } from 'framer-motion';
import {
  Target,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Collaborative Workspace',
      description:
        'Connect with like-minded creators and developers in our vibrant community spaces.',
      color: 'cyan',
      neonClass: 'neon-card-cyan',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description:
        'Access tutorials, workshops, and resources to accelerate your learning journey.',
      color: 'purple',
      neonClass: 'neon-card-purple',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description:
        'Participate in hackathons, challenges, and mentorship programs to level up.',
      color: 'pink',
      neonClass: 'neon-card-pink',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description:
        'Turn your ideas into reality with support from our expert community.',
      color: 'green',
      neonClass: 'neon-card-green',
    },
  ];

  const colorMap = {
    cyan: { text: 'text-cyan-400', icon: 'from-cyan-500 to-blue-600', glow: 'rgba(0, 212, 255, 0.15)' },
    purple: { text: 'text-purple-400', icon: 'from-purple-500 to-pink-600', glow: 'rgba(168, 85, 247, 0.15)' },
    pink: { text: 'text-pink-400', icon: 'from-pink-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.15)' },
    green: { text: 'text-green-400', icon: 'from-green-500 to-emerald-600', glow: 'rgba(34, 197, 94, 0.15)' },
  };

  return (
    <section id="about" className="section-spacing relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-card rounded-full px-5 py-2.5 mb-8"
          >
            <Target className="text-cyan-400" size={16} />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Our Mission
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8 leading-tight">
            Building a space for creators and developers to collaborate, grow, and innovate
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At AlloyTrik, we believe that the future is built through collaboration. Our platform
            brings together the brightest minds in Web3, AI, Design, and Development to create
            something extraordinary together.
          </p>
        </motion.div>

        {/* Community Features */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h3
              className="text-2xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Join Our Community?
            </h3>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Discover the benefits of being part of a thriving ecosystem of creators and innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group glass-card rounded-2xl p-8 ${feature.neonClass} transition-all duration-500 cursor-pointer`}
              >
                <div className="flex items-start space-x-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${colorMap[feature.color].icon} flex-shrink-0`}
                    style={{ boxShadow: `0 0 20px ${colorMap[feature.color].glow}` }}
                  >
                    <feature.icon size={22} className="text-white" />
                  </motion.div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-white mb-2 group-hover:${colorMap[feature.color].text} transition-colors duration-300`}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6"
                style={{ boxShadow: 'var(--glow-cyan)' }}
              >
                <Lightbulb className="text-white" size={28} />
              </motion.div>

              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to Build the Future Together?
              </h3>

              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Join thousands of creators and developers who are already shaping tomorrow. Your
                next breakthrough is just one collaboration away.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group neon-btn px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-[0_0_25px_rgba(0,212,255,0.25)] flex items-center gap-2"
                >
                  Join Community
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href="#domains"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </div>

              <div className="mt-6 text-xs text-gray-600">
                Free to join • No spam • Unsubscribe anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
