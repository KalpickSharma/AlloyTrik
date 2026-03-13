import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Rocket, Code2, Globe } from 'lucide-react';
import { RocketIcon } from 'lucide-react';
import { CollapsibleContent } from '@radix-ui/react-collapsible';
import { Users2Icon } from 'lucide-react';
import { UserSquare } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════ */
function useCounter(end, duration = 2000, start = 0, isActive = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start, isActive]);

  return count;
}

/* ═══════════════════════════════════════════════════
   STATS SECTION
   ═══════════════════════════════════════════════════ */
const Stats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'Community Members',
      color: 'cyan',
    },
    {
      icon: RocketIcon,
      value: 10,
      suffix: '+',
      label: 'Events',
      color: 'purple',
    },
    {
      icon: Code2,
      value: 4,
      suffix: '',
      label: 'Core Domains',
      color: 'pink',
    },
    {
      icon: UserSquare,
      value: 10,
      suffix: '+',
      label: 'Collaborations',
      color: 'green',
    },
  ];

  const colorMap = {
    cyan: { text: 'text-cyan-400', gradient: 'from-cyan-500 to-blue-600', glow: 'rgba(0,212,255,0.15)' },
    purple: { text: 'text-purple-400', gradient: 'from-purple-500 to-pink-600', glow: 'rgba(168,85,247,0.15)' },
    pink: { text: 'text-pink-400', gradient: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.15)' },
    green: { text: 'text-green-400', gradient: 'from-green-500 to-emerald-600', glow: 'rgba(34,197,94,0.15)' },
  };

  return (
    <section className="py-20 relative" ref={sectionRef}>
      {/* Horizontal divider line with glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const config = colorMap[stat.color];
            const count = useCounter(stat.value, 2000, 0, isInView);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${config.gradient} mb-4`}
                  style={{ boxShadow: `0 0 20px ${config.glow}` }}
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>

                <div
                  className={`text-3xl md:text-4xl font-bold ${config.text} mb-2`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {count}
                  {stat.suffix}
                </div>

                <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
};

export default Stats;
