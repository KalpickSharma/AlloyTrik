import { motion, useInView } from 'framer-motion';
import {
  Sparkles,
  Users,
  Rocket,
  Heart,
  Code2,
  Palette,
  Globe,
  BrainCircuit,
  MessageCircle,
  Megaphone,
  Lightbulb,
  ArrowRight,
  Shield,
  Eye,
  Fingerprint,
} from 'lucide-react';
import { useRef } from 'react';
import Layout from '@/components/layout/Layout';

/* ── Reusable section observer ── */
const useSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return { ref, inView };
};

const StreeLabsPage = () => {
  /* ── Data ── */
  const domains = [
    { icon: BrainCircuit, title: 'AI & ML', desc: 'Explore artificial intelligence, machine learning, and data science with women leading the charge.', color: 'from-rose-500 to-pink-600', glow: 'rgba(244, 63, 94, 0.15)' },
    { icon: Globe, title: 'Web3 & Blockchain', desc: 'Dive into the decentralized future — from smart contracts to NFTs and DAO governance.', color: 'from-violet-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.15)' },
    { icon: Palette, title: 'Design & UX', desc: 'Craft beautiful, user-centered experiences — UI design, brand systems, and creative direction.', color: 'from-fuchsia-500 to-pink-600', glow: 'rgba(217, 70, 239, 0.15)' },
    { icon: Code2, title: 'Development', desc: 'Full-stack, mobile, APIs, DevOps — build robust software solutions together.', color: 'from-pink-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.15)' },
    { icon: Megaphone, title: 'Content & Branding', desc: 'Content strategy, copywriting, social media, and personal branding for the digital age.', color: 'from-amber-500 to-orange-600', glow: 'rgba(245, 158, 11, 0.15)' },
    { icon: Lightbulb, title: 'Entrepreneurship', desc: 'From ideation to execution — build your startup, pitch your idea, and scale with community support.', color: 'from-emerald-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.15)' },
  ];

  const pillars = [
    { icon: Shield, title: 'Safe Space', desc: 'A judgment-free environment where every voice is valued and every question welcomed.', accent: '#f43f5e' },
    { icon: Eye, title: 'Visibility', desc: 'Amplifying women\'s work, stories, and achievements in tech and beyond.', accent: '#a855f7' },
    { icon: Fingerprint, title: 'Identity', desc: 'Own your narrative — build a professional identity that reflects your unique strengths.', accent: '#ec4899' },
    { icon: Rocket, title: 'Growth', desc: 'Continuous learning through mentorship, workshops, hackathons, and peer reviews.', accent: '#8b5cf6' },
  ];

  const activities = [
    'Weekly Knowledge Sessions',
    'Collaborative Projects',
    'Portfolio Reviews',
    'Resume & Interview Prep',
    'Open Mic & Lightning Talks',
    'Hackathon Squads',
    'Mentorship Circles',
    'Community Spotlights',
  ];

  /* ── Section refs ── */
  const hero = useSection();
  const domainsSection = useSection();
  const pillarsSection = useSection();
  const activitiesSection = useSection();
  const ctaSection = useSection();

  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="section-spacing relative overflow-hidden" ref={hero.ref}>
          {/* BG blurs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-rose-500/[0.04] rounded-full blur-[200px]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/[0.04] rounded-full blur-[180px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/[0.03] rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={hero.inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={hero.inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 rounded-full px-5 py-2.5 mb-8"
                  style={{
                    background: 'rgba(244, 63, 94, 0.08)',
                    border: '1px solid rgba(244, 63, 94, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Sparkles className="text-rose-400" size={16} />
                  <span className="text-xs font-medium text-rose-300 uppercase tracking-widest">
                    By AlloyTrik, For Women
                  </span>
                </motion.div>

                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: 'linear-gradient(135deg, #f43f5e, #a855f7, #ec4899)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 6s ease infinite',
                  }}
                >
                  Stree Labs
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-4">
                  A dedicated, inclusive space within AlloyTrik built for women :
                  focused on meaningful conversations, collaboration, and growth.
                </p>

                <p className="text-base text-gray-500 max-w-xl leading-relaxed mb-8">
                  From <span className="text-rose-400 font-medium">AI</span>,{' '}
                  <span className="text-violet-400 font-medium">Web3</span>,{' '}
                  <span className="text-fuchsia-400 font-medium">Design</span>, and{' '}
                  <span className="text-pink-400 font-medium">Development</span> to
                  content, branding, and beyond — building confidence, visibility,
                  and identity in a safe, growth-driven environment.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <motion.a
                    href="https://chat.whatsapp.com/ErT9ga31220JTp9U6zoTSl"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full shadow-lg neon-btn transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                      boxShadow: '0 0 25px rgba(244, 63, 94, 0.25)',
                    }}
                  >
                    <Users size={18} />
                    Join Stree Labs
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="#domains"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 font-semibold rounded-full transition-all duration-300 text-gray-300 hover:text-white"
                    style={{
                      border: '1px solid rgba(244, 63, 94, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    Explore Domains
                  </motion.a>
                </div>
              </motion.div>

              {/* Right: Logo showcase */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={hero.inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-8 rounded-3xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1))',
                      filter: 'blur(30px)',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Image */}
                  <motion.img
                    src="/Instagram post - 14.png"
                    alt="Stree Labs — Women in Tech"
                    className="relative z-10 w-full max-w-lg rounded-2xl"
                    style={{
                      border: '1px solid rgba(244, 63, 94, 0.2)',
                      boxShadow: '0 4px 60px rgba(244, 63, 94, 0.12), 0 0 0 1px rgba(168, 85, 247, 0.08)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Orbiting dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: 3 + (i % 3) * 2,
                        height: 3 + (i % 3) * 2,
                        background:
                          i % 3 === 0
                            ? 'rgba(244, 63, 94, 0.7)'
                            : i % 3 === 1
                              ? 'rgba(168, 85, 247, 0.7)'
                              : 'rgba(236, 72, 153, 0.7)',
                        top: `${10 + i * 11}%`,
                        left: i % 2 === 0 ? '-5%' : '103%',
                      }}
                      animate={{ y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] }}
                      transition={{
                        duration: 2.5 + i * 0.4,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PILLARS — Safe Space, Visibility, Identity, Growth
        ═══════════════════════════════════════════ */}
        <section className="section-spacing relative overflow-hidden" ref={pillarsSection.ref}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/[0.03] rounded-full blur-[140px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pillarsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-2xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Stree Labs
                </span>{' '}
                Stands For
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                The core values that shape every interaction, project, and conversation in our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={pillarsSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl p-7 text-center cursor-pointer transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.accent}08, transparent)`,
                    border: `1px solid ${pillar.accent}25`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${pillar.accent}, ${pillar.accent}99)`,
                      boxShadow: `0 0 25px ${pillar.accent}30`,
                    }}
                  >
                    <pillar.icon size={24} className="text-white" />
                  </motion.div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            DOMAINS
        ═══════════════════════════════════════════ */}
        <section
          id="domains"
          className="section-spacing relative overflow-hidden"
          ref={domainsSection.ref}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[160px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={domainsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-2xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Domains We{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Explore
                </span>
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                Tech and non-tech — there's a place for every woman who wants to learn, build, and grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={domainsSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl p-8 cursor-pointer transition-all duration-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(244, 63, 94, 0.1)',
                    backdropFilter: 'blur(20px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.3)';
                    e.currentTarget.style.boxShadow = `0 0 30px ${domain.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${domain.color} mb-5`}
                    style={{ boxShadow: `0 0 20px ${domain.glow}` }}
                  >
                    <domain.icon size={22} className="text-white" />
                  </motion.div>
                  <h3
                    className="text-lg font-bold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {domain.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{domain.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ACTIVITIES
        ═══════════════════════════════════════════ */}
        <section className="section-spacing relative overflow-hidden" ref={activitiesSection.ref}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-rose-500/[0.03] rounded-full blur-[160px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={activitiesSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-2xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What Happens in{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Stree Labs
                </span>
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                Regular activities designed to foster learning, networking, and real-world experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={activitiesSection.inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="rounded-xl px-5 py-4 text-center cursor-pointer transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${index % 4 === 0
                        ? 'rgba(244, 63, 94, 0.08)'
                        : index % 4 === 1
                          ? 'rgba(168, 85, 247, 0.08)'
                          : index % 4 === 2
                            ? 'rgba(236, 72, 153, 0.08)'
                            : 'rgba(139, 92, 246, 0.08)'
                      }, transparent)`,
                    border: `1px solid ${index % 4 === 0
                        ? 'rgba(244, 63, 94, 0.15)'
                        : index % 4 === 1
                          ? 'rgba(168, 85, 247, 0.15)'
                          : index % 4 === 2
                            ? 'rgba(236, 72, 153, 0.15)'
                            : 'rgba(139, 92, 246, 0.15)'
                      }`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-sm font-medium text-gray-300">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section className="section-spacing relative overflow-hidden" ref={ctaSection.ref}>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={ctaSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div
                className="rounded-3xl p-12 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.06), rgba(168, 85, 247, 0.06))',
                  border: '1px solid rgba(244, 63, 94, 0.15)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Subtle animated gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                      boxShadow: '0 0 30px rgba(244, 63, 94, 0.3)',
                    }}
                  >
                    <Heart className="text-white" size={28} />
                  </motion.div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Ready to be Part of{' '}
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Stree Labs
                    </span>
                    ?
                  </h3>

                  <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                    Whether you're just starting out or you're a seasoned professional — there's
                    a place for you here. Let's grow together.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                      href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group neon-btn px-8 py-3.5 text-white font-semibold rounded-full flex items-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #f43f5e, #a855f7)',
                        boxShadow: '0 0 25px rgba(244, 63, 94, 0.25)',
                      }}
                    >
                      <MessageCircle size={16} />
                      Join the Community
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                      href="mailto:alloytrik@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3.5 font-semibold rounded-full text-gray-300 hover:text-white transition-all duration-300"
                      style={{
                        border: '1px solid rgba(244, 63, 94, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      Get in Touch
                    </motion.a>
                  </div>

                  <div className="mt-6 text-xs text-gray-600">
                    Open to all women • Free to join • Safe & inclusive
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StreeLabsPage;
