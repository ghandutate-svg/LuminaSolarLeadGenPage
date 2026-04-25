import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
      transition: { duration: 0.5 },
    },
  };

  const faqs = [
    {
      question: 'Does it work when it\'s cloudy?',
      answer:
        'Yes. Our panels capture energy across the full light spectrum, including diffuse light. Systems still generate 10-25% of peak output on overcast days.',
    },
    {
      question: 'What about roof damage?',
      answer:
        'Our Roof-Shield 10-year warranty covers any leaks. We use non-penetrating mounting that distributes load evenly, and we cover all repairs if anything goes wrong.',
    },
    {
      question: 'Is there really $0 upfront?',
      answer:
        'Absolutely. Choose from loans, leases, or power-purchase agreements with no upfront cost. Most customers see positive cash flow from month one.',
    },
    {
      question: 'How long does installation take?',
      answer:
        '1-3 days for a typical residential install. We handle all permitting and inspections, and you\'ll be generating clean energy within weeks of signing.',
    },
    {
      question: 'What about maintenance?',
      answer:
        'Virtually maintenance-free. Most systems need a cleaning once or twice a year, and our monitoring app alerts you to any issues instantly.',
    },
  ];

  return (
    <motion.section
      id="faq"
      className="py-20 bg-cool-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about solar.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-solar-amber/20 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-cool-gray/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-solar-amber flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200"
                  >
                    <div className="p-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
