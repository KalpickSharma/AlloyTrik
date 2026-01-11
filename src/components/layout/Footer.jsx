import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useState } from 'react';

const XLogo = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 4) { // After 5 clicks
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

  return (
    <footer className="relative bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center max-w-md mx-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              You found the secret!
            </h3>
            <p className="text-gray-300 mb-6">
              Thanks for exploring our website! You're now part of the AlloyTrik family. 
              Keep building amazing things! 💫
            </p>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-cyan-400 font-mono text-sm"
            >
              Made with ❤️ by the AlloyTrik team
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AlloyTrik
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A collaborative space for creators and developers to innovate, grow, and build the future together.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Founded by</span>
              <a 
                href="https://www.linkedin.com/in/kalpicksharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
              >
                Kalpick Sharma
              </a>
              <span>&</span>
              <a 
                href="https://www.linkedin.com/in/oshaib-beg-3175b4251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 cursor-pointer"
              >
                Oshaib Beg
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: '#00d4ff' }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Under Construction Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-white font-bold text-sm font-mono">
              Website is Under Construction
            </span>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>© 2025 AlloyTrik. All rights reserved.</span>
            <motion.button
              onClick={handleHeartClick}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all duration-300"
            >
              <Heart size={16} className="text-red-400" />
            </motion.button>
            <span>for the community</span>
            {clickCount > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs text-cyan-400"
              >
                ({5 - clickCount} more clicks!)
              </motion.span>
            )}
          </div>
          <div className="text-sm text-gray-400">
            Building the future, one collaboration at a time.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

