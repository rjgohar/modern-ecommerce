import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
type Stat = {
  value: number;
  suffix: string;
  label: string;
};
const stats: Stat[] = [{
  value: 10,
  suffix: 'M+',
  label: 'Active users worldwide'
}, {
  value: 99.9,
  suffix: '%',
  label: 'Uptime guaranteed'
}, {
  value: 150,
  suffix: '+',
  label: 'Countries served'
}, {
  value: 4.9,
  suffix: '/5',
  label: 'Average rating'
}];
function AnimatedNumber({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });
  const display = useTransform(spring, current => {
    if (value % 1 !== 0) {
      return current.toFixed(1);
    }
    return Math.floor(current).toLocaleString();
  });
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);
  return <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>;
}
export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section className="w-full bg-slate-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by teams everywhere
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to build
            better products.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div ref={ref} initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.6
      }} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}