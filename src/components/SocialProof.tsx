import { motion } from 'framer-motion';
import { Award, CheckCircle, Zap } from 'lucide-react';

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
            <div className="text-2xl font-bold text-slate-900">25 Years</div>
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
            <div className="text-2xl font-bold text-slate-900">12K+</div>
            <div className="text-sm text-muted">Homes Powered</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
