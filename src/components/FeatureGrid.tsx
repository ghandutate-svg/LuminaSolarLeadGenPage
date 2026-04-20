import { motion } from 'framer-motion';
import { Zap, Layers, Smartphone } from 'lucide-react';

export function FeatureGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const features = [
    {
      icon: Zap,
      title: 'Tier-1 Performance',
      description: 'Maximum energy harvest in low light conditions with spectral sensitivity technology.',
    },
    {
      icon: Layers,
      title: 'Seamless Aesthetics',
      description: 'Low-profile, all-black mounting designed to complement modern architecture.',
    },
    {
      icon: Smartphone,
      title: 'Smart Ecosystem',
      description: 'Real-time monitoring and optimization through the Lumina App.',
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Premium technology designed to maximize efficiency and minimize visual impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-8 border border-slate-200 rounded-lg hover:border-solar-amber/30 hover:shadow-lg transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <Icon className="w-10 h-10 text-solar-amber mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
