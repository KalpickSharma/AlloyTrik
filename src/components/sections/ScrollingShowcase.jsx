import { motion, useInView } from 'framer-motion';
import { ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const ScrollingShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'DeFi Dashboard',
      category: 'Web3',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      tags: ['React', 'Web3', 'DeFi'],
      color: 'cyan',
    },
    {
      id: 2,
      title: 'AI Content Generator',
      category: 'AI',
      description: 'Smart content creation tool powered by machine learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      tags: ['Python', 'AI', 'NLP'],
      color: 'purple',
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'Design',
      description: 'Complete visual identity for modern tech startups',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      tags: ['Branding', 'UI/UX', 'Design'],
      color: 'pink',
    },
    {
      id: 4,
      title: 'React Component Library',
      category: 'Development',
      description: 'Reusable UI components for modern web applications',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Storybook'],
      color: 'green',
    },
    {
      id: 5,
      title: 'NFT Marketplace',
      category: 'Web3',
      description: 'Decentralized platform for digital art trading',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      tags: ['Solidity', 'IPFS', 'Web3'],
      color: 'cyan',
    },
    {
      id: 6,
      title: 'ML Model Trainer',
      category: 'AI',
      description: 'No-code platform for training custom machine learning models',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      tags: ['TensorFlow', 'Python', 'ML'],
      color: 'purple',
    },
  ];

  const colorMap = {
    cyan: { badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-400' },
    purple: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', tag: 'bg-purple-500/10 text-purple-400' },
    pink: { badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30', tag: 'bg-pink-500/10 text-pink-400' },
    green: { badge: 'bg-green-500/20 text-green-300 border-green-500/30', tag: 'bg-green-500/10 text-green-400' },
  };

  return (
    <section id="projects" className="section-spacing overflow-hidden relative" ref={sectionRef}>
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-card rounded-full px-5 py-2.5 mb-8"
          >
            <Star size={14} className="text-yellow-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Showcase
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl font-bold gradient-text mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Future Projects
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Discover our latest innovations across Web3, AI, Design, and Development
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent pointer-events-none z-10" />

        <motion.div
          className="flex space-x-6 px-6"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-80 glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${colorMap[project.color].badge}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Action button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 p-2 glass-card rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowUpRight size={16} className="text-white" />
                </motion.button>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-medium ${colorMap[project.color].tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingShowcase;
