import { motion, useInView } from 'framer-motion';
import { ExternalLink, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Founders = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const founders = [
    {
      name: 'Kalpick Sharma',
      role: 'Founder & CEO',
      avatar: '/1ad91227420340fa8a847657a28393d3.jpg',
      bio: 'On a mission to connect innovation, technology, and collaboration in the Digital era. Leading AlloyTrik with a vision to create a thriving ecosystem where Web3 meets AI, and Design meets Development.',
      skills: ['Leadership', 'Web3', 'Strategy', 'Innovation'],
      social: {
        linkedin: 'https://www.linkedin.com/in/kalpicksharma',
        email: 'mailto:kalpicksharma@gmail.com',
      },
      color: 'cyan',
      stats: { projects: 24, contributions: 150 },
    },
    {
      name: 'Oshaib Beg',
      role: 'Co-Founder & CSO',
      avatar: '/36d58449-3200-4192-9117-2e27d08e03a6.jpg',
      bio: 'Tech enthusiast and developer advocate. Building the future of collaborative development with cutting-edge technologies and fostering an inclusive community for creators worldwide.',
      skills: ['Development', 'Strategy', 'AI', 'Community'],
      social: {
        linkedin: 'https://www.linkedin.com/in/oshaib-beg-3175b4251/',
        email: 'mailto:oshaibbeg181203@gmail.com',
      },
      color: 'purple',
      stats: { projects: 18, contributions: 120 },
    },
  ];

  const colorConfig = {
    cyan: {
      neonClass: 'neon-card-cyan',
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-600',
      glow: '0 0 30px rgba(0, 212, 255, 0.15)',
      ring: 'ring-cyan-500/30',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    },
    purple: {
      neonClass: 'neon-card-purple',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-600',
      glow: '0 0 30px rgba(168, 85, 247, 0.15)',
      ring: 'ring-purple-500/30',
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
  };

  return (
    <section id="founders" className="section-spacing relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-[120px]" />
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
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Meet Our Founders
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Visionaries Behind AlloyTrik
          </h2>

          <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Two passionate individuals united by a shared vision of creating a collaborative space
            where creators and developers can thrive together.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {founders.map((founder, index) => {
            const config = colorConfig[founder.color];
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -8 }}
                className={`group glass-card rounded-3xl p-8 ${config.neonClass} transition-all duration-500 relative overflow-hidden`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Avatar + info */}
                  <div className="flex items-start space-x-5 mb-6">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      />
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className={`w-20 h-20 rounded-2xl object-cover ring-2 ${config.ring} relative z-10`}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {founder.name}
                      </h3>
                      <p className={`text-sm font-medium ${config.text}`}>{founder.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{founder.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-[10px] font-medium border ${config.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex space-x-6 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <p className={`text-2xl font-bold ${config.text}`}>{founder.stats.projects}+</p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-wider">Projects</p>
                    </div>
                    <div>
                      <p className={`text-2xl font-bold ${config.text}`}>{founder.stats.contributions}+</p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-wider">Contributions</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2.5 glass-card rounded-xl hover:border-cyan-500/30 transition-colors"
                    >
                      <Linkedin size={16} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                      href={founder.social.email}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2.5 glass-card rounded-xl hover:border-purple-500/30 transition-colors"
                    >
                      <Mail size={16} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Want to Connect with Our Founders?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Reach out to discuss collaborations, partnerships, or just to say hello!
            </p>
            <motion.a
              href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 neon-btn px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              <span>Join Our Community</span>
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;