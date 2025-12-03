import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
const benefits = ['Free 14-day trial', 'No credit card required', 'Cancel anytime'];
export function CTA() {
  return <section className="w-full bg-slate-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="relative bg-slate-950 rounded-3xl p-10 lg:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Headline */}
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
          }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform how your team works?
            </motion.h2>

            {/* Subheading */}
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
          }} className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Start building better products today. Join the thousands of teams
              already shipping faster with us.
            </motion.p>

            {/* CTA buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-coral text-white font-semibold text-lg shadow-lg shadow-coral/25 transition-shadow hover:shadow-xl hover:shadow-coral/30">
                Start free trial
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-lg transition-colors hover:bg-white/15">
                Talk to sales
              </motion.button>
            </motion.div>

            {/* Benefits */}
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="flex flex-wrap items-center justify-center gap-6">
              {benefits.map(benefit => <div key={benefit} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckIcon className="w-4 h-4 text-coral" />
                  {benefit}
                </div>)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}