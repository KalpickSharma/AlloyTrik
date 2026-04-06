import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema } from '@/schemas/contact';
import { sendEmail } from '@/lib/email';
import { toast } from 'sonner';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await sendEmail(data);
      setIsSuccess(true);
      toast.success('Message sent successfully!', {
        description: "We'll get back to you as soon as possible.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError) =>
    `w-full px-4 py-3.5 bg-white/[0.03] border ${
      hasError
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-white/[0.08] focus:border-cyan-500/50'
    } rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 ${
      hasError ? 'focus:ring-red-500/30' : 'focus:ring-cyan-500/30'
    } backdrop-blur-sm transition-all duration-300 text-sm`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Glass Card Container */}
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-purple-500/[0.03]" />

        {/* Form Content */}
        <div className="relative z-10">
          <h3
            className="text-xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Send us a message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={inputClasses(errors.name)}
                  placeholder="John Doe"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute text-[10px] text-red-400 mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={inputClasses(errors.email)}
                  placeholder="john@example.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute text-[10px] text-red-400 mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider"
              >
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                className={inputClasses(errors.subject)}
                placeholder="How can we help?"
              />
              <AnimatePresence>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute text-[10px] text-red-400 mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={`${inputClasses(errors.message)} resize-none`}
                placeholder="Tell us about your project or inquiry..."
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute text-[10px] text-red-400 mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || isSuccess}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 ${
                isSuccess
                  ? 'bg-green-600'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500'
              } disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,212,255,0.15)]`}
            >
              {/* Shimmer animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{ x: isSubmitting ? ['-100%', '200%'] : '-100%' }}
                transition={{
                  duration: 1.5,
                  repeat: isSubmitting ? Infinity : 0,
                  ease: 'linear',
                }}
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>
          </form>

          <p className="mt-4 text-[10px] text-center text-gray-600">
            We typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactForm;
