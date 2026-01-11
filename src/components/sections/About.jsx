import { motion } from 'framer-motion';
import {
  Target,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const About = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Collaborative Workspace',
      description: 'Connect with like-minded creators and developers in our vibrant community spaces.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Access tutorials, workshops, and resources to accelerate your learning journey.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Participate in hackathons, challenges, and mentorship programs to level up.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Turn your ideas into reality with support from our expert community.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mission Statement */}
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
            <Target className="text-cyan-400" size={20} />
            <span className="text-white font-medium">Our Mission</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-tight">
            Building a space for creators and developers to collaborate, grow, and innovate
          </h2>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            At AlloyTrik, we believe that the future is built through collaboration. Our platform brings together
            the brightest minds in Web3, AI, Design, and Development to create something extraordinary together.
          </p>
        </motion.div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Join Our Community?
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the benefits of being part of a thriving ecosystem of creators and innovators
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} flex-shrink-0`}
                  >
                    <feature.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6"
          >
            <Lightbulb className="text-white" size={32} />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future Together?
          </h3>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and developers who are already shaping tomorrow.
            Your next breakthrough is just one collaboration away.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Community
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Free to join • No spam • Unsubscribe anytime
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

