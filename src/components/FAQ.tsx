import { motion } from 'framer-motion';
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
        'Yes. Our panels feature advanced spectral sensitivity technology that captures energy across the full light spectrum, including diffuse light on cloudy days. On average, systems generate 10-25% of their peak output even in cloudy conditions.',
    },
    {
      question: 'What about roof damage?',
      answer:
        'Our Roof-Shield 10-year leak warranty provides complete protection. We use non-penetrating mounting systems that distribute load evenly, protecting your roof structure. If any leaks occur during installation or operation, we cover all repairs.',
    },
    {
      question: 'Is there really $0 upfront?',
      answer:
        'Absolutely. We offer multiple financing options with no upfront costs. You can choose traditional loans, leases, or power-purchase agreements. Most customers see positive cash flow from month one when accounting for electricity bill savings.',
    },
    {
      question: 'How long does installation take?',
      answer:
        'A typical residential installation takes 1-3 days depending on system size and roof complexity. We handle all permitting and inspections. You\'ll be generating clean energy within weeks of signing.',
    },
    {
      question: 'What about maintenance?',
      answer:
        'Solar panels are virtually maintenance-free. Most systems need a cleaning once or twice per year. Our monitoring app alerts you to any issues instantly, and our support team is available 24/7 for any questions.',
    },
  ];

  return (
    <motion.section
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
              className="border border-slate-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-cool-gray transition-colors duration-200"
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
