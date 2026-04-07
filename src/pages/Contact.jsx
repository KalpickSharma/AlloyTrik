import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'alloytrik@gmail.com',
      href: 'mailto:alloytrik@gmail.com',
      color: 'cyan',
      neonClass: 'neon-card-cyan',
      gradient: 'from-cyan-500 to-blue-600',
      glow: 'rgba(0, 212, 255, 0.15)',
    },
    {
      icon: MessageCircle,
      title: 'Join Community',
      content: 'WhatsApp Community',
      href: 'https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t',
      color: 'purple',
      neonClass: 'neon-card-purple',
      gradient: 'from-purple-500 to-pink-600',
      glow: 'rgba(168, 85, 247, 0.15)',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Remote & Global',
      color: 'green',
      neonClass: 'neon-card-green',
      gradient: 'from-green-500 to-emerald-600',
      glow: 'rgba(34, 197, 94, 0.15)',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24-48 hours',
      color: 'pink',
      neonClass: 'neon-card-pink',
      gradient: 'from-pink-500 to-rose-600',
      glow: 'rgba(236, 72, 153, 0.15)',
    },
  ];

  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        <section className="section-spacing relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 glass-card rounded-full px-5 py-2.5 mb-8"
              >
                <Mail size={14} className="text-cyan-400" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                  Get In Touch
                </span>
              </motion.div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-8 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Let's Build Something Amazing
              </h1>

              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Want to collaborate? Or just want to say hello? We'd love
                to hear from you!
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`glass-card rounded-2xl p-6 ${info.neonClass} transition-all duration-500 group`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.gradient} mb-4`}
                    style={{ boxShadow: `0 0 20px ${info.glow}` }}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center max-w-2xl mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Prefer Direct Communication?
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                    Join our vibrant WhatsApp community to connect directly with our founders and
                    fellow creators.
                  </p>
                  <motion.a
                    href="https://chat.whatsapp.com/CziMtXXYgkH451fKPYMDan?mode=ac_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 neon-btn px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Join Community</span>
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
