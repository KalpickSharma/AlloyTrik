import { motion } from 'framer-motion';
import { Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const XLogo = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleHeartClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount === 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 4000);
      setClickCount(0);
    }
  };

  const socialLinks = [
    { icon: XLogo, href: 'https://x.com/alloytrik45089', label: 'X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/alloytrik/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alloytrik@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Web3', href: '#web3' },
    { name: 'AI', href: '#ai' },
    { name: 'Design', href: '#design' },
    { name: 'Development', href: '#development' },
  ];

  const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#community' },
    { name: 'Projects', href: '#projects' },
    { name: 'Founders', href: '#founders' },
    { name: 'Contact', href: '/contact' },
    { name: 'Team', href: '/team' },
    { name: 'Stree Labs', href: '/streelabs' },
  ];

  return (
    <footer className="relative border-t border-white/5 mt-0">
      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="glass-card rounded-3xl p-12 text-center max-w-md mx-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              You found the secret!
            </h3>
            <p className="text-gray-400 mb-6">
              Thanks for exploring our website! You're now part of the AlloyTrik family. Keep
              building amazing things! 💫
            </p>
            <div className="text-cyan-400 font-mono text-sm">
              Made with ❤️ by the AlloyTrik team
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/Instagram post - 8 (2).png"
                alt="AlloyTrik"
                className="w-10 h-10 rounded-xl"
              />
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AlloyTrik
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A collaborative space for creators and developers to innovate, grow, and build the
              future together. Where Web3 meets AI, where Design meets Development.
            </p>

            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <span>Founded by</span>
              <a
                href="https://www.linkedin.com/in/kalpicksharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
              >
                Kalpick Sharma
              </a>
              <span>&</span>
              <a
                href="https://www.linkedin.com/in/oshaib-beg-3175b4251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
              >
                Oshaib Beg
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 glass-card rounded-xl hover:border-cyan-500/30 transition-all duration-300 text-gray-500 hover:text-white"
                >
                  {typeof social.icon === 'function' && social.label === 'X' ? (
                    <social.icon className="text-gray-500 hover:text-white transition-colors" />
                  ) : (
                    <social.icon size={16} />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3
              className="text-sm font-bold text-white uppercase tracking-wider mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Domains
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={12}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3
              className="text-sm font-bold text-white uppercase tracking-wider mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pages
            </h3>
            <div className="space-y-3">
              {pageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-sm text-gray-500 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={12}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Under Construction Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 glass-card rounded-full px-5 py-2.5">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              <div
                className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
            <span className="text-white font-bold text-xs font-mono">
              Website is Under Construction
            </span>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <span>© 2025 AlloyTrik. All rights reserved.</span>
            <motion.button
              onClick={handleHeartClick}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all duration-300"
            >
              <Heart
                size={14}
                className={`${clickCount > 0 ? 'text-red-400 fill-red-400' : 'text-red-400/50'} transition-colors`}
              />
            </motion.button>
            <span>for the community</span>
            {clickCount > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] text-cyan-400 font-mono"
              >
                ({5 - clickCount} more!)
              </motion.span>
            )}
          </div>
          <div className="text-xs text-gray-600">
            Building the future, one collaboration at a time.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
