import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetYourDesign: (zipCode: string) => void;
}

export function Hero({ onGetYourDesign }: HeroProps) {
  const [zipCode, setZipCode] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8406974/pexels-photo-8406974.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Energy Independence, Artfully Engineered.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed font-light"
        >
          Lower your monthly bills and increase your home's value with the world's most efficient solar technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Enter your zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="flex-1 px-5 py-4 rounded-lg bg-white text-slate-900 placeholder-muted font-medium focus:outline-none focus:ring-2 focus:ring-solar-amber"
          />
          <button
            onClick={() => {
              if (zipCode.trim()) {
                onGetYourDesign(zipCode);
              }
            }}
            className="px-8 py-4 bg-solar-amber text-slate-900 font-semibold rounded-lg hover:bg-refined-gold transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get Your Design
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
