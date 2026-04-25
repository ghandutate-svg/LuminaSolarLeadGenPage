import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetYourDesign: (zipCode: string) => void;
}

export function Hero({ onGetYourDesign }: HeroProps) {
  const [zipCode, setZipCode] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8406974/pexels-photo-8406974.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: textOpacity }}
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
          Lower your bills and raise your home's value with the world's most efficient solar technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative"
        >
          <input
            type="text"
            placeholder="Enter your zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="flex-1 px-5 py-4 rounded-lg bg-white text-slate-900 placeholder-muted font-medium focus:outline-none focus:ring-2 focus:ring-solar-amber"
          />
          <div className="relative">
            <button
              onClick={() => {
                if (zipCode.trim()) {
                  onGetYourDesign(zipCode);
                }
              }}
              className="relative px-8 py-4 solar-gradient text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-solar-amber/30 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap group"
            >
              Get Your Design
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <span className="absolute inset-0 rounded-lg solar-gradient animate-ping opacity-20 pointer-events-none" />
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-sm text-gray-300 font-light"
        >
          Join 12,000+ homeowners already saving with Lumina
        </motion.p>
      </motion.div>
    </section>
  );
}
