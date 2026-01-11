import { Moon, Sun, Droplet, Sunset, Trees, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest('.theme-toggle-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm" />
        );
    }

    const themes = [
        {
            name: 'dark',
            icon: Moon,
            label: 'Dark',
            color: '#22d3ee',
            gradient: 'from-cyan-400 to-blue-500'
        },
        {
            name: 'light',
            icon: Sun,
            label: 'Light',
            color: '#fbbf24',
            gradient: 'from-amber-400 to-yellow-500'
        },
        {
            name: 'ocean',
            icon: Droplet,
            label: 'Ocean',
            color: '#3b82f6',
            gradient: 'from-blue-400 to-cyan-500'
        },
        {
            name: 'sunset',
            icon: Sunset,
            label: 'Sunset',
            color: '#f97316',
            gradient: 'from-orange-400 to-pink-500'
        },
        {
            name: 'forest',
            icon: Trees,
            label: 'Forest',
            color: '#22c55e',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            name: 'galaxy',
            icon: Sparkles,
            label: 'Galaxy',
            color: '#a855f7',
            gradient: 'from-purple-400 to-pink-500'
        }
    ];

    const currentTheme = themes.find(t => t.name === theme) || themes[0];
    const CurrentIcon = currentTheme.icon;

    return (
        <div className="relative theme-toggle-container">
            {/* Theme Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
            >
                {/* Animated background glow */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradient} opacity-20`}
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Current Theme Icon */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <CurrentIcon className="w-5 h-5" style={{ color: currentTheme.color }} />
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Theme Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-12 right-0 w-48 bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 border border-white/20 dark:border-white/20 light:border-gray-200 rounded-xl p-2 backdrop-blur-xl z-50 shadow-2xl"
                    >
                        {/* Dropdown Header */}
                        <div className="px-3 py-2 border-b border-white/10 dark:border-white/10 light:border-gray-200 mb-2">
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 uppercase tracking-wide">
                                Choose Theme
                            </p>
                        </div>

                        {/* Theme Options */}
                        <div className="space-y-1">
                            {themes.map((t) => {
                                const ThemeIcon = t.icon;
                                const isActive = theme === t.name;

                                return (
                                    <motion.button
                                        key={t.name}
                                        onClick={() => {
                                            // Explicitly remove other theme classes to prevent accumulation
                                            const themeNames = themes.map(t => t.name);
                                            document.documentElement.classList.remove(...themeNames);
                                            setTheme(t.name);
                                            setTimeout(() => setIsOpen(false), 200);
                                        }}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive
                                            ? 'bg-white/20 dark:bg-white/20 light:bg-gray-100'
                                            : 'hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50'
                                            }`}
                                    >
                                        {/* Icon with gradient background */}
                                        <div className={`p-1.5 rounded-lg bg-gradient-to-r ${t.gradient}`}>
                                            <ThemeIcon className="w-4 h-4 text-white" />
                                        </div>

                                        {/* Theme Name */}
                                        <span className={`text-sm font-medium flex-1 text-left ${isActive
                                            ? 'text-white dark:text-white light:text-gray-900'
                                            : 'text-gray-300 dark:text-gray-300 light:text-gray-700'
                                            }`}>
                                            {t.label}
                                        </span>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="mt-2 pt-2 border-t border-white/10 dark:border-white/10 light:border-gray-200">
                            <p className="text-xs text-center text-gray-500 dark:text-gray-500 light:text-gray-400">
                                Theme saved automatically
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ThemeToggle;
