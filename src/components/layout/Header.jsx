import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = 'AlloyTrik';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Web3', href: '#web3', isRoute: false },
    { name: 'AI', href: '#ai', isRoute: false },
    { name: 'Design', href: '#design', isRoute: false },
    { name: 'Development', href: '#development', isRoute: false },
    { name: 'Community', href: '#community', isRoute: false },
    { name: 'Founders', href: '#founders', isRoute: false },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/Instagram post - 8 (2).png"
              alt="AlloyTrik Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      color: '#00d4ff'
                    }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group dark:text-gray-300 light:text-gray-700"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    scale: 1.1,
                    color: '#00d4ff'
                  }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group dark:text-gray-300 light:text-gray-700"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              )
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isMenuOpen ? 0 : -50, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;

