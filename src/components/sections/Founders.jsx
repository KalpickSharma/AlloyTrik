import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Founders = () => {
  const founders = [
    {
      name: 'Kalpick Sharma',
      role: 'Founder & CEO',
      image: '/1ad91227420340fa8a847657a28393d3.jpg',
      bio: 'On a mission to connect innovation, technology, and collaboration in the Digital era .',
      color: 'from-cyan-500 to-blue-500',
      socialLinks: [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/kalpicksharma', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:kalpicksharma@gmail.com', label: 'Email' }
      ]
    },
    {
      name: 'Oshaib Beg',
      role: 'Co-Founder & CSO',
      image: '/36d58449-3200-4192-9117-2e27d08e03a6.jpg',
      bio: 'Tech enthusiast and developer advocate. Building the future of collaborative development.',
      color: 'from-purple-500 to-pink-500',
      socialLinks: [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/oshaib-beg-3175b4251/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:oshaibbeg181203@gmail.com', label: 'Email' }
      ]
    }
  ];

  return (
    <section id="founders" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10"
          >
            <span className="text-white font-medium">Meet Our Founders</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 leading-tight">
            The Visionaries Behind AlloyTrik
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Two passionate individuals united by a shared vision of creating a collaborative space 
            where creators and developers can thrive together.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Founder Image */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-300"
                >
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </motion.div>
                
                {/* Role Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r ${founder.color} rounded-full text-white font-semibold text-sm shadow-lg`}
                >
                  {founder.role}
                </motion.div>
              </div>

              {/* Founder Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {founder.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {founder.socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <social.icon 
                      size={20} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Connect with Our Founders?
            </h3>
            <p className="text-gray-400 mb-6">
              Reach out to discuss collaborations, partnerships, or just to say hello!
            </p>
            <motion.a
              href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <span>Join Our Community</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders; 