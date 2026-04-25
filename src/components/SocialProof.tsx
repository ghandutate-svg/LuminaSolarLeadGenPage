import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Zap } from 'lucide-react';

function CountUpNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 25 });
  const display = useTransform(spring, (v: number) => `${Math.round(v).toLocaleString()}${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          motionValue.set(target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, motionValue, hasAnimated]);

  return <motion.div ref={ref}>{display}</motion.div>;
}

export function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="social-proof"
      className="py-16 bg-cool-gray border-y border-slate-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Award className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
            <span className="text-slate-700 font-medium">NABCEP Certified</span>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block text-slate-300">
            |
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
            <span className="text-slate-700 font-medium">SEIA Member</span>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block text-slate-300">
            |
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-solar-amber" strokeWidth={1.5} />
            <span className="text-slate-700 font-medium">Energy Star Rated</span>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block text-slate-300">
            |
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-left">
            <div className="text-2xl font-bold text-slate-900">
              <CountUpNumber target={25} suffix=" Years" />
            </div>
            <div className="text-sm text-muted">Performance Warranty</div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block text-slate-300">
            |
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-left">
            <div className="text-2xl font-bold text-slate-900">#1</div>
            <div className="text-sm text-muted">Efficiency Rating</div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block text-slate-300">
            |
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-left">
            <div className="text-2xl font-bold text-slate-900">
              <CountUpNumber target={12} suffix="K+" />
            </div>
            <div className="text-sm text-muted">Homes Powered</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
