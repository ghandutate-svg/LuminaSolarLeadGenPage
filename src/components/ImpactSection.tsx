import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export function ImpactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="py-20 bg-cool-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Savings, Real Fast.
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-muted mb-4 leading-relaxed">
                  Watch your energy costs stabilize while utility rates continue to climb.
                </p>
                <div className="h-48 bg-white rounded-lg p-6 border border-slate-200">
                  <div className="flex items-end justify-between h-full gap-2">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gradient-to-t from-red-200 to-red-300 rounded" style={{ height: '60%' }} />
                      <span className="text-xs text-muted mt-2">2024</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gradient-to-t from-red-300 to-red-400 rounded" style={{ height: '75%' }} />
                      <span className="text-xs text-muted mt-2">2025</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gradient-to-t from-red-400 to-red-500 rounded" style={{ height: '90%' }} />
                      <span className="text-xs text-muted mt-2">2026</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-solar-amber rounded" style={{ height: '25%' }} />
                      <span className="text-xs text-muted mt-2">With Solar</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 mt-6 text-sm">
                  <div>
                    <p className="text-red-600 font-semibold">Rising Utility Costs</p>
                  </div>
                  <div>
                    <p className="text-solar-amber font-semibold">Fixed Solar Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <TrendingUp className="w-6 h-6 text-solar-amber flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    Our monthly bill dropped from $240 to $12.
                  </p>
                  <p className="text-muted leading-relaxed">
                    The system paid for itself faster than we imagined. It's been the best decision for our family's financial future.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900">The Harrison Family</p>
                <p className="text-sm text-muted">Sacramento, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
