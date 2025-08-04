import { motion } from 'framer-motion';

const BackgroundScroller = () => {
  const keywords = [
    'Web3', 'AI', 'Design', 'Development', 'Community', 'Innovation', 
    'Blockchain', 'Machine Learning', 'UI/UX', 'React', 'Collaboration',
    'Creative', 'Technology', 'Future', 'Build', 'Create', 'Grow'
  ];

  // Create multiple rows for a more dynamic effect
  const createScrollingRow = (direction = 1, speed = 50) => (
    <motion.div
      className="flex whitespace-nowrap"
      animate={{
        x: direction > 0 ? ['-100%', '0%'] : ['0%', '-100%']
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {[...keywords, ...keywords].map((keyword, index) => (
        <span
          key={index}
          className="mx-8 text-6xl md:text-8xl font-bold text-white/5 select-none"
        >
          {keyword}
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Row 1 - Moving right */}
      <div className="absolute top-1/4 left-0 w-[200%]">
        {createScrollingRow(1, 60)}
      </div>
      
      {/* Row 2 - Moving left */}
      <div className="absolute top-1/2 left-0 w-[200%]">
        {createScrollingRow(-1, 80)}
      </div>
      
      {/* Row 3 - Moving right */}
      <div className="absolute top-3/4 left-0 w-[200%]">
        {createScrollingRow(1, 70)}
      </div>
    </div>
  );
};

export default BackgroundScroller;

