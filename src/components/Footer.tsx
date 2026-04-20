import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestAssessment: () => void;
}

export function Footer({ onRequestAssessment }: FooterProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <motion.section
        className="py-20 bg-slate-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The 2026 Solar Credits are limited.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Secure your rate today and lock in federal tax incentives before they decline. Starting next year, the Investment Tax Credit decreases annually.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={onRequestAssessment}
            className="inline-flex items-center gap-2 px-8 py-4 bg-solar-amber text-slate-900 font-semibold rounded-lg hover:bg-refined-gold transition-colors duration-200"
          >
            Request Your Solar Assessment
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>

      <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; 2026 Lumina Solar. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
