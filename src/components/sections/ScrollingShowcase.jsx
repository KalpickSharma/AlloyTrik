import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const ScrollingShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "DeFi Dashboard",
      category: "Web3",
      description: "Real-time cryptocurrency portfolio tracker with advanced analytics",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      tags: ["React", "Web3", "DeFi"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "AI Content Generator",
      category: "AI",
      description: "Smart content creation tool powered by machine learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      tags: ["Python", "AI", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Design",
      description: "Complete visual identity for modern tech startups",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      tags: ["Branding", "UI/UX", "Design"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 4,
      title: "React Component Library",
      category: "Development",
      description: "Reusable UI components for modern web applications",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      tags: ["React", "TypeScript", "Storybook"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "NFT Marketplace",
      category: "Web3",
      description: "Decentralized platform for digital art trading",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      tags: ["Solidity", "IPFS", "Web3"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "ML Model Trainer",
      category: "AI",
      description: "No-code platform for training custom machine learning models",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      tags: ["TensorFlow", "Python", "ML"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Future Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our latest innovations across Web3, AI, Design, and Development
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <motion.div
          className="flex space-x-6 px-6"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400" />
                    <span>{Math.floor(Math.random() * 100) + 50}</span>
                  </div>
                  <span>Updated recently</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default ScrollingShowcase;

