import { motion, useInView } from 'framer-motion';
import { Users, Github, Linkedin, Twitter } from 'lucide-react';
import { useRef } from 'react';

const TeamScroller = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '50px' });

  const team = [
    {
      id: 1,
      name: 'Abhishek Sharma',
      role: 'Content Creator',
      image: '/abhishek.jpg',
      color: 'cyan'
    },
    {
      id: 2,
      name: 'Shreshtha Anand',
      role: 'Content Creator',
      image: '/Shreshtha.webp',
      color: 'purple'
    },
    {
      id: 3,
      name: 'Sakshi Gupta',
      role: 'Content Creator',
      image: '/Sakshi.webp',
      color: 'pink'
    },
    {
      id: 4,
      name: 'Nandani Gupta',
      role: 'Content Creator',
      image: '/Nandani.webp',
      color: 'green'
    },
    {
      id: 5,
      name: 'Pushkar Tripathi',
      role: 'Public Relations',
      image: '/Pushkar.webp',
      color: 'cyan'
    },
    {
      id: 6,
      name: 'Kashvi Tyagi',
      role: 'Public Relations',
      image: '/Kashvi.webp',
      color: 'purple',
      objectPosition: 'object-top'
    },
    {
      id: 7,
      name: 'Mukul Mehta',
      role: 'Public Relations',
      image: '/Mukul.jpg',
      color: 'pink'
    },
    {
      id: 8,
      name: 'Harsimran Singh',
      role: 'Content Creator',
      image: '/Harsimran.jpg',
      color: 'green'
    }
  ];

  const colorMap = {
    cyan: { badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' },
    purple: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]' },
    pink: { badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30', glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]' },
    green: { badge: 'bg-green-500/20 text-green-300 border-green-500/30', glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]' },
  };

  return (
    <section id="team" className="section-spacing overflow-hidden relative" ref={sectionRef}>
      <div className="container mx-auto px-9 mb-16">
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
            <Users size={14} className="text-purple-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Core Team
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl font-bold gradient-text mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the Makers
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            The brilliant minds driving innovation behind the scenes at AlloyTrik
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
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
          {[...team, ...team].map((member, index) => (
            <motion.div
              key={`${member.id}-${index}`}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 w-64 glass-card rounded-2xl overflow-hidden group cursor-pointer ${colorMap[member.color].glow} transition-all duration-300`}
            >
              {/* Member Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 ${member.objectPosition || 'object-center'}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />

                {/* Social Links on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="p-2 glass-card rounded-xl hover:text-cyan-400 transition-colors">
                    <Github size={18} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="p-2 glass-card rounded-xl hover:text-blue-400 transition-colors">
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="p-2 glass-card rounded-xl hover:text-blue-300 transition-colors">
                    <Twitter size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-2 ${colorMap[member.color].badge}`}>
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamScroller;
