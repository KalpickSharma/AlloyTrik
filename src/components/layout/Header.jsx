import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Domains', href: '#domains', isRoute: false },
    { name: 'Projects', href: '#projects', isRoute: false },
    { name: 'Founders', href: '#founders', isRoute: false },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  const NavLink = ({ item, index, isMobile = false }) => {
    const isActive = item.isRoute && location.pathname === item.href;
    
    const className = `relative text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
      isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
    } ${isMobile ? 'block py-3 text-lg' : ''}`;

    const content = (
      <>
        {item.name}
        {!isMobile && (
          <motion.div
            className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        )}
      </>
    );

    if (item.isRoute) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {content}
        </Link>
      );
    }

    const href = item.href.startsWith('#') && location.pathname !== '/' ? `/${item.href}` : item.href;

    return (
      <a
        key={item.name}
        href={href}
        className={className}
        onClick={() => setIsMenuOpen(false)}
      >
        {content}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <img
                src="/Instagram post - 8 (2).png"
                alt="AlloyTrik Logo"
                className="w-10 h-10 rounded-xl relative z-10"
              />
            </motion.div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AlloyTrik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink item={item} index={index} />
              </motion.div>
            ))}

            {/* Join CTA */}
            <motion.a
              href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
            >
              Join Community
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-xl glass-card"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#030014]/95 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink item={item} index={index} isMobile />
                </motion.div>
              ))}
              <motion.a
                href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block mt-4 px-6 py-3 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
              >
                Join Community
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
