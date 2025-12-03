import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
export function Hero() {
  return <section className="relative min-h-screen w-full gradient-dark noise-overlay overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
              <SparklesIcon className="w-4 h-4 text-amber" />
              Introducing our newest platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Build products that{' '}
            <span className="text-gradient">people love</span> to use
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            The modern platform for teams who want to ship faster, iterate
            smarter, and create experiences that truly resonate with their
            users.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-coral text-white font-semibold text-lg shadow-lg shadow-coral/25 transition-shadow hover:shadow-xl hover:shadow-coral/30">
              Get started free
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg transition-colors hover:bg-white/10">
              See how it works
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={itemVariants} className="mt-16 pt-10 border-t border-white/10">
            <p className="text-slate-500 text-sm mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              {['Vercel', 'Linear', 'Notion', 'Figma', 'Stripe'].map(company => <span key={company} className="text-slate-400 font-semibold text-lg tracking-tight">
                    {company}
                  </span>)}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent" />
    </section>;
}