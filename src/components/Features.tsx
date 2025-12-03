import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZapIcon, ShieldCheckIcon, BarChart3Icon, UsersIcon } from 'lucide-react';
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const features: Feature[] = [{
  icon: <ZapIcon className="w-6 h-6" />,
  title: 'Lightning fast',
  description: 'Built on modern infrastructure that delivers sub-100ms response times globally. Your users will feel the difference.'
}, {
  icon: <ShieldCheckIcon className="w-6 h-6" />,
  title: 'Enterprise security',
  description: 'SOC 2 Type II certified with end-to-end encryption. Your data stays yours, always.'
}, {
  icon: <BarChart3Icon className="w-6 h-6" />,
  title: 'Deep analytics',
  description: 'Understand your users with real-time insights. Make data-driven decisions that move the needle.'
}, {
  icon: <UsersIcon className="w-6 h-6" />,
  title: 'Team collaboration',
  description: 'Built for teams of all sizes. Real-time editing, comments, and seamless handoffs.'
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="w-full bg-slate-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
            Features
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6">
            Everything you need to ship faster
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg text-slate-600 leading-relaxed">
            We've obsessed over every detail so you can focus on what matters
            most—building great products.
          </motion.p>
        </div>

        {/* Feature cards */}
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => <motion.article key={feature.title} variants={cardVariants} className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200/50">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 text-white mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-950 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle accent on hover - only visual, not interactive */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
}