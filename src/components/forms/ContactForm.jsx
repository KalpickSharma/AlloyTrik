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
        reset
    } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setIsSuccess(false);

        try {
            await sendEmail(data);
            setIsSuccess(true);
            toast.success('Message sent successfully!', {
                description: 'We\'ll get back to you as soon as possible.'
            });
            reset();

            // Reset success state after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            toast.error('Failed to send message', {
                description: 'Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            {/* Glass Card Container */}
            <div className="relative overflow-hidden rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white/80 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-gray-200 p-8 md:p-12">
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />

                {/* Form Content */}
                <div className="relative z-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2"
                            >
                                Your Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register('name')}
                                className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${errors.name
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-white/10 dark:border-white/10 light:border-gray-300 focus:border-cyan-500'
                                    } rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                                placeholder="John Doe"
                            />
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute text-xs text-red-400 mt-1 flex items-center gap-1"
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
                                className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register('email')}
                                className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${errors.email
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-white/10 dark:border-white/10 light:border-gray-300 focus:border-purple-500'
                                    } rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray -400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300`}
                                placeholder="john@ example.com"
                            />
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute text-xs text-red-400 mt-1 flex items-center gap-1"
                                    >
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Subject Field */}
                        <div className="relative">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2"
                            >
                                Subject *
                            </label>
                            <input
                                id="subject"
                                type="text"
                                {...register('subject')}
                                className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${errors.subject
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-white/10 dark:border-white/10 light:border-gray-300 focus:border-pink-500'
                                    } rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300`}
                                placeholder="How can we help?"
                            />
                            <AnimatePresence>
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute text-xs text-red-400 mt-1 flex items-center gap-1"
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
                                className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                {...register('message')}
                                className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${errors.message
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-white/10 dark:border-white/10 light:border-gray-300 focus:border-cyan-500'
                                    } rounded-xl text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 resize-none`}
                                placeholder="Tell us about your project or inquiry..."
                            />
                            <AnimatePresence>
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute text-xs text-red-400 mt-1 flex items-center gap-1"
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
                            className={`w-full relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${isSuccess
                                    ? 'bg-green-600'
                                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                                } disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50`}
                        >
                            {/* Button Background Animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                animate={{ x: isSubmitting ? ['-100%', '200%'] : '-100%' }}
                                transition={{
                                    duration: 1.5,
                                    repeat: isSubmitting ? Infinity : 0,
                                    ease: 'linear'
                                }}
                            />

                            {/* Button Content */}
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </form>

                    {/* Helper Text */}
                    <p className="mt-4 text-xs text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
                        We typically respond within 24-48 hours
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactForm;
