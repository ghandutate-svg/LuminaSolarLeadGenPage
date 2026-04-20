import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function PricingGuarantee() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Zero Down. Immediate ROI.
          </h2>
          <p className="text-xl text-muted leading-relaxed">
            Finance your solar system with flexible payment options. Your monthly savings typically exceed your solar payment from day one.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-cool-gray border-2 border-solar-amber/20 rounded-lg p-10 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-solar-amber flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                The Lumina Production Guarantee
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                If your system produces less than we promised, we'll pay you the difference in cash. That's our commitment to your energy independence.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-200 rounded-lg">
            <p className="text-sm text-muted mb-2">INSTALLATION</p>
            <p className="text-2xl font-bold text-slate-900">No Cost</p>
            <p className="text-sm text-muted mt-2">Professional setup included</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-lg">
            <p className="text-sm text-muted mb-2">WARRANTY</p>
            <p className="text-2xl font-bold text-slate-900">25 Years</p>
            <p className="text-sm text-muted mt-2">Performance & production</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-lg">
            <p className="text-sm text-muted mb-2">ROOF PROTECTION</p>
            <p className="text-2xl font-bold text-slate-900">10 Years</p>
            <p className="text-sm text-muted mt-2">Roof-Shield leak warranty</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
